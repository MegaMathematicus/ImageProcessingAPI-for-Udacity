import sharp from 'sharp';
import fs from 'fs';

function wait(pth: string, call: () => void) {
	if (fs.existsSync(pth)) {
		setTimeout(call, 100);
	} else {
		setTimeout(wait, 2000, pth, call);
	}
}

function processing(
	name: string,
	w: string,
	h: string,
	call: () => void
): void {
	try {
		const pathIn = `media/original/${name}.jpg`;
		const pathOut = `media/thumb/${name}${w}x${h}.jpg`;
		const dims: [number, number] = [parseInt(w), parseInt(h)];
		if (!fs.existsSync('media/thumb/')) {
			fs.mkdirSync('media/thumb/');
		}
		if (!fs.existsSync('media/original/')) {
			fs.mkdirSync('media/original/');
		}
		sharp(pathIn)
			.resize(dims[0], dims[1])
			.toFile(pathOut, (error) => {
				console.log(error);
			});

		wait(pathOut, call);
	} catch (error) {
		console.log(error);
	}
}

export default processing;
