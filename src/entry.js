require('./js/destination');
require('./sass/style.scss');

require('file?name=index.html!jade-html!./index');

/* [ Posts */
require('file?name=one.html!jade-html!./posts/one');
require('file?name=two.html!jade-html!./posts/two');
require('file?name=three.html!jade-html!./posts/three');/* Posts ] */
