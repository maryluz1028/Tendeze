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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hamburger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Hamburger-menu */ "./assets/js/components/Hamburger-menu.js");
/* harmony import */ var _components_ReplaceObfuscatedEmailAddresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ReplaceObfuscatedEmailAddresses */ "./assets/js/components/ReplaceObfuscatedEmailAddresses.js");
/* harmony import */ var _components_AnimateOnPageLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AnimateOnPageLinks */ "./assets/js/components/AnimateOnPageLinks.js");
/* harmony import */ var _components_Videos_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Videos-modal */ "./assets/js/components/Videos-modal.js");
// you can import modules from the theme lib or even from
// NPM packages if they support it…
 // Some convenient tools to get you started…



 // Initialise our components 

document.addEventListener('DOMContentLoaded', function (e) {
  Object(_components_Hamburger_menu__WEBPACK_IMPORTED_MODULE_0__["hamburgerMenu"])('#button-bars', '.menu-nav-mobile');
  Object(_components_Hamburger_menu__WEBPACK_IMPORTED_MODULE_0__["ActiveSubmenuClick"])('.menu-nav-mobile #navbar_mobile .menu .menu-item .icon');
  Object(_components_Hamburger_menu__WEBPACK_IMPORTED_MODULE_0__["stickyHeader"])('header');
  Object(_components_Hamburger_menu__WEBPACK_IMPORTED_MODULE_0__["addIconSubMenu"])('.menu-nav-mobile .menu-item-has-children >a');
  Object(_components_Videos_modal__WEBPACK_IMPORTED_MODULE_3__["videosOpenModal"])('videos-modal', '.video-img', '#videos-close-modal', '.video-modal-container');
});
/************* */

/***/ }),

/***/ "./assets/js/components/AnimateOnPageLinks.js":
/*!****************************************************!*\
  !*** ./assets/js/components/AnimateOnPageLinks.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $ = window.jQuery;
var $window = window.$window || $(window);
/**
 * Intercept clicks on any anchor tag and if the anchor is linking to an on page ID, animate the scroll to the targeted
 * element.
 *
 * This only works if the href contains a value beginning with '#'. e.g; #about-section. You can modify this behaviour
 * by changing the this.link_is_targeting_on_page_anchor() method.
 *
 * If the clicked element has a `data-toggle=xxx` attribute, it won't be handled. You can modify this behaviour by
 * changing the this.is_excluded() method.
 */

var AnimateOnPageLinks = {
  duration: 800,
  offset: -100,
  init: function init() {
    var _this = this;

    $('a').on('click', function (e) {
      var $link = $(e.target);

      if (_this.is_excluded($link)) {
        return;
      }

      var href = $link.attr('href');

      if (_this.link_is_targeting_on_page_anchor(href)) {
        var $target_element = $(href);

        if (!$target_element.length) {
          return;
        }

        e.preventDefault();
        var offset = $target_element.data('scroll-to-offset') === undefined ? _this.offset : $target_element.data('scroll-to-offset');
        var scroll_top = $target_element.offset().top + offset; // subtract any additional height considerations to scroll_top (e.g; height of sticky header)
        //scroll_top -= $('.sticky-page-header').outerHeight();

        $('html, body').animate({
          scrollTop: scroll_top
        }, _this.duration, 'swing', function () {
          return $target_element.trigger('scrolled_to');
        });
      }
    });
  },
  is_excluded: function is_excluded($selector) {
    return !!$selector.data('toggle');
  },
  link_is_targeting_on_page_anchor: function link_is_targeting_on_page_anchor(link) {
    return /^#/.test(link);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AnimateOnPageLinks);

/***/ }),

/***/ "./assets/js/components/Hamburger-menu.js":
/*!************************************************!*\
  !*** ./assets/js/components/Hamburger-menu.js ***!
  \************************************************/
