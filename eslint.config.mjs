import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = [
  { ignores: ['.open-next/**', '.wrangler/**', 'cloudflare-env.d.ts'] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintConfigPrettier
];

export default eslintConfig;
