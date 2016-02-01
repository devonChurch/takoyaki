const $ = require('jquery');
const helper = require('./helper');

const Navigation = class {

    constructor() {

        console.log('Navigation....');

        this.$nav = $('nav');
        this.active = false;
        this.resize();

    }

    resize() {

        helper.$window.on('resize', () => this.relevance()).resize();

    }

    relevance() {

        if (window.matchMedia(`(min-width: ${helper.media.small})`).matches && !this.active) this.activate();
        else if (!window.matchMedia(`(min-width: ${helper.media.small})`).matches && this.active) this.deactivate();


    }

    activate() {

        this.active = true;
        this.$nav.on('click.nav', '.nav__link', (e) => this.queryLink(e));

    }

    deactivate() {

        this.active = false;
        this.$nav.off('.nav');

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

        helper.$page.animate({scrollTop: top}, helper.speed.fast);

    }

};

module.exports = $('body').data('page') === 'home' ? new Navigation() : null;
