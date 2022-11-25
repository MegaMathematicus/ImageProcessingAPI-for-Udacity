import express from 'express';
import processing from '../../util/processing';

const checker = (
	req: express.Request,
	res: express.Response,
	next: () => void
): void => {
	res.type('jpg');
	processing(
		req.query.name as string,
		req.query.w as string,
		req.query.h as string,
		next
	);
};

export default checker;
