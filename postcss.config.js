const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    require("tailwindcss")('./tailwind.config.js'),
    require("autoprefixer"),
    ...(isProduction ? [require("@fullhuman/postcss-purgecss")({
      whitelistPatterns: [/svg-inline--fa/],

      // Specify the paths to all of the template files in your project
      content: [
        "./src/**/*.html",
        "./src/**/*.vue",
        "./node_modules/vue-good-table/src/components/**/*.vue",
      ],

      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    })] : []),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};