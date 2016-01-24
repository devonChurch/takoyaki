'use strict';

const fs = require('fs');
const override = require('../helper/override');
const dir = '../../src/index.jade';

function init(snippets) {

    let html = '';
    for (const snippet of snippets) html += buildSnippet(snippet);
    html = updateHomepage(`<section class="posts">${html}</section>`, fs.readFileSync(dir, 'utf8'));
    saveHomepage(html)

}

function buildSnippet(s) {

    const html = `
        <article>
            <a href="${s.href}">
                <h2>${s.heading}</h2>
            </a>
            <h3>${s.hash}</h3>
            ${s.time}
        </article>
    `;

    // Jade build fails with HTML indentation (4 spaces = tab).
    return html.replace(/    /g, '');

}

function updateHomepage(html, data) {

    return override(html, '<!-- <posts> -->', '<!-- </posts> -->', data);

}

function saveHomepage(html) {

    fs.writeFileSync(dir, html);

}

module.exports = init;
