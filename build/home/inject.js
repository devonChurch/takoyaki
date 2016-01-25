'use strict';

const fs = require('fs');
const override = require('../helper/override');
const dir = '../../src/index.jade';

function init(snippets) {

    let html = '';
    for (const snippet of snippets) html += buildSnippet(snippet);
    html = updateHomepage(`${html}`, fs.readFileSync(dir, 'utf8'));
    saveHomepage(html)

}

function buildSnippet(s) {

    return `
    article
        a(href='${s.href}')
            h2 ${s.heading}
        h3 ${s.hash}
        ${s.time}
`;

}

function updateHomepage(html, data) {

    return override(html, '//- [ Posts', '//- Posts ]', data);

}

function saveHomepage(html) {

    fs.writeFileSync(dir, html);

}

module.exports = init;