/*! exports provided: hamburgerMenu, ActiveSubmenuClick, stickyHeader, addIconSubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburgerMenu", function() { return hamburgerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveSubmenuClick", function() { return ActiveSubmenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stickyHeader", function() { return stickyHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIconSubMenu", function() { return addIconSubMenu; });
function hamburgerMenu(btnOpen, menu) {
  document.addEventListener('click', function (e) {
    if (e.target.matches(btnOpen) || e.target.matches("".concat(btnOpen, " *"))) {
      document.querySelector(menu).classList.toggle('active-menu');
      document.querySelector(btnOpen).classList.toggle('active-button');
    }
  });
}
function ActiveSubmenuClick(menuItem) {
  document.addEventListener('click', function (e) {
    if (e.target.matches(menuItem) || e.target.matches("".concat(menuItem, " *"))) {
      e.target.classList.toggle('activeSubMenu');
    }
  });
}
function stickyHeader(header) {
  var $header = document.getElementById(header);
  document.addEventListener('scroll', function (e) {
    var $scrollTop = window.scrollY;

    if ($scrollTop >= 400) {
      $header.classList.add('stickyActiveHeader');
    } else {
      $header.classList.remove('stickyActiveHeader');
    }
  });
}
function addIconSubMenu(menuItemChildren) {
  var $menuItemChildren = document.querySelectorAll(menuItemChildren);
  var $icon = document.createElement('div');
  $icon.classList.add('icon');
  $menuItemChildren.forEach(function (el) {
    el.after($icon);
    console.log(el);
  });
}

/***/ }),

/***/ "./assets/js/components/ReplaceObfuscatedEmailAddresses.js":
/*!*****************************************************************!*\
  !*** ./assets/js/components/ReplaceObfuscatedEmailAddresses.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $ = window.jQuery;
var $window = window.$window || $(window);
/**
 * Replaces elements with the defined class with an anchor tag containing a mailto: protocol href.
 *
 * If the targeted element has the data-email attribute containing an email address in the format of
 * example[at]domain[dot]com, the inner text will be preserved and the obfuscated address in the data attribute will be
 * used in the link.
 *
 * If not data attribute is present, the inner text of the element is assumed to have the obfuscated address.
 *
 * `class` and `id` attributes are preserved.
 */

var ReplaceObfuscatedEmailAddresses = {
  class_name: 'ObfuscatedEml',
  init: function init() {
    var _this = this;

    var elements = document.getElementsByClassName(this.class_name);

    if (elements.length) {
      [].forEach.call(elements, function (element) {
        var email, text;

        if (element.hasAttribute('data-email')) {
          email = _this.deobfuscate(element.getAttribute('data-email'));
          text = element.innerHTML;
        } else {
          email = _this.deobfuscate(element.innerHTML);
          text = email;
        }

        var link = document.createElement('a');
        link.innerHTML = text;
        link.setAttribute('id', element.getAttribute('id'));
        link.setAttribute('class', element.getAttribute('class'));
        link.setAttribute('href', 'mailto:' + email + '?subject=Website%20Enquiry');
        element.parentNode.replaceChild(link, element);
      });
    }
  },
  deobfuscate: function deobfuscate(text) {
    return text.replace(/\[(at|dot)]/g, function (match) {
      if (match === '[at]') return '@';
      if (match === '[dot]') return '.';
      return match;
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ReplaceObfuscatedEmailAddresses);

/***/ }),

/***/ "./assets/js/components/Videos-modal.js":
/*!**********************************************!*\
  !*** ./assets/js/components/Videos-modal.js ***!
  \**********************************************/
/*! exports provided: videosOpenModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videosOpenModal", function() { return videosOpenModal; });
function videosOpenModal(modalVideos, elementOpenModal, btnCloseModal, containerVideos) {
  var $modal = document.getElementById(modalVideos);
  var $videoContainer = document.querySelector(".".concat(modalVideos, " .video "));
  var $video = document.createElement('video');
  document.addEventListener('click', function (e) {
    if (e.target.matches(elementOpenModal)) {
      var $videoUrl = e.target.dataset.video;

      if ($videoUrl != '') {
        $modal.classList.add('active');
        $video.setAttribute('src', $videoUrl);
        $video.setAttribute('controls', '');
        $video.setAttribute('autoplay', true);
        $videoContainer.appendChild($video);
      }
    }

    if (e.target.matches(btnCloseModal) || e.target.matches(containerVideos)) {
      $modal.classList.remove('active');
      $video.removeAttribute('src');
      $videoContainer.removeChild($video);
    }
  });
}

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\wordpress\Tendenze\wp-content\themes\tendenze\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\Tendenze\wp-content\themes\tendenze\assets\scss\app.scss */"./assets/scss/app.scss");


/***/ })

/******/ });