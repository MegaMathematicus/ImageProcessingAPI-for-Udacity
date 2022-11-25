import express from 'express';
import sharp from 'sharp';

const checker = (
	req: express.Request,
	res: express.Response,
	next: () => void
): void => {
	sharp(`media/thumb/${req.query.name}${req.query.w}x${req.query.h}.jpg`).pipe(
		res
	);
	next();
};

export default checker;
