const { EleventyEdgePlugin } = require("@11ty/eleventy");


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/**");
    eleventyConfig.addPassthroughCopy("src/_data");
    eleventyConfig.addPassthroughCopy("src/");
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };  
};
