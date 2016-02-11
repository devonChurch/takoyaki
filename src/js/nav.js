const $ = require('jquery');
const helper = require('./helper');

const Navigation = class {

    constructor() {

        this.$nav = $('nav');
        this.active = false;
        this.activate();

    }

    activate() {

        this.active = true;
        this.$nav.on('click', '.nav__link', (e) => this.queryLink(e));

    }

    queryLink(e) {

        const $link = $(e.currentTarget);
        const hash = $link.attr('href');

        this.focusSection(hash);
        this.scrollToSection(hash);

        e.preventDefault();

    }

    focusSection(hash) {

        helper.$body.attr('data-hash', hash);
        setTimeout(() => helper.$body.removeAttr('data-hash'), 1000);

    }

    scrollToSection(hash) {

        const $section = $(hash);
        const top = $section.offset().top;
        const offset = 50;

        helper.$page.animate({scrollTop: top - offset}, helper.speed.fast);

    }

};

module.exports = new Navigation();
