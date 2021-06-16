exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 5378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Template; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Header/Header.jsx






function Header() {
  (0,external_react_.useEffect)(() => {
    const mainNavigation = document.querySelector(".main-navigation");
    const overlay = mainNavigation.querySelector(".overlay");
    const toggler = mainNavigation.querySelector(".navbar-toggler");

    const openSideNav = () => mainNavigation.classList.add("active");

    const closeSideNav = () => mainNavigation.classList.remove("active");

    toggler.addEventListener("click", openSideNav);
    overlay.addEventListener("click", closeSideNav);
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "navbar navbar-expand-lg navbar-light bg-light fixed-top main-navigation",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "navbar-brand order-2 order-lg-1 mx-auto mr-lg-3 ml-3 ml-lg-0",
          href: "#home",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: '/images/logo.png',
            alt: "Logo de e-consulta",
            className: "prueba lazyload",
            width: "136",
            height: "35"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "navbar-toggler ",
          type: "button",
          "aria-label": "Justify",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "navbar-toggler-icon",
            "aria-hidden": "true"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "overlay d-flex d-lg-none"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "order-lg-2 d-lg-flex w-100 sidebar pb-3 pb-lg-0 menu",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "navbar-nav mr-lg-auto mb-2 mb-lg-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item mt-4",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Inicio"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/gobierno",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Gobierno"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/seguridad",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Seguridad"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/politica",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Pol\xEDtica"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/nacion",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Naci\xF3n"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/salud",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Salud"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/opinion",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Opini\xF3n"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/educacion",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Educaci\xF3n"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/municipios",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Municipios"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/ciudad",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Ciudad"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/saludable",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Saludable"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/virales",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Virales"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/espectaculos",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Espect\xE1culos"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/entretenimiento",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Entretenimiento"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/deportes",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Deportes"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/ciencia",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Ciencia"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/cultura",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Cultura"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/en-su-tinta",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "En su Tinta"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/elecciones",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Elecciones"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/mundo",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Mundo"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/medio-ambiente",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Medio Ambiente"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/universidades",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Universidades"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/economia",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Econom\xEDa"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item link-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/seccion/obiturario",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link px-3 px-lg-2 nav-link-header",
                  children: "Obiturario"
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "socials text-center mb-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://www.facebook.com/econsulta.noticias",
                rel: "noopener",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "socialNetwork icon-facebook-1"
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://twitter.com/e_consulta",
                target: "_blank",
                rel: "noopener",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "socialNetwork icon-twitter"
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://www.instagram.com/e_consulta/?hl=es-la",
                target: "_blank",
                rel: "noopener",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "socialNetwork icon-instagram"
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://www.youtube.com/user/videoeconsulta",
                target: "_blank",
                rel: "noopener",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "socialNetwork icon-youtube-play"
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "text-white m-3 text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "e-consulta"
            }), " es un peri\xF3dico digital de ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "Consultor\xEDa Contracorriente."
            }), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Nuestras oficinas se ubican en 20 Sur #2520. Col Bellavista y nuestro tel\xE9fono es 01 (222) 2.64.66.65"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "scrollmenu",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "active",
            children: "Inicio"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/gobierno",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Gobierno"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/seguridad",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Seguridad"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/politica",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Pol\xEDtica"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/nacion",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Naci\xF3n"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/salud",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Salud"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/sociedad",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Sociedad"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/opinion",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Opini\xF3n"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/educacion",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Educaci\xF3n"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/municipios",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Municipios"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/ciudad",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Ciudad"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/saludable",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Saludable"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/virales",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Virales"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/espectaculos",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Espect\xE1culos"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/entretenimiento",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Entretenimiento"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/deportes",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Deportes"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/ciencia",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Ciencia"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/cultura",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Cultura"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/en-su-tinta",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "En su Tinta"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/elecciones",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Elecciones"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/mundo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Mundo"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/medio-ambiente",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Medio Ambiente"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/universidades",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Universidades"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/economia",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Econom\xEDa"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/seccion/obiturario",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Obiturario"
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Footer/Footer.jsx




function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "row footer",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-md-12 col-xs-12",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row pre-menu",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "socials",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.facebook.com/econsulta.noticias",
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "socialNetwork  icon-facebook-1"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://twitter.com/e_consulta",
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "socialNetwork  icon-twitter"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.youtube.com/user/videoeconsulta",
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "socialNetwork  icon-youtube-play"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.instagram.com/e_consulta/?hl=es-la",
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "socialNetwork  icon-instagram"
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: "linea"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-md-12 col-xs-12 ",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        className: "lazyload",
        src: "https://www.e-consulta.com/assets/images/logo_02.png",
        width: 270,
        height: 90,
        alt: "Logo e-consulta"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "brand",
        children: ["Es una marca registrada, propiedad de", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "http://contracorriente.lat/",
          target: "__blank",
          children: "CONTRACORRIENTE"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-md-12 col-xs-12",
      children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "linea"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        className: "logo-3 lazyload",
        src: "https://www.e-consulta.com/assets/images/comscore-logo.png",
        alt: "Logo comscore footer",
        width: 250,
        height: 60
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./template/template.jsx






function Template({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "pt-5",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "m.e-consulta.com | Peri\xF3dico Digital de Noticias de Puebla | M\xE9xico 2021"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Peri\xF3dico Digital de Noticias de Puebla"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "57x57",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-57x57.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "60x60",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-60x60.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "72x72",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-72x72.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "76x76",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-76x76.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "114x114",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-114x114.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "120x120",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-120x120.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "144x144",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-144x144.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "152x152",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-152x152.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon preconnect",
        sizes: "180x180",
        href: "https://www.e-consulta.com/assets/images/favicons/apple-icon-180x180.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon preconnect",
        type: "image/png",
        sizes: "192x192",
        href: "https://www.e-consulta.com/assets/images/favicons/android-icon-192x192.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon preconnect",
        type: "image/png",
        sizes: "32x32",
        href: "https://www.e-consulta.com/assets/images/favicons/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon preconnect",
        type: "image/png",
        sizes: "96x96",
        href: "https://www.e-consulta.com/assets/images/favicons/favicon-96x96.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon preconnect",
        type: "image/png",
        sizes: "16x16",
        href: "https://www.e-consulta.com/assets/images/favicons/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "https://www.e-consulta.com/assets/images/favicons/manifest.json"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileImage",
        content: "https://www.e-consulta.com/assets/images/favicons/ms-icon-144x144.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#ffffff"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet ",
        media: "screen and (max-width: 600px)"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "/static/fontello-z/css/fontello.css",
        as: "style",
        media: "screen and (max-width: 600px)"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-12 col-md-12 col-sm-12 col-12 main-heading",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "pt-5",
            children: children
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;