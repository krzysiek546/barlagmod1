// ==UserScript==
// @name         Maddonz - Dodatki Barlaga 2137
// @version      3.7
// @description  Zbiór dodatków do Margonem
// @author       Chuj
// @updateURL    https://raw.githubusercontent.com/krzysiek546/barlagmod1/main/update.js
// @match        http://*.margonem.pl/*
// @match        http://*.margonem.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    const script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/krzysiek546/barlagmod1/main/barlagoryg.js';
    document.head.appendChild(script);
})();