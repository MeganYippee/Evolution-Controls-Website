const glob = require('glob');
const pug = require('pug');
const fs = require('fs');

const pugDirectory = 'pug-src';

const allPugFiles = glob.globSync(`${pugDirectory}/**/*.pug`);

for (const pugFile of allPugFiles) {
	const result = pug.compileFile(pugFile)();
	const htmlFile = pugFile.replace(/.pug$/, '.html').substring(pugDirectory.length + 1);
	fs.writeFileSync(htmlFile, result, { encoding: 'utf-8' });
}
