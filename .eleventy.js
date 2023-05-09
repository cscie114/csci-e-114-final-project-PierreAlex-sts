module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/**");
    eleventyConfig.addPassthroughCopy("srci/js");
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };  
};
