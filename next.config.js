/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ];
    },
    webpack: (webpackConfig, { webpack }) => {
      webpackConfig.module.rules.push(
        {
          test: /\.node$/,
          loader: "node-loader",
        }
      );
      webpackConfig.plugins.push(
        // Remove node: from import specifiers, because Next.js does not yet support node: scheme
        // https://github.com/vercel/next.js/issues/28774
        new webpack.NormalModuleReplacementPlugin(
          /^node:/,
          (resource) => {
            resource.request = resource.request.replace(/^node:/, '');
          },
        ),
      );
  
      return webpackConfig;
    },
  };