'use strict';

const fs = require('fs');
const uglifycss = require('uglifycss');

{

    const raw = getStyle();
    const uglified = uglifyStyle(raw);
    saveStyle(uglified);

    console.log('SUCCESS: Uglified ./dist/style.css');

}

function getStyle() {

    return fs.readFileSync('../../dist/style.css', 'utf8');

}

function uglifyStyle(raw) {

    return uglifycss.processString(
        raw,
        {}
    );

}

function saveStyle(uglified) {

    fs.writeFileSync('../../dist/style.css', uglified);

}
