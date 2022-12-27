// ==UserScript==
// @name         Patreon Post Increase to Usable Screen Width
// @namespace    https://github.com/phyco1991/randomuserscripts
// @version      0.2
// @description  Increase size of Patreon posts to take up usable screen width
// @author       Adam Fry
// @match        https://www.patreon.com/posts/*
// @require      https://raw.githubusercontent.com/greasemonkey/gm4-polyfill/master/gm4-polyfill.js
// @require      https://code.jquery.com/jquery-3.6.0.slim.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=patreon.com
// @grant        GM_addStyle
// @grant        GM.addStyle
// ==/UserScript==

$(document).ready(function () {
    $( "div" ).css( "max-width", "none" );
});
