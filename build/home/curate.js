'use strict';

const fs = require('fs');
const posts = require('../posts/order');
const dir = '../../src/';

{

    let snippets = compileSnippets();
    snippets = constructSnippets(snippets);
    injectSnippets(snippets);

    console.log('SUCCESS: Curated post onto the home page as the appear in the build/posts/order.js config file');

}

function compileSnippets() {

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

    const open = 'page = {';
    const close = '} //- page ]';
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

    fs.writeFileSync(`${dir}partials/curated.jade`, snippets);

}
