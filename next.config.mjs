/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Otimização de imagens (next/image) — formatos modernos + cache longo.
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [
      // Adicione aqui domínios externos de imagem quando necessário.
      // { protocol: 'https', hostname: 'cdn.grupoflm.com.br' },
    ],
  },

  // Endurecimento de headers HTTP (segurança + confiança para público sênior).
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  experimental: {
    // Otimiza a importação de bibliotecas grandes (tree-shaking mais agressivo).
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
