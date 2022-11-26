import supertest from 'supertest';
import app from '../app';
import fs from 'fs';
import processing from '../util/processing';

const request = supertest(app);

describe('Testing endpoints', () => {
	it('finds if the api responds', async () => {
		const response = await request.get('/api');
		expect(response.status).toEqual(200);
	});
	it('Invalid routs show a message', async () => {
		const response = await request.get('/asd');
		expect(response.text).toEqual(
			'Not a valid rout. please use http://localhost:3000/api?name=fileName&h=height&w=width'
		);
	});
});

describe('Testeng processing', () => {
	beforeAll(() => {
		fs.copyFileSync('src/tests/test-media/abcd.jpg', 'media/original/abcd.jpg');
		processing('abcd', '100', '100', () => {
			console.log('Done Processing');
		});
	});
	it('finds if the image is processed', () => {
		setTimeout(() => {
			expect(fs.existsSync('media/thumb/abcd100x100.jpg')).toBeTrue();
		}, 4000);
	});
	afterAll(() => {
		fs.unlink('media/original/abcd.jpg', () => {
			console.log('Test media input deleted');
		});
		fs.unlink('media/thumb/abcd100x100.jpg', () => {
			console.log('Test media output deleted');
		});
	});
});
