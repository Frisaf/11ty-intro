export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");

	return {
		markdownTemplateEngine: "njk",
	}
};