module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addWatchTarget("dist/assets/css");
    eleventyConfig.addWatchTarget("dist/assets/js");
  
    return {
      dir: {
        input: "src",
        output: "dist",
        includes: "_includes",
        layouts: "_layouts"
      }
    };
  };