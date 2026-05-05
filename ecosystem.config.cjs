const path = require('node:path');

require('dotenv').config({
  path: [path.resolve(__dirname, '.env.local'), path.resolve(__dirname, '.env')],
  quiet: true,
});

module.exports = {
  apps: [
    {
      name: 'portafolio-astro',
      script: './dist/server/entry.mjs',
      cwd: __dirname,
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 4200,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        MY_EMAIL: process.env.MY_EMAIL,
        RESEND_EMAIL: process.env.RESEND_EMAIL,
      },
    },
  ],
};
