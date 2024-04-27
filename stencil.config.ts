import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

export const config: Config = {
  plugins:[
    sass({
      injectGlobalPaths:[
        "src/globals/variables.scss",
        "src/globals/mixins.scss"      
      ]
    })
  ],
  namespace: 'ui-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
