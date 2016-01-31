'use strict';

const dir = '../../src/svg/';
const SVGSpriter = require('svg-sprite');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

// The SVG shell that will eventually be saved to disk with the compiled icons.
let svg = '';

// Pull out all icon reference from the /raw directory. These will be compiled
// into the single sprite.
const files = glob.sync(`${dir}/raw/*.svg`);

// New sprites reference with a config object that produces the line <symbol>
// SVG setup rather than the generic CSS sprinting format that comes as default.
const spriter = new SVGSpriter({
    mode: {
        inline : true,
        symbol : true
    }
});

// Loop through out “Globbed” files and add them to the sprite.
for (const file of files) {

    spriter.add(
        path.resolve(file),
        null,
        fs.readFileSync(file, {encoding: 'utf-8'})
    );

}

// Compile the individual SVG icons into a singular data string.
spriter.compile((error, result) => {

    for (const type in result.symbol) {

        svg += result.symbol[type].contents;
        injectClass();
        saveSvgIcons();

    }

});

// Add in a master class to the SVG wrapper so that we can easily hide it when
// injected into the DOM.
function injectClass() {

    const ref = '<svg';
    const injectPoint = svg.indexOf(ref) + ref.length;

    svg = `${svg.substr(0, injectPoint)} class="iconSprite"${svg.substr(injectPoint)}`;

}

// Save the file to disk =)
function saveSvgIcons() {

    fs.writeFileSync(`${dir}icons.svg`, svg);

}
