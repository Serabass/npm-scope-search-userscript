// ==UserScript==
// @name         NPMjs scope finder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.npmjs.com/package/@*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var rgx = /\/package\/@(\w+)\/(\w+)/;

    if (rgx.test(location.pathname)) {
        var m = location.pathname.match(rgx);
        var scope = m[1];
        var searchUrl = 'https://www.npmjs.com/search?q=scope%3A' + scope;
        var h2 = document.querySelector('main #top h2 span');
        var sup = document.createElement('sup');
        var a = document.createElement('a');
        sup.style.marginLeft = '10px';
        a.href = searchUrl;
        a.target = '_blank';
        a.innerText = 'Search in @' + scope;
        sup.appendChild(a);
        h2.appendChild(sup);
    }
})();
