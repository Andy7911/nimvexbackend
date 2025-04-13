/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(css|scss)$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: { 
              sourceMap: true,
              url: {
                filter: (url) => {
                  // ✅ Autorise les URLs inline data:image/svg+xml
                  if (url.startsWith("data:image/svg+xml")) {
                    return false; // Empêche Webpack de le traiter
                  }
                  return true;
                },
              },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      });
      config.devtool = 'source-map';
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**', // Accepte toutes les images dans /uploads/
      },
      {
        protocol: 'https',
        hostname: '**', // Accepte toutes les images sécurisées
      },
    ],
  },
};

module.exports = nextConfig;
