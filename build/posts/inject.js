'use strict';

const fs = require('fs');
const override = require('../helper/override');
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
require('file?name=${post}.html!jade-html!./posts/${post}.jade');`;

}

function getEntry(post) {

    return fs.readFileSync(dir, 'utf8');

}

function updateEntryJs(js, data) {

    return override(js, '/* [ Posts */', '/* Posts ] */', data);

}

function saveEntryJs(js) {

    fs.writeFileSync(dir, js);

}

module.exports = init;
