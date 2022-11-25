import express from 'express';
import fs from 'fs';
import sharp from 'sharp';

const checker = (
	req: express.Request,
	res: express.Response,
	next: () => void
): void => {
	if (
		fs.existsSync(
			`media/thumb/${req.query.name}${req.query.w}x${req.query.h}.jpg`
		)
	) {
		res.type('jpg');
		sharp(
			`media/thumb/${req.query.name}${req.query.w}x${req.query.h}.jpg`
		).pipe(res);
	} else {
		next();
	}
};

export default checker;
