'use strict';

const fs = require('fs');
const inject = require('./inject');
const snippets = [];

function init(posts) {

    for (const post of posts) queryPost(post);
    inject(snippets);

}

function queryPost(post) {

    const data = fs.readFileSync(`../../dist/${post}.html`, 'utf8');
    snippets.push(distillData(post, data));

}

function distillData(post, data) {

    const href = `${post}.html`;
    const heading = extractElement(data, '<h1>', '</h1>', 'content');
    const hash = extractElement(data, '<h3 class="post-hashtag">', '</h3>', 'content');
    const time = extractElement(data, '<time class="post-creation"', '</time>', 'element');

    return { href, heading, hash, time };

}

function extractElement(data, open, close, extraction) {

    const start = extraction === 'content' ? data.indexOf(open) + open.length : data.indexOf(open);
    data = data.substr(start);
    const end = extraction === 'content' ? data.indexOf(close) : data.indexOf(close) + close.length;

    return data.substr(0, end);

}

module.exports = init;
