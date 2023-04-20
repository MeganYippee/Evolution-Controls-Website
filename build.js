const glob = require('glob');
const pug = require('pug');
const fs = require('fs');
const path = require('path');

const pugDirectory = 'pug-src';

const allPugFiles = glob.globSync(`${pugDirectory}/**/*.pug`);

for (const pugFile of allPugFiles) {
	const result = pug.compileFile(pugFile)({
		baseUrl: process.env.BASE_URL ?? '/',
	});

	// Get the filepath for the html file
	const htmlFile = path.join('build', pugFile.replace(/.pug$/, '.html').substring(pugDirectory.length + 1));

	// Create all of the folders and subfolders that will contain the generated html file
	fs.mkdirSync(path.dirname(htmlFile), { recursive: true });

	// Create the html file itself
	fs.writeFileSync(htmlFile, result, { encoding: 'utf-8' });
}
