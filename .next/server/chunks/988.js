exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 1988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UnionAlMyMasL; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);







function UnionAlMyMasL() {
  const {
    0: showAlM,
    1: setShowAlM
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: alMomento,
    1: setAlMomento
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    response: []
  });
  const {
    0: masLeidas,
    1: setMasLeidas
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    response: []
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      url: "https://da21w.e-tlaxcala.mx/index.php/getRemoteAlmomento"
    }).then(response => {
      setAlMomento(response.data);
    }).catch(error => {
      console.log(error);
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      url: "https://da21w.e-tlaxcala.mx/index.php/getRemoteMasleidas"
    }).then(response => {
      setMasLeidas(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, [setAlMomento, setMasLeidas]);

  function hora(created) {
    const date = new Date(created * 1000);
    const hora = date.getHours() + ":" + date.getMinutes();
    return hora;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "mod content-union",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "content-header",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: `content-mas-leidas-title ${showAlM ? "active-AL" : ""}`,
          onClick: showAlM ? () => setShowAlM(true) : () => setShowAlM(!showAlM),
          children: "Al Momento"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "separacion"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: `content-al-momento-title ${!showAlM ? "active-AL" : ""}`,
          onClick: !showAlM ? () => setShowAlM(false) : () => setShowAlM(!showAlM),
          children: "Mas Le\xEDdas"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "content-content",
        children: showAlM ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: alMomento.response.map((momento, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: "number",
              children: hora(momento.created)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
              className: "new new-summary invert",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                className: "news-media",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: `/${momento.alias}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                      className: "lazyload",
                      src: momento.img_uri !== null ? momento.img_uri.replace('public://', "http://fotos.e-consulta.com/") : 'https://www.e-consulta.com/assets/images/favicons/apple-icon-76x76.png',
                      alt: momento.title,
                      layout: "fill"
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "news-data",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: `/${momento.alias}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "news-title",
                    children: momento.title
                  })
                })
              })]
            }, momento.nid)]
          }, momento.nid))
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: masLeidas.response.map((masLeida, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: "number",
              children: index + 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
              className: "new new-summary invert",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                className: "news-media",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: `/${masLeida.alias}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                      className: "lazyload",
                      src: masLeida.img_uri.replace('public://', "http://fotos.e-consulta.com/"),
                      alt: masLeida.title,
                      layout: "fill"
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "news-data",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: `/${masLeida.alias}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "news-title",
                    children: masLeida.title
                  })
                })
              })]
            }, masLeidas.nid)]
          }, masLeida.nid))
        })
      })]
    })
  });
}

/***/ })

};
;