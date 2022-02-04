import path from 'path';

/** The root project directory  */
const ROOT_DIR = path.join(__dirname, '..', '..', '..');

export const config = {
	server: {
		port: 8000,
		https: true,
		serveStatic: true,
		publicPath: '/static/'
	},
	paths: {
		root: ROOT_DIR,
		static: path.join(ROOT_DIR, 'static'),
		webpack: path.join(ROOT_DIR, 'webpack'),
		key: path.join(ROOT_DIR, '.cert/key.pem'),
		cert: path.join(ROOT_DIR, '.cert/cert.pem')
	},
	helmet: {
		contentSecurityPolicy: false,
		referrerPolicy: {
			policy: 'strict-origin-when-cross-origin'
		}
	}
};
