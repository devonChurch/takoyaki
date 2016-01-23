'use strict';

const fs = require('fs');
let html = '';

function init(snippets) {

    for (const snippet of snippets) {

        buildSnippet(snippet);

    }

    fetchHomepage();

}

function buildSnippet(s) {

    html += `
        <article>
            <a href="${s.href}">
                <h2>${s.heading}</h2>
            </a>
            <h3>${s.hash}</h3>
            ${s.time}
        </article>
    `;

}

function fetchHomepage() {

    fs.readFile('index.html', 'utf8', updateHomepage);
}

function updateHomepage(err, data) {

    if (err) throw err;

    replaceSnippets(data);
    saveHomepage();

}

function replaceSnippets(data) {

    const open = '<section class="posts">';
    const close = '</section> <!-- #posts -->';

    const start = data.indexOf(open) + open.length;
    const end = data.indexOf(close);

    const top = data.substr(0, start);
    const bottom = data.substr(end);

    html = `${top}${html}${bottom}`;

}

function saveHomepage() {

    fs.writeFileSync('./index.html', html);

}

module.exports = init;
