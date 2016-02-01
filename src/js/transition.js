const $ = require('jquery');
const helper = require('./helper');

const Transition = class {

    constructor() {

        console.log('Transition....');

        this.listeners();

    }

    listeners() {

        helper.$body.on('click', 'a', (e) => this.activate(e));

    }

    activate(e) {

        const $link = $(e.currentTarget);

        if (!this.queryLink($link)) {

            helper.$body.addClass('structure--transition');
            setTimeout(() => this.redirect($link), helper.speed.fast);
            e.preventDefault();

        }

    }

    queryLink($link) {

        const target = $link.attr('target') === '_blank';
        const email = $link.attr('href').indexOf('mailto:') >= 0;
        const hash = $link.attr('href').indexOf('#') === 0;

        return target || email || hash;

    }

    redirect($link) {

        const origin = window.location.origin;
        const pathName = $link.attr('href');

        window.location.href = `${origin}${pathName}`;

    }

};

module.exports = new Transition();
