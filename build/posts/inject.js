'use strict';

const fs = require('fs');
const dir = '../../src/entry.js';

function init(posts) {

    let js = '';
    for (const post of posts) js += buildStatements(post);
    const data = getEntry();
    js = updateEntryJs(js, data);
    saveEntryJs(js);

}

function buildStatements(post) {

    return `
require('file?name=${post}.html!jade-html!./posts/${post}');`;

}

function getEntry() {

    return fs.readFileSync(dir, 'utf8');

}

function updateEntryJs(js, data) {

    const open = '/* [ Posts */';
    const close = '/* Posts ] */';

    const start = data.indexOf(open) + open.length;
    const end = data.indexOf(close);

    const top = data.substr(0, start);
    const bottom = data.substr(end);

    return `${top}${js}${bottom}`;

}

function saveEntryJs(js) {

    fs.writeFileSync(dir, js);

}

module.exports = init;
