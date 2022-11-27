import express from 'express';
import index from './router/index';
const port = 3000;

const app = express();
app.use(express.static('media'));

app.use('/api', index);
app.get('*', (req: express.Request, res: express.Response) => {
	res.send(
		'Not a valid rout. please use http://localhost:3000/api?name=fileName&h=height&w=width'
	);
});

app.listen(port as number, () => {
	console.log(`Started at http://localhost:${port}`);
});

export default app;
