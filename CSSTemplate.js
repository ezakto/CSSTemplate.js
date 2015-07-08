/*!
 * CSSTemplate © 2015 Nicolás Arias
 * https://github.com/ezakto/CSSTemplate.js
 * May be freely distributed under the MIT license.
 */

function CSSTemplate(stylesheet) {
    var styles = document.getElementById(stylesheet);
    var source = styles.innerHTML.split('$');
    var _cache = {};
    this.set = function(hash) {
        styles.innerHTML = source.map(function(chunk){
            var key, re;
            for (key in hash) {
                _cache[key] = hash[key];
                re = new RegExp('^'+key+'\\b');
                if (re.test(chunk)) {
                    return chunk.replace(re, _cache[key]);
                }
            }
            return chunk.replace(/^.+?\b/, '');
        }).join('');
    };
};