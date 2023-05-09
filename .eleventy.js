module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/**");
    eleventyConfig.addPassthroughCopy("src/_data");
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };  
};
