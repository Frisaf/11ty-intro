import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addShortcode("formatDate", () => {
		return `${new Date().toISOString().split("T")[0]} ${new Date().toTimeString().split(" ")[0].slice(0, 5)}`
	});

	return {
		markdownTemplateEngine: "njk",
	}
};