const $ = require('jquery');

const Type = class {

    constructor() {

        console.log('Type constructor');

        this.min = 0.875;
        this.max = 1.875;

        // this.

        console.log(this.font.min);


    }

    get font() {

        return {
            min: 0.875,
            max: 1.875
        };

    }

    get width() {

        return {
            min: 30,
            max: 62.5
        };

    }

};

module.exports = new Type();
