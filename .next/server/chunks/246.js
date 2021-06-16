exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 3246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainNote; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bit_akiran_react_slick_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6374);
/* harmony import */ var _bit_akiran_react_slick_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bit_akiran_react_slick_slider__WEBPACK_IMPORTED_MODULE_5__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MainNote() {
  const {
    0: notaPrincipal,
    1: setNotaPrincipal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: galeria,
    1: setGaleria
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    response: []
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default()({
      url: "https://da21w.e-tlaxcala.mx/index.php/getRemoteQueue/1"
    }).then(response => {
      setNotaPrincipal(response.data.response.slice(0, 1));
      const eliminado = response.data.response.shift();
      setGaleria(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, [setNotaPrincipal]);
  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    rows: 1,
    slidesPerRow: 2,
    lazyLoad: true,
    arrows: true
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [notaPrincipal.map((notap, index) => notap.external_link ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: `/${notap.external_link}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card card-new-galery",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "new-galery-img",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            src: notap.external_img_uri.replace('public://', "https://www.e-consulta.com/fotos/galeria1/"),
            className: "new-galery card-img card-img-top card-img-main-note lazyload",
            alt: notap.title,
            layout: "fill"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "card-body card-title ",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: "card-title text-center font-weight",
            children: notap.title
          })
        })]
      })
    }, index) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: `/${notap.alias}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card card-new-galery",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "new-galery-img",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            src: notap.img_uri.replace('public://', "https://www.e-consulta.com/fotos/galeria1/"),
            className: "new-galery card-img card-img-top card-img-main-note lazyload",
            alt: notap.title,
            layout: "fill"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "card-body card-title ",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: "card-title text-center font-weight",
            children: notap.title
          })
        })]
      })
    }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row galeria-s",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_bit_akiran_react_slick_slider__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread(_objectSpread({}, setting), {}, {
        children: galeria.response.map((nota, index) => nota.external_link ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: `/${nota.external_link}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card card-first-slider text-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
              src: nota.external_img_uri.replace('public://', "https://www.e-consulta.com/fotos/galeria2/"),
              className: "new-galery card-img card-img-top card-img-galeria lazyload",
              alt: nota.title,
              layout: "fill"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "card-img-overlay card-title-first-slider__article",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "card-title card-title-first-slider__title",
                children: nota.title
              })
            })]
          })
        }, index) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: `/${nota.alias}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card card-first-slider text-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
              src: nota.img_uri.replace('public://', "https://www.e-consulta.com/fotos/galeria2/"),
              className: "new-galery card-img card-img-top card-img-galeria lazyload",
              alt: nota.title,
              layout: "fill"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "card-img-overlay card-title-first-slider__article",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "card-title card-title-first-slider__title",
                children: nota.title
              })
            })]
          })
        }, index))
      }))
    })]
  });
}

/***/ })

};
;