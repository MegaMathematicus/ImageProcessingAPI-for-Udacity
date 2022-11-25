import express from 'express';
import fs from 'fs';

const msg =
	'invalid parameters: you should have name: The name of the file, w: the width of the output, h: the height of the output';

const checker = (
	req: express.Request,
	res: express.Response,
	next: () => void
): void => {
	if (fs.existsSync(`media/original/${req.query.name}.jpg`)) {
		try {
			if (
				parseInt(req.query.h as string) == +(req.query.h as string) &&
				parseInt(req.query.w as string) == +(req.query.w as string)
			) {
				next();
			} else {
				res.send(msg);
			}
		} catch (error) {
			res.send(msg);
		}
	} else {
		res.send(msg);
	}
};

export default checker;
