import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_login',
      remotes: {
        mf_footer:
          'mf_footer@http://localhost:3003/mf-manifest.json',
        mf_host:
          'mf_host@http://localhost:2000/mf-manifest.json',
      },
      exposes: {
        './login': './src/features/Login.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3000,
  },

});