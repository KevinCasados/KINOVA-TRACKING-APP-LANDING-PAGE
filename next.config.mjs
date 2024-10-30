/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita la exportación estática

  images: {
    unoptimized: true, // Desactiva la optimización de imágenes
  },

  webpack(config) {
    // Configuración de manejo de SVGs
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // ...otras configuraciones
};

export default nextConfig;