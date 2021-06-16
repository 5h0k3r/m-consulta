exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 73:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NotasSoft; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Genericitem/Genericitem.jsx





function Genericitem({
  title,
  img,
  src,
  count,
  nid
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "virales",
    children: count == 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card mb-2 fst-virales",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-100",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: src,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: img,
              alt: title,
              layout: "fill",
              className: "lazyload",
              "data-sizes": "auto"
            }, nid)
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "card-header news-data",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: src,
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "news-title card-title",
            children: title
          })
        })
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
      className: "new new-summary invert",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "news-data",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: src,
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "news-title",
            children: title
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("figure", {
        className: "news-media",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: src,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: img,
              alt: title,
              layout: "fill",
              className: "lazyload",
              "data-sizes": "auto"
            })
          })
        })
      })]
    }, nid)
  }, count);
}
// EXTERNAL MODULE: external "@bit/akiran.react-slick.slider"
var akiran_react_slick_slider_ = __webpack_require__(6374);
var akiran_react_slick_slider_default = /*#__PURE__*/__webpack_require__.n(akiran_react_slick_slider_);
;// CONCATENATED MODULE: ./components/NotasSoft/NotasSoft.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function NotasSoft({
  path,
  title
}) {
  const {
    0: notas,
    1: setNotas
  } = (0,external_react_.useState)([]);
  const {
    0: fst,
    1: setFst
  } = (0,external_react_.useState)([]);
  const {
    0: snd,
    1: setSnd
  } = (0,external_react_.useState)([]);

  const obtenerNotas = async () => {
    const res = await external_axios_default().get("https://da21w.e-tlaxcala.mx/index.php/" + path);
    const notasD = await res.data;
    setNotas(notasD.data);
    setFst(notasD.data.slice(0, 1));
    const eliminado = notasD.data.shift();
    setSnd(notasD.data);
  };

  (0,external_react_.useEffect)(() => {
    obtenerNotas();
  }, []);
  /* SETTINGS for slider/slick */

  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    rows: 1,
    slidesPerRow: 3,
    lazyLoad: true,
    arrows: true
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "virales-module mt-4 mb-4",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "separador",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "line"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "title",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "name",
          children: title
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: fst.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Genericitem, {
          title: item.title,
          img: item.img_uri.replace('public://', "http://fotos.e-consulta.com/"),
          src: item.alias,
          count: index
        })
      }, index))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/jsx_runtime_.jsx((akiran_react_slick_slider_default()), _objectSpread(_objectSpread({}, setting), {}, {
        children: snd.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Genericitem, {
            title: item.title,
            img: item.img_uri.replace('public://', "http://fotos.e-consulta.com/"),
            src: item.alias,
            count: index + 1
          })
        }, index))
      }))
    })]
  });
}

/***/ })

};
;