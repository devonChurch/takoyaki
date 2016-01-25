'use strict';

const fs = require('fs');
const inject = require('./inject');
const snippets = [];

function init(posts) {

    for (const post of posts) queryPost(post);
    inject(snippets);

}

function queryPost(post) {

    const data = fs.readFileSync(`../../src/posts/${post}.jade`, 'utf8');
    snippets.push(distillData(post, data));

}

function distillData(post, data) {

    const href = `${post}.html`;
    const heading = extractData(data, 'Heading');
    const hash = extractData(data, 'Hash Tag');
    const time = extractData(data, 'Date');

    return { href, heading, hash, time };

}

function extractData(data, ref) {

    const open = `//- [ ${ref}`;
    const close = `//- ${ref} ]`;
    const start = data.indexOf(open) + open.length;
    data = data.substr(start);
    const end = data.indexOf(close);

    return data.substr(0, end).trim();

}

module.exports = init;
