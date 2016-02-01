const helper = require('./helper');

const Scroll = class {

    constructor() {

        console.log('Scroll....');

        this.listeners();

    }

    listeners() {

        helper.$body.on('click', '#scrollToTop', (e) => this.activate(e));

    }

    activate(e) {

        helper.$page.animate({scrollTop: 0}, helper.speed.fast);

        e.preventDefault();

    }

};

module.exports = new Scroll();
