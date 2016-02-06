'use strict';

const fs = require('fs');
const dir = '../../src/';

function init(posts) {


    let snippets = compileSnippets(posts);
    snippets = constructSnippets(snippets);
    injectSnippets(snippets);

}

function compileSnippets(posts) {

    let snippets = '';

    for (const post of posts) {

        let data = getPost(post);
        data = distillData(post, data);
        snippets += data;

    }

    return snippets;

}

function getPost(post) {

    return fs.readFileSync(`${dir}posts/${post}.jade`, 'utf8');

}

function distillData(post, data) {

    return `
    {
        href: '${post}',
        ${extractData(data)}
    },
`;

}

function extractData(data) {

    const open = 'post = {';
    const close = '} //- post ]';
    const start = data.indexOf(open) + open.length;
    data = data.substr(start);
    const end = data.indexOf(close);

    return data.substr(0, end).trim();

}

function constructSnippets(snippets) {

    return `
-
    snippets = [
        ${snippets}
    ];
`;

}

function injectSnippets(snippets) {

    fs.writeFileSync(`${dir}partials/curate.jade`, snippets);

}

module.exports = init;
