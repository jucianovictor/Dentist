const nextConfig = {
	productionBrowserSourceMaps: true,
	i18n: {
		locales: ['pt-br'],
		defaultLocale: 'pt-br',
	},
	images: {
		domains: ['i.ibb.co', 'freepngimg.com', 'raw.githubusercontent.com'],
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [320, 520, 768, 1024, 1440, 1920, 2560, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256],
	},
};

module.exports = nextConfig;
