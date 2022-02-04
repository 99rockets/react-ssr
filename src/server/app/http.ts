import fs from 'fs';
import os from 'os';
import http from 'http';
import https from 'https';
import {app} from './app';
import {config} from '../config';

const httpsEnabled = config.server.https;
const host = process.env.NODE_ENV === 'development' ? 'localhost' : os.hostname();
const port = httpsEnabled ? 443 : config.server.port;
const protocol = httpsEnabled ? 'https://' : 'http://';

process.title = 'react';
console.info(`Process pid: ${process.pid}\nNode env: ${process.env.NODE_ENV}`);

const server = httpsEnabled
	? https.createServer({
		key: fs.readFileSync(config.paths.key),
		cert: fs.readFileSync(config.paths.cert)
	}, app)
	: http.createServer(app);

server.on('listening', () => console.info(
	`Application: ${protocol + host}:${port}`
));

server.listen(port);
