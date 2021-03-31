/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/config.js":
/*!***************************!*\
  !*** ./modules/config.js ***!
  \***************************/
/*! exports provided: default, url, disBonjour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disBonjour", function() { return sayHi; });
// const apiKey = "abc133edqt456";
// export const url = "http://www.unsite.com"; // export nommé
// export default apiKey;

/*export*/
const apiKey = "abc133edqt456";
/*export*/

const url = "http://www.unsite.com";
/*export*/

function sayHi(name) {
  console.log(`Bonjour ${name} !`);
}

/* harmony default export */ __webpack_exports__["default"] = (apiKey);


/***/ }),

/***/ "./modules/user.js":
/*!*************************!*\
  !*** ./modules/user.js ***!
  \*************************/
/*! exports provided: default, createUrl, gravatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrl", function() { return createUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravatar", function() { return gravatar; });
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slug */ "./node_modules/slug/slug.js");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/config */ "./modules/config.js");
 // c'est l'export par défaut, donc je le nomme comme je veux et je ne mets pas de {}



function User(name, email, website) {
  return {
    name,
    email,
    url: website
  };
}
function createUrl(name) {
  // on va créer un url du genre : http://www.monsite.com/user/anissa-belkheir
  return `${_modules_config__WEBPACK_IMPORTED_MODULE_2__["url"]}/user/${slug__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  })}`;
}
function gravatar(email) {
  // on passe notre email normal, mais il va être transformé en base64
  const newEmail = js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"].encode(email);
  const photoUrl = `http://www.gravatar.com/avatar/${newEmail}`;
  return photoUrl;
}

/***/ }),

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;

(function (global, factory) {
   true ? module.exports = factory(global) : undefined;
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this, function (global) {
  'use strict'; // existing version for noConflict()

  global = global || {};
  var _Base64 = global.Base64;
  var version = "2.5.1"; // if node.js and NOT React Native, we use Buffer

  var buffer;

  if ( true && module.exports) {
    try {
      buffer = eval("require('buffer').Buffer");
    } catch (err) {
      buffer = undefined;
    }
  } // constants


  var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  var b64tab = function (bin) {
    var t = {};

    for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;

    return t;
  }(b64chars);

  var fromCharCode = String.fromCharCode; // encoder stuff

  var cb_utob = function (c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    } else {
      var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
      return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    }
  };

  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;

  var utob = function (u) {
    return u.replace(re_utob, cb_utob);
  };

  var cb_encode = function (ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
        chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
    return chars.join('');
  };

  var btoa = global.btoa ? function (b) {
    return global.btoa(b);
  } : function (b) {
    return b.replace(/[\s\S]{1,3}/g, cb_encode);
  };

  var _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (u) {
    return (u.constructor === buffer.constructor ? u : buffer.from(u)).toString('base64');
  } : function (u) {
    return (u.constructor === buffer.constructor ? u : new buffer(u)).toString('base64');
  } : function (u) {
    return btoa(utob(u));
  };

  var encode = function (u, urisafe) {
    return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
      return m0 == '+' ? '-' : '_';
    }).replace(/=/g, '');
  };

  var encodeURI = function (u) {
    return encode(u, true);
  }; // decoder stuff


  var re_btou = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');

  var cb_btou = function (cccc) {
    switch (cccc.length) {
      case 4:
        var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
            offset = cp - 0x10000;
        return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);

      case 3:
        return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));

      default:
        return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
  };

  var btou = function (b) {
    return b.replace(re_btou, cb_btou);
  };

  var cb_decode = function (cccc) {
    var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
        chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
    chars.length -= [0, 0, 2, 1][padlen];
    return chars.join('');
  };

  var _atob = global.atob ? function (a) {
    return global.atob(a);
  } : function (a) {
    return a.replace(/\S{1,4}/g, cb_decode);
  };

  var atob = function (a) {
    return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
  };

  var _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (a) {
    return (a.constructor === buffer.constructor ? a : buffer.from(a, 'base64')).toString();
  } : function (a) {
    return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
  } : function (a) {
    return btou(_atob(a));
  };

  var decode = function (a) {
    return _decode(String(a).replace(/[-_]/g, function (m0) {
      return m0 == '-' ? '+' : '/';
    }).replace(/[^A-Za-z0-9\+\/]/g, ''));
  };

  var noConflict = function () {
    var Base64 = global.Base64;
    global.Base64 = _Base64;
    return Base64;
  }; // export Base64


  global.Base64 = {
    VERSION: version,
    atob: atob,
    btoa: btoa,
    fromBase64: decode,
    toBase64: encode,
    utob: utob,
    encode: encode,
    encodeURI: encodeURI,
    btou: btou,
    decode: decode,
    noConflict: noConflict,
    __buffer__: buffer
  }; // if ES5 is available, make Base64.extendString() available

  if (typeof Object.defineProperty === 'function') {
    var noEnum = function (v) {
      return {
        value: v,
        enumerable: false,
        writable: true,
        configurable: true
      };
    };

    global.Base64.extendString = function () {
      Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
        return decode(this);
      }));
      Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
        return encode(this, urisafe);
      }));
      Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
        return encode(this, true);
      }));
    };
  } //
  // export Base64 to the namespace
  //


  if (global['Meteor']) {
    // Meteor.js
    Base64 = global.Base64;
  } // module.exports and AMD are mutually exclusive.
  // module.exports has precedence.


  if ( true && module.exports) {
    module.exports.Base64 = global.Base64;
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return global.Base64;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // that's it!


  return {
    Base64: global.Base64
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/slug/slug.js":
/*!***********************************!*\
  !*** ./node_modules/slug/slug.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root) {
  // lazy require symbols table
  var _symbols, removelist;

  function symbols(code) {
    if (_symbols) return _symbols[code];
    _symbols = __webpack_require__(/*! unicode/category/So */ "./node_modules/unicode/category/So.js");
    removelist = ['sign', 'cross', 'of', 'symbol', 'staff', 'hand', 'black', 'white'].map(function (word) {
      return new RegExp(word, 'gi');
    });
    return _symbols[code];
  }

  function slug(string, opts) {
    string = string.toString();
    if ('string' === typeof opts) opts = {
      replacement: opts
    };
    opts = opts || {};
    opts.mode = opts.mode || slug.defaults.mode;
    var defaults = slug.defaults.modes[opts.mode];
    var keys = ['replacement', 'multicharmap', 'charmap', 'remove', 'lower'];

    for (var key, i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      opts[key] = key in opts ? opts[key] : defaults[key];
    }

    if ('undefined' === typeof opts.symbols) opts.symbols = defaults.symbols;
    var lengths = [];

    for (var key in opts.multicharmap) {
      if (!opts.multicharmap.hasOwnProperty(key)) continue;
      var len = key.length;
      if (lengths.indexOf(len) === -1) lengths.push(len);
    }

    var code,
        unicode,
        result = "";

    for (var char, i = 0, l = string.length; i < l; i++) {
      char = string[i];

      if (!lengths.some(function (len) {
        var str = string.substr(i, len);

        if (opts.multicharmap[str]) {
          i += len - 1;
          char = opts.multicharmap[str];
          return true;
        } else return false;
      })) {
        if (opts.charmap[char]) {
          char = opts.charmap[char];
          code = char.charCodeAt(0);
        } else {
          code = string.charCodeAt(i);
        }

        if (opts.symbols && (unicode = symbols(code))) {
          char = unicode.name.toLowerCase();

          for (var j = 0, rl = removelist.length; j < rl; j++) {
            char = char.replace(removelist[j], '');
          }

          char = char.trim();
        }
      }

      char = char.replace(/[^\w\s\-\.\_~]/g, ''); // allowed

      if (opts.remove) char = char.replace(opts.remove, ''); // add flavour

      result += char;
    }

    result = result.trim();
    result = result.replace(/[-\s]+/g, opts.replacement); // convert spaces

    result = result.replace(opts.replacement + "$", ''); // remove trailing separator

    if (opts.lower) result = result.toLowerCase();
    return result;
  }

  ;
  slug.defaults = {
    mode: 'pretty'
  };
  slug.multicharmap = slug.defaults.multicharmap = {
    '<3': 'love',
    '&&': 'and',
    '||': 'or',
    'w/': 'with'
  }; // https://code.djangoproject.com/browser/django/trunk/django/contrib/admin/media/js/urlify.js

  slug.charmap = slug.defaults.charmap = {
    // latin
    'À': 'A',
    'Á': 'A',
    'Â': 'A',
    'Ã': 'A',
    'Ä': 'A',
    'Å': 'A',
    'Æ': 'AE',
    'Ç': 'C',
    'È': 'E',
    'É': 'E',
    'Ê': 'E',
    'Ë': 'E',
    'Ì': 'I',
    'Í': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ð': 'D',
    'Ñ': 'N',
    'Ò': 'O',
    'Ó': 'O',
    'Ô': 'O',
    'Õ': 'O',
    'Ö': 'O',
    'Ő': 'O',
    'Ø': 'O',
    'Ù': 'U',
    'Ú': 'U',
    'Û': 'U',
    'Ü': 'U',
    'Ű': 'U',
    'Ý': 'Y',
    'Þ': 'TH',
    'ß': 'ss',
    'à': 'a',
    'á': 'a',
    'â': 'a',
    'ã': 'a',
    'ä': 'a',
    'å': 'a',
    'æ': 'ae',
    'ç': 'c',
    'è': 'e',
    'é': 'e',
    'ê': 'e',
    'ë': 'e',
    'ì': 'i',
    'í': 'i',
    'î': 'i',
    'ï': 'i',
    'ð': 'd',
    'ñ': 'n',
    'ò': 'o',
    'ó': 'o',
    'ô': 'o',
    'õ': 'o',
    'ö': 'o',
    'ő': 'o',
    'ø': 'o',
    'ù': 'u',
    'ú': 'u',
    'û': 'u',
    'ü': 'u',
    'ű': 'u',
    'ý': 'y',
    'þ': 'th',
    'ÿ': 'y',
    'ẞ': 'SS',
    // greek
    'α': 'a',
    'β': 'b',
    'γ': 'g',
    'δ': 'd',
    'ε': 'e',
    'ζ': 'z',
    'η': 'h',
    'θ': '8',
    'ι': 'i',
    'κ': 'k',
    'λ': 'l',
    'μ': 'm',
    'ν': 'n',
    'ξ': '3',
    'ο': 'o',
    'π': 'p',
    'ρ': 'r',
    'σ': 's',
    'τ': 't',
    'υ': 'y',
    'φ': 'f',
    'χ': 'x',
    'ψ': 'ps',
    'ω': 'w',
    'ά': 'a',
    'έ': 'e',
    'ί': 'i',
    'ό': 'o',
    'ύ': 'y',
    'ή': 'h',
    'ώ': 'w',
    'ς': 's',
    'ϊ': 'i',
    'ΰ': 'y',
    'ϋ': 'y',
    'ΐ': 'i',
    'Α': 'A',
    'Β': 'B',
    'Γ': 'G',
    'Δ': 'D',
    'Ε': 'E',
    'Ζ': 'Z',
    'Η': 'H',
    'Θ': '8',
    'Ι': 'I',
    'Κ': 'K',
    'Λ': 'L',
    'Μ': 'M',
    'Ν': 'N',
    'Ξ': '3',
    'Ο': 'O',
    'Π': 'P',
    'Ρ': 'R',
    'Σ': 'S',
    'Τ': 'T',
    'Υ': 'Y',
    'Φ': 'F',
    'Χ': 'X',
    'Ψ': 'PS',
    'Ω': 'W',
    'Ά': 'A',
    'Έ': 'E',
    'Ί': 'I',
    'Ό': 'O',
    'Ύ': 'Y',
    'Ή': 'H',
    'Ώ': 'W',
    'Ϊ': 'I',
    'Ϋ': 'Y',
    // turkish
    'ş': 's',
    'Ş': 'S',
    'ı': 'i',
    'İ': 'I',
    'ğ': 'g',
    'Ğ': 'G',
    // russian
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'yo',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'sh',
    'ъ': 'u',
    'ы': 'y',
    'ь': '',
    'э': 'e',
    'ю': 'yu',
    'я': 'ya',
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'Yo',
    'Ж': 'Zh',
    'З': 'Z',
    'И': 'I',
    'Й': 'J',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'H',
    'Ц': 'C',
    'Ч': 'Ch',
    'Ш': 'Sh',
    'Щ': 'Sh',
    'Ъ': 'U',
    'Ы': 'Y',
    'Ь': '',
    'Э': 'E',
    'Ю': 'Yu',
    'Я': 'Ya',
    // ukranian
    'Є': 'Ye',
    'І': 'I',
    'Ї': 'Yi',
    'Ґ': 'G',
    'є': 'ye',
    'і': 'i',
    'ї': 'yi',
    'ґ': 'g',
    // czech
    'č': 'c',
    'ď': 'd',
    'ě': 'e',
    'ň': 'n',
    'ř': 'r',
    'š': 's',
    'ť': 't',
    'ů': 'u',
    'ž': 'z',
    'Č': 'C',
    'Ď': 'D',
    'Ě': 'E',
    'Ň': 'N',
    'Ř': 'R',
    'Š': 'S',
    'Ť': 'T',
    'Ů': 'U',
    'Ž': 'Z',
    // polish
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ś': 's',
    'ź': 'z',
    'ż': 'z',
    'Ą': 'A',
    'Ć': 'C',
    'Ę': 'E',
    'Ł': 'L',
    'Ń': 'N',
    'Ś': 'S',
    'Ź': 'Z',
    'Ż': 'Z',
    // latvian
    'ā': 'a',
    'ē': 'e',
    'ģ': 'g',
    'ī': 'i',
    'ķ': 'k',
    'ļ': 'l',
    'ņ': 'n',
    'ū': 'u',
    'Ā': 'A',
    'Ē': 'E',
    'Ģ': 'G',
    'Ī': 'I',
    'Ķ': 'K',
    'Ļ': 'L',
    'Ņ': 'N',
    'Ū': 'U',
    // arabic
    'أ': 'a',
    'ب': 'b',
    'ت': 't',
    'ث': 'th',
    'ج': 'g',
    'ح': 'h',
    'خ': 'kh',
    'د': 'd',
    'ذ': 'th',
    'ر': 'r',
    'ز': 'z',
    'س': 's',
    'ش': 'sh',
    'ص': 's',
    'ض': 'd',
    'ط': 't',
    'ظ': 'th',
    'ع': 'aa',
    'غ': 'gh',
    'ف': 'f',
    'ق': 'k',
    'ك': 'k',
    'ل': 'l',
    'م': 'm',
    'ن': 'n',
    'ه': 'h',
    'و': 'o',
    'ي': 'y',
    // lithuanian
    'ė': 'e',
    'į': 'i',
    'ų': 'u',
    'Ė': 'E',
    'Į': 'I',
    'Ų': 'U',
    // romanian
    'ț': 't',
    'Ț': 'T',
    'ţ': 't',
    'Ţ': 'T',
    'ș': 's',
    'Ș': 'S',
    'ă': 'a',
    'Ă': 'A',
    // vietnamese
    'Ạ': 'A',
    'Ả': 'A',
    'Ầ': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ằ': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ẹ': 'E',
    'Ẻ': 'E',
    'Ẽ': 'E',
    'Ề': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ị': 'I',
    'Ỉ': 'I',
    'Ĩ': 'I',
    'Ọ': 'O',
    'Ỏ': 'O',
    'Ồ': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ơ': 'O',
    'Ờ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ụ': 'U',
    'Ủ': 'U',
    'Ũ': 'U',
    'Ư': 'U',
    'Ừ': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ỳ': 'Y',
    'Ỵ': 'Y',
    'Ỷ': 'Y',
    'Ỹ': 'Y',
    'Đ': 'D',
    'ạ': 'a',
    'ả': 'a',
    'ầ': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ằ': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ẹ': 'e',
    'ẻ': 'e',
    'ẽ': 'e',
    'ề': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ị': 'i',
    'ỉ': 'i',
    'ĩ': 'i',
    'ọ': 'o',
    'ỏ': 'o',
    'ồ': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ơ': 'o',
    'ờ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ụ': 'u',
    'ủ': 'u',
    'ũ': 'u',
    'ư': 'u',
    'ừ': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ỳ': 'y',
    'ỵ': 'y',
    'ỷ': 'y',
    'ỹ': 'y',
    'đ': 'd',
    // currency
    '€': 'euro',
    '₢': 'cruzeiro',
    '₣': 'french franc',
    '£': 'pound',
    '₤': 'lira',
    '₥': 'mill',
    '₦': 'naira',
    '₧': 'peseta',
    '₨': 'rupee',
    '₩': 'won',
    '₪': 'new shequel',
    '₫': 'dong',
    '₭': 'kip',
    '₮': 'tugrik',
    '₯': 'drachma',
    '₰': 'penny',
    '₱': 'peso',
    '₲': 'guarani',
    '₳': 'austral',
    '₴': 'hryvnia',
    '₵': 'cedi',
    '¢': 'cent',
    '¥': 'yen',
    '元': 'yuan',
    '円': 'yen',
    '﷼': 'rial',
    '₠': 'ecu',
    '¤': 'currency',
    '฿': 'baht',
    "$": 'dollar',
    '₹': 'indian rupee',
    // symbols
    '©': '(c)',
    'œ': 'oe',
    'Œ': 'OE',
    '∑': 'sum',
    '®': '(r)',
    '†': '+',
    '“': '"',
    '”': '"',
    '‘': "'",
    '’': "'",
    '∂': 'd',
    'ƒ': 'f',
    '™': 'tm',
    '℠': 'sm',
    '…': '...',
    '˚': 'o',
    'º': 'o',
    'ª': 'a',
    '•': '*',
    '∆': 'delta',
    '∞': 'infinity',
    '♥': 'love',
    '&': 'and',
    '|': 'or',
    '<': 'less',
    '>': 'greater'
  };
  slug.defaults.modes = {
    rfc3986: {
      replacement: '-',
      symbols: true,
      remove: null,
      lower: true,
      charmap: slug.defaults.charmap,
      multicharmap: slug.defaults.multicharmap
    },
    pretty: {
      replacement: '-',
      symbols: true,
      remove: /[.]/g,
      lower: false,
      charmap: slug.defaults.charmap,
      multicharmap: slug.defaults.multicharmap
    }
  }; // Be compatible with different module systems

  if (true) {
    // AMD
    // dont load symbols table in the browser
    for (var key in slug.defaults.modes) {
      if (!slug.defaults.modes.hasOwnProperty(key)) continue;
      slug.defaults.modes[key].symbols = false;
    }

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return slug;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var key; }
})(this);

