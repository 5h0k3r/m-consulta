exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 1048:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1997);
/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player_lazy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);







const Multimedia = () => {
  const {
    0: videos,
    1: setVideos
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const obtenerMultimedia = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://da21w.e-tlaxcala.mx/index.php/multimedia");
    const users = await res.data;
    setVideos(users.response);
    setCurrent(users.response[0].video_link);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    obtenerMultimedia();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "player-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "separador",
      id: "multimedia",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "title",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "opinion-multimedia"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "name",
          children: " Multimedia"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "player",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "embedded",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player_lazy__WEBPACK_IMPORTED_MODULE_3___default()), {
          url: current,
          muted: true,
          playing: false,
          width: "100%"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "mas_video",
      children: videos.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
          className: "new new-summary invert",
          onClick: e => {
            setCurrent(item.video_link);
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "news-data",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
              className: "news-title",
              children: item.title
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
            className: "news-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__.default, {
              className: "lazyload",
              src: item.img_uri.replace('public://', "http://fotos.e-consulta.com/"),
              alt: item.title,
              layout: "fill"
            })
          })]
        }, index)
      }, index))
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Multimedia);

/***/ })

};
;