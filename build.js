const glob = require('glob');
const pug = require('pug');
const fs = require('fs');

const allPugFiles = glob.globSync('**/*.pug');

for (const pugFile of allPugFiles) {
	const result = pug.compileFile(pugFile)();
	const htmlFile = pugFile.replace(/.pug$/, '.html');
	fs.writeFileSync(htmlFile, result, { encoding: 'utf-8' });
}