/***/ }),

/***/ "./node_modules/unicode/category/So.js":
/*!*********************************************!*\
  !*** ./node_modules/unicode/category/So.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/user */ "./modules/user.js");
/* -------------------------------------------------------------------------- */

/*                                   config                                   */

/* -------------------------------------------------------------------------- */
// // import api from '../modules/config'; // import par défaut
// // import { url, apiKey, sayHi } from '../modules/config'; // import nommé
// // console.log(api)  // ne fonctionne que si j'ai un export par défaut dans config, sinon "undefined"
// // import api, {url as website, sayHi} from '../modules/config';
// import api, {url as website, disBonjour} from '../modules/config';
// console.log(api)
// disBonjour("Anissa");
// console.log(website)
// import { uniq } from 'lodash';
// const chiffres = [1,23,256,12,12,23,89,4,6,4,4,1];
// console.log(uniq(chiffres));

/* -------------------------------------------------------------------------- */

/*                                    user                                    */

/* -------------------------------------------------------------------------- */

const ani = new _modules_user__WEBPACK_IMPORTED_MODULE_0__["default"]("Anissa Belkheir", "anissa@triptyk.eu", "http://www.triptyk.eu");
console.log(ani);
const website = Object(_modules_user__WEBPACK_IMPORTED_MODULE_0__["createUrl"])(ani.name);
console.log(website);
const photo = Object(_modules_user__WEBPACK_IMPORTED_MODULE_0__["gravatar"])(ani.email);
console.log(photo);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map