'use strict';

const Imagemin = require('imagemin');

new Imagemin()
	.src('../../src/img/*.{gif,jpg,png,svg}')
	.dest('../../dist/img')
	.use(Imagemin.jpegtran({progressive: true}))
    .use(Imagemin.optipng({optimizationLevel: 3}))
	.run((err, files) => {
		console.log(files[0]);
		// => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>}
	});
