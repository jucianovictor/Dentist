const nextConfig = {
	i18n: {
		locales: ['pt-br'],
		defaultLocale: 'pt-br',
	},
	images: {
		domains: ['i.ibb.co', 'freepngimg.com'],
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
};

module.exports = nextConfig;
