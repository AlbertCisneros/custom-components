import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

export const config: Config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        "src/globals/stl-ui-components.scss"
      ]
    })
  ],
  namespace: 'lamc-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: "**/*.{eot,svg,ttf,woff}",
          dest: "dist/assets/fonts",
          warn: true
        },
        {
          src: "**/*.{png,svg,jpg}",
          dest: "dist/assets/img",
          warn: true
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
  testing: {
    browserHeadless: "new",
  },
};
