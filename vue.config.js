var path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	baseUrl: '/',
	configureWebpack: config => {

		require('vux-loader').merge(config, {
			options: {},
			plugins: ['vux-ui']
		})
		config.resolve = {
			extensions: ['.js', '.vue', '.json'],
			alias: {
//				'vue$': 'vue/dist/vue.esm.js',
				'@': resolve('src'),
//				'img': resolve('src/img')
			}
		}

	},
	devServer: {
		proxy: {
			'/liuyi': {
				target: 'https://member-test.esmart365.com/',
				// target: 'https://dev-member.esmart365.com',
				pathRewrite: {
					'^/liuyi': ''
				}
			}
			// ,
			// '/lottery': {
			//     // target: 'https://dev-order.esmart365.com',
			//     target: 'https://order-test.esmart365.com',
			//     pathRewrite: { '^/lottery': '' }
			// }
		}
	}
}