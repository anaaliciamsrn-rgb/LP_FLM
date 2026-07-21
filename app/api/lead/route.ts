import { NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validations/lead-schema';

/**
 * Endpoint de recebimento de leads.
 *
 * Valida no servidor (mesmo schema Zod do cliente) e está PREPARADO para
 * integração futura:
 *  - E-mail: envie via provedor (Resend, SES, Nodemailer) onde indicado.
 *  - CRM: faça o POST para o webhook do CRM em LEAD_WEBHOOK_URL.
 *
 * Enquanto a integração não é ligada, apenas registra e responde 200.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Dados inválidos.', issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const lead = parsed.data;

  try {
    // --- INTEGRAÇÃO CRM (futuro) ---------------------------------------
    // if (process.env.LEAD_WEBHOOK_URL) {
    //   await fetch(process.env.LEAD_WEBHOOK_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(lead),
    //   });
    // }

    // --- ENVIO DE E-MAIL (futuro) --------------------------------------
    // await sendLeadEmail(lead);

    // Registro temporário (remover em produção ou trocar por logger).
    console.info('[lead] novo contato recebido:', {
      name: lead.name,
      phone: lead.phone,
      planFor: lead.planFor,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Falha ao processar o lead.' }, { status: 500 });
  }
}
