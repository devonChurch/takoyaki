'use strict';

const fs = require('fs');
const posts = require('./posts');
const snippets = {};
let reads = 1;

{

    for (const post of posts) {

        queryPost(post);

    }

}

function queryPost(post) {

    fs.readFile(`posts/${post}.html`, 'utf8', (err, data) => {

        if (err) throw err;

        snippets[post] = distillData(data);
        reads += 1;
        if (reads === post.length) console.log(snippets);

    });

}

function distillData(data) {

    const heading = extractElement(data, '<h1>', '</h1>', 'content');
    const hash = extractElement(data, '<h3 class="post-hashtag">', '</h3>', 'content');
    const time = extractElement(data, '<time class="post-creation"', '</time>', 'element');

    return { heading, hash, time };

}

function extractElement(data, open, close, extraction) {

    const start = extraction === 'content' ? data.indexOf(open) + open.length : data.indexOf(open);
    data = data.substr(start);
    const end = extraction === 'content' ? data.indexOf(close) : data.indexOf(close) + close.length;

    return data.substr(0, end);

}
