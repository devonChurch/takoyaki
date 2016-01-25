'use strict';

const fs = require('fs');
const override = require('../helper/override');
const dir = '../../src/js/entry.js';

function init(posts) {

    let js = '';
    for (const post of posts) js += buildStatements(post);
    js = updateEntryJs(js, fs.readFileSync(dir, 'utf8'));
    saveEntryJs(js);

}

function buildStatements(post) {

    return `
require('file?name=${post}.html!jade-html!../posts/${post}.jade');`;

}

function updateEntryJs(js, data) {

    return override(js, '/* [ Posts */', '/* Posts ] */', data);

}

function saveEntryJs(js) {

    fs.writeFileSync(dir, js);

}

module.exports = init;
