const $ = require('jquery');

const Transition = class {

    constructor() {

        console.log('Transition....');

        this.$body = $('body');
        this.listeners();

    }

    listeners() {

        this.$body.on('click', 'a', (e) => this.activate(e));

    }

    activate(e) {

        const $link = $(e.currentTarget);

        if (!this.queryLink($link)) {

            console.log('activate transition');
            this.$body.addClass('structure--transition');
            console.log(window.location);
            setTimeout(() => this.redirect($link), 250);
            e.preventDefault();

        }

    }

    queryLink($link) {

        const target = $link.attr('target') === '_blank';
        const email = $link.attr('href').indexOf('mailto:') >= 0;
        const hash = $link.attr('href').indexOf('#') === 0;

        console.log(target, email, hash);
        return target || email || hash;

    }

    redirect($link) {

        console.log('redirecting');

        const origin = window.location.origin;
        const pathName = $link.attr('href');

        console.log(`${origin}${pathName}`);

        window.location.href = `${origin}${pathName}`;

    }

};

module.exports = new Transition();
