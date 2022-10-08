// eslint-disable-next-line prettier/prettier,@typescript-eslint/no-var-requires
const Dotenv = require('dotenv-webpack');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/styles/_variable.scss";
        @import "@/styles/_mixin.scss"; 
        @import "@/styles/_media-table.scss"; 
        @import "@/styles/_media-mobile.scss";
        `,
      },
    },
  },
};
