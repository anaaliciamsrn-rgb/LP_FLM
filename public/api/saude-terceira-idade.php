<?php
// 1. Cabeçalhos padrões de comunicação e segurança CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// 2. Responde imediatamente ao teste de segurança do navegador (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 2. RATE LIMIT AVANÇADO (5 ENVIOS A CADA 30 MINUTOS)
$ip_cliente = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$ip_hash = md5($ip_cliente); // Criptografia anônima para LGPD
$janela_tempo = 1800; // 30 minutos em segundos
$limite_envios = 5; // 5 envios permitidos dentro da janela de tempo

$pasta_tmp = sys_get_temp_dir(); // Pasta segura temporária do servidor
$arquivo_historico = $pasta_tmp . '/rate_' . $ip_hash . '.json';

$agora = time();
$historico = [];

// Se o registro do IP já existir, carrega o histórico de cliques
if (file_exists($arquivo_historico)) {
    $conteudo = file_get_contents($arquivo_historico);
    $dados_salvos = json_decode($conteudo, true);
    if (is_array($dados_salvos)) {
        $historico = $dados_salvos;
    }
}

// Limpa do histórico cliques antigos que já passaram de 30 minutos
$historico = array_filter($historico, function($timestamp) use ($agora, $janela_tempo) {
    return ($agora - $timestamp) < $janela_tempo;
});

// Verifica se o usuário estourou o limite de 5 envios ativos na janela
if (count($historico) >= $limite_envios) {
    $mais_antigo = min($historico);
    $tempo_restante_segundos = $janela_tempo - ($agora - $mais_antigo);
    $tempo_restante_minutos = ceil($tempo_restante_segundos / 60);

    http_response_code(429); // Código HTTP oficial para Too Many Requests
    echo json_encode([
        "error" => "Limite de envios excedido. Tente novamente em {$tempo_restante_minutos} minutos.",
        "retry_after_minutes" => $tempo_restante_minutos
    ]);
    exit;
}

// Adiciona o envio atual ao histórico e salva o arquivo no servidor
$historico[] = $agora;
file_put_contents($arquivo_historico, json_encode(array_values($historico)));


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido."]);
    exit;
}

// 3. Carrega o e-mail de destino ($toEmail) do arquivo central da FLM uma pasta acima
require_once __DIR__ . '/_smtp-config.php';

$json_input = file_get_contents("php://input");
$data = json_decode($json_input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Dados inválidos."]);
    exit;
}

// 4. Validação do Honeypot (Anti-Robô de SPAM)
if (!empty($data['website'])) {
    http_response_code(200); 
    echo json_encode(["success" => "Processado."]);
    exit;
}

// 5. Captura e Limpeza Rigorosa dos Dados (XSS / Sanitização)
$nome          = strip_tags(trim($data['name'] ?? ''));
$email         = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$whatsapp      = strip_tags(trim($data['phone'] ?? ''));
$perfil        = strip_tags(trim($data['planFor'] ?? ''));
$idade_um      = strip_tags(trim($data['age'] ?? ''));
$idade_dois    = strip_tags(trim($data['secondAge'] ?? ''));
$cidade        = strip_tags(trim($data['city'] ?? ''));
$mensagem      = strip_tags(trim($data['message'] ?? ''));
$ip_cliente    = $_SERVER['REMOTE_ADDR'] ?? 'IP Não identificado';
$data_envio    = date('d/m/Y H:i:s');

// Validação de campos obrigatórios do esquema
if (empty($nome) || empty($email) || empty($whatsapp) || empty($perfil)) {
    http_response_code(400);
    echo json_encode(["error" => "Campos obrigatórios ausentes."]);
    exit;
}

// 6. Montagem do Assunto e do Corpo HTML Dinâmico
$assunto = "Novo Lead - Plano de Saúde Terceira Idade SP";

$corpoHtml = "
<html>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
  <div style='max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; padding: 24px; border-radius: 8px; background-color: #ffffff;'>
    <h2 style='color: #0f172a; border-bottom: 2px solid #dc2626; padding-bottom: 8px; margin-top: 0;'>Nova Análise de Plano de Saúde</h2>
    <p><strong>Data de Recebimento:</strong> {$data_envio}</p>
    
    <hr style='border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;'>
    
    <p><strong>Nome do Interessado:</strong> {$nome}</p>
    <p><strong>E-mail:</strong> {$email}</p>
    <p><strong>WhatsApp:</strong> <a href='https://wa.me" . preg_replace('/[^0-9]/', '', $whatsapp) . "' style='color: #25d366; font-weight: bold;'>Chamar no WhatsApp ({$whatsapp})</a></p>
    <p><strong>O plano é para:</strong> {$perfil}</p>
    
    <!-- Exibição condicional inteligente das idades -->
    <p><strong>Idade do Primeiro Beneficiário:</strong> " . (!empty($idade_um) ? "{$idade_um} anos" : "Não informada") . "</p>";

if ((($perfil === 'para-casal') || ($perfil === 'para-meus-pais')) && !empty($idade_dois)) {
    $corpoHtml .= "<p><strong>Idade do Segundo Beneficiário:</strong> {$idade_dois} anos</p>";
}

if (!empty($cidade)) {
    $corpoHtml .= "<p><strong>Cidade:</strong> {$cidade}</p>";
}

if (!empty($mensagem)) {
    $corpoHtml .= "<p><strong>Mensagem/Observações:</strong><br><span style='font-style: italic; color: #555;'>{$mensagem}</span></p>";
}

$corpoHtml .= "
    <hr style='border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;'>
    <p style='font-size: 11px; color: #64748b; margin-bottom: 0;'>Lead capturado de forma segura. IP de origem: {$ip_cliente}</p>
  </div>
</body>
</html>
";

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: sistema@grupoflm.com.br" . "\r\n"; 
$headers .= "Reply-To: " . $email . "\r\n";

// 7. Envia usando a variável $toEmail definida no _smtp-config.php da FLM
if (mail($toEmail, $assunto, $corpoHtml, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => "Lead enviado com sucesso."]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Erro interno no disparo de e-mail do servidor."]);
}
?>
