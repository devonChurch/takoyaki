'use strict';

const fs = require('fs');

{

    if (checkArgments()) {

        let order = getOrder();
        order = addPost(order);
        saveOrder(order);
        generateTemplate();

        console.log(`SUCCESS: Post has been added into order.js and as a stand alone ${process.argv[2]}.jade template`);


    } else {

        console.log('ERROR: Please provide a post file name i.e my-new-post');

    }

}

function checkArgments() {

    return process.argv.length > 2;

}

function getOrder() {

    return fs.readFileSync('./order.js', 'utf8');

}

function addPost(data) {

    const open = 'module.exports = [';
    const insert = data.indexOf(open) + open.length;
    const start = data.substr(0, insert);
    const end = data.substr(insert + 1);

    return `${start}
    '${process.argv[2]}',
${end}`;

}

function saveOrder(data) {

    fs.writeFileSync('./order.js', data);

}

function generateTemplate() {

    const template = fs.readFileSync('./template.jade', 'utf8');
    fs.writeFileSync(`../../src/posts/${process.argv[2]}.jade`, template);

}
