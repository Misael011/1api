import { Router } from 'express';
import lugar from './routes/lugares.routes';

export default () => {
	const app = Router();
	lugar(app);
	return app
}
