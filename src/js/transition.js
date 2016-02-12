const $ = require('jquery');
const helper = require('./helper');

const Transition = class {

    constructor() {

        this.listeners();

    }

    listeners() {

        helper.$body.on('click', 'a', (e) => this.activate(e));

    }

    activate(e) {

        const $link = $(e.currentTarget);

        if (this.queryLink($link)) {

            helper.$body.addClass('structure--transition');
            setTimeout(() => this.redirect($link), helper.speed.fast);
            e.preventDefault();

        }

    }

    queryLink($link) {

        return $link.hasClass('button--local');

    }

    redirect($link) {

        const origin = window.location.origin;
        const pathName = $link.attr('href');

        window.location.href = `${origin}${pathName}`;

    }

};

module.exports = new Transition();
