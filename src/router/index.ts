import express from 'express';
import exists from './util/does-exist';
import process from './util/process';
import pipe from './util/pipe';
import valid from './util/true-params';
const router = express.Router();

router.get('/', exists, valid, process, pipe, () => {
	console.log('ended');
});

export default router;
