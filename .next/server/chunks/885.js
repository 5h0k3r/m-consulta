exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 8885:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PaginationAutor; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7795);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_gpt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6531);
/* harmony import */ var react_gpt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_gpt__WEBPACK_IMPORTED_MODULE_6__);









function PaginationAutor({
  name
}) {
  const {
    0: pageIndex,
    1: setPageIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_4___default()("https://da21w.e-tlaxcala.mx/index.php/autor/" + name + "/pagina-" + pageIndex);
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
  const autor = data.data.author;
  const notas = data.data.nodes; //console.log(notas);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-xs-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "float-left note-sumary note-sumary-cont",
        style: {
          width: '69%'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          children: autor.autor
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "float-rigth",
        style: {
          width: '30%'
        },
        children: autor.img_url != null ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "img-fluid float-rigth",
          width: 150,
          height: 150,
          src: autor.img_url.replace('public://', "http://fotos.e-consulta.com/"),
          alt: autor.autor
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      id: "div-gpt-ad-1623608534630-0",
      className: "text-center mt-2 mb-2",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gpt__WEBPACK_IMPORTED_MODULE_6__.Bling, {
        adUnitPath: "/138222292/Generico_320x50",
        slotSize: [320, 50]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
      className: "content-secciones",
      children: notas.map((article, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: index == 4 ? [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: `/${article.URL_ALIAS}`,
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
            })]
          }, article.nid)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          id: "div-gpt-ad-1623519879945-0",
          className: "text-center mt-2 mb-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gpt__WEBPACK_IMPORTED_MODULE_6__.Bling, {
            adUnitPath: "/138222292/GenericoDobleCubo_300x600",
            slotSize: [300, 600]
          })
        })] : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: `/${article.URL_ALIAS}`,
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