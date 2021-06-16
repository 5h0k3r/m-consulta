exports.id = 571;
exports.ids = [571];
exports.modules = {

/***/ 9571:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PaginationSeccion; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_gpt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6531);
/* harmony import */ var react_gpt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gpt__WEBPACK_IMPORTED_MODULE_5__);








react_gpt__WEBPACK_IMPORTED_MODULE_5__.Bling.enableSingleRequest();
function PaginationSeccion({
  slug
}) {
  const {
    0: pageIndex,
    1: setPageIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_4___default()("https://da21w.e-tlaxcala.mx/index.php/seccion/" + slug + "/" + pageIndex);
  if (!data) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "d-flex justify-content-center",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "spinner-border text-primary",
      role: "status",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "visually-hidden",
        children: "Loading..."
      })
    })
  });
  const pNota = data.data.slice(0, 1);
  const eliminado = data.data.shift();
  const notas = data.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [pNota.map((notap, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: `/${notap.alias}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card card-main-note text-white mb-2 mt-2 ",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
          src: notap.uri.replace('public://', "http://fotos.e-consulta.com/"),
          className: "card-img card-img-main-note lazyload",
          alt: notap.title,
          layout: "fill"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "card-img-overlay card-title-main-note__article",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: "card-title-main-note__title",
            children: notap.title
          })
        })]
      })
    }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      id: "div-gpt-ad-1623608534630-0",
      className: "text-center mt-2 mb-2",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gpt__WEBPACK_IMPORTED_MODULE_5__.Bling, {
        adUnitPath: "/138222292/Generico_320x50",
        slotSize: [320, 50]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
      className: "content-secciones",
      children: notas.map((article, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: index == 3 ? [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: `/${article.alias}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: "secciones new new-summary invert",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
              className: "news-media",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
                  className: "lazyload",
                  src: article.uri.replace('public://', "http://fotos.e-consulta.com/"),
                  alt: article.title,
                  layout: "fill"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "news-data",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "news-title",
                children: article.title
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "author-fecha-seccion nota-autor byline",
              children: article.author ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                  href: '/autor/' + article.author,
                  children: article.author
                }), " / ", article.created]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: ["Staff / ", article.created]
              })
            })]
          }, article.nid)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          id: "div-gpt-ad-1623519879945-0",
          className: "text-center mt-2 mb-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gpt__WEBPACK_IMPORTED_MODULE_5__.Bling, {
            adUnitPath: "/138222292/GenericoDobleCubo_300x600",
            slotSize: [300, 600]
          })
        })] : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: `/${article.alias}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: "secciones new new-summary invert",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
              className: "news-media",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
                  className: "lazyload",
                  src: article.uri.replace('public://', "http://fotos.e-consulta.com/"),
                  alt: article.title,
                  layout: "fill"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "news-data",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "news-title",
                children: article.title
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "author-fecha-seccion nota-autor byline",
              children: article.author ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                  href: '/autor/' + article.author,
                  children: article.author
                }), " / ", article.created]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: ["Staff / ", article.created]
              })
            })]
          }, article.nid)
        })
      }, index))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
      "aria-labelledby": "Page navigation pagination-seccion-opinion",
      className: "pagination-seccion-opinion",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "pagination justify-content-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          className: `page-item ${pageIndex <= 0 ? 'disabled' : ''}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "page-link",
            onClick: () => setPageIndex(pageIndex - 1),
            children: "Anterior"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          className: "page-item",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "page-link",
            onClick: () => setPageIndex(pageIndex + 1),
            children: "Siguiente"
          })
        })]
      })
    })]
  });
}

/***/ })

};
;