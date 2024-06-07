//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // Export website in root project
  distDir: '../../dist/apps/special-fortnight',

  // Settings for github pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  /**
   * This is for github pages correct routing
   */
  basePath: process.env.BASE_PATH || '',
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
