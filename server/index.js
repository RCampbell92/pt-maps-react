import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useNavigate, useParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useEffect, useState, useRef } from "react";
import "react-dom/client";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsx("body", {
      children: /* @__PURE__ */ jsxs("div", {
        id: "root",
        children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
      })
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function IndexRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = async () => {
      navigate("/home");
    };
    redirect();
  }, [navigate]);
  return /* @__PURE__ */ jsx("div", {
    children: "Welcome"
  });
}
const IndexRedirect$1 = UNSAFE_withComponentProps(IndexRedirect);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IndexRedirect$1
}, Symbol.toStringTag, { value: "Module" }));
const NavButton = ({ children, onClick }) => {
  return /* @__PURE__ */ jsx("div", { className: "nav-button", onClick, children });
};
const Navbar = () => {
  let navigate = useNavigate();
  return /* @__PURE__ */ jsxs("ul", { className: "navbar", children: [
    /* @__PURE__ */ jsx(NavButton, { onClick: () => navigate("./browse"), children: "Browse" }),
    /* @__PURE__ */ jsx(NavButton, { onClick: () => navigate("./compare"), children: "Compare" }),
    /* @__PURE__ */ jsx(NavButton, { onClick: () => navigate("./explore/Southern-Cross"), children: "Explore" }),
    /* @__PURE__ */ jsx(NavButton, { onClick: () => navigate("./about"), children: "About" })
  ] });
};
const Title = () => {
  return /* @__PURE__ */ jsx("div", { className: "title", children: "PT Maps" });
};
const HomeBase = () => {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "header",
      children: [/* @__PURE__ */ jsx(Title, {}), /* @__PURE__ */ jsx(Navbar, {})]
    }), /* @__PURE__ */ jsx(Outlet, {})]
  });
};
const HomeBase$1 = UNSAFE_withComponentProps(HomeBase);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomeBase$1
}, Symbol.toStringTag, { value: "Module" }));
const NullNetwork = () => {
  return /* @__PURE__ */ jsx("div", { className: "network", children: /* @__PURE__ */ jsx("p", { children: "There is no network selected. Choose from the dropdown above." }) });
};
const Victoria = ({
  onClick
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "network",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Victoria"
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h2", {
        children: "Stats"
      }), /* @__PURE__ */ jsx("p", {
        children: "Population: 7,011,100"
      }), /* @__PURE__ */ jsx("p", {
        children: "Number of stations"
      }), /* @__PURE__ */ jsx("p", {
        children: "Max frequency"
      }), /* @__PURE__ */ jsx("p", {
        children: "Pricing"
      })]
    }), /* @__PURE__ */ jsx("img", {
      src: "/network_maps/vic-train-map.png",
      onClick
    })]
  });
};
const Victoria$1 = UNSAFE_withComponentProps(Victoria);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Victoria$1
}, Symbol.toStringTag, { value: "Module" }));
const ACT = ({ onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "network", children: [
    /* @__PURE__ */ jsx("h1", { children: "Australian Capital Territory" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Stats" }),
      /* @__PURE__ */ jsx("p", { children: "Population: 481,700" }),
      /* @__PURE__ */ jsx("p", { children: "Number of stations" }),
      /* @__PURE__ */ jsx("p", { children: "Max frequency" }),
      /* @__PURE__ */ jsx("p", { children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsx("img", { src: "/network_maps/canberra-lr-map.png", onClick })
  ] });
};
const NorthernTerritory = ({ onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "network", children: [
    /* @__PURE__ */ jsx("h1", { children: "Northern Territory" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Stats" }),
      /* @__PURE__ */ jsx("p", { children: "Population: 262,200" }),
      /* @__PURE__ */ jsx("p", { children: "Number of stations" }),
      /* @__PURE__ */ jsx("p", { children: "Max frequency" }),
      /* @__PURE__ */ jsx("p", { children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsx("img", { src: "../network_maps/nsw-train-map.png", onClick })
  ] });
};
const NSW = ({ onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "network", children: [
    /* @__PURE__ */ jsx("h1", { children: "New South Wales" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Stats" }),
      /* @__PURE__ */ jsx("p", { children: "Population: 8,545,000" }),
      /* @__PURE__ */ jsx("p", { children: "Number of stations" }),
      /* @__PURE__ */ jsx("p", { children: "Max frequency" }),
      /* @__PURE__ */ jsx("p", { children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsx("img", { src: "../network_maps/nsw-train-map.png", onClick })
  ] });
};
const Queensland = ({ onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "network", children: [
    /* @__PURE__ */ jsx("h1", { children: "Queensland" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Stats" }),
      /* @__PURE__ */ jsx("p", { children: "Population: 5,618,800" }),
      /* @__PURE__ */ jsx("p", { children: "Number of stations" }),
      /* @__PURE__ */ jsx("p", { children: "Max frequency" }),
      /* @__PURE__ */ jsx("p", { children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsx("img", { src: "../network_maps/brisbane-train-map.png", onClick })
  ] });
};
const SouthAustralia = ({ onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "network", children: [
    /* @__PURE__ */ jsx("h1", { children: "South Australia" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Stats" }),
      /* @__PURE__ */ jsx("p", { children: "Population: 1,891,700" }),
      /* @__PURE__ */ jsx("p", { children: "Number of stations" }),
      /* @__PURE__ */ jsx("p", { children: "Max frequency" }),
      /* @__PURE__ */ jsx("p", { children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsx("img", { src: "../network_maps/adelaide-train-map.png", onClick })
  ] });
};
const Tasmania = ({ onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "network", children: [
    /* @__PURE__ */ jsx("h1", { children: "Tasmania" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Stats" }),
      /* @__PURE__ */ jsx("p", { children: "Population: 575,800" }),
      /* @__PURE__ */ jsx("p", { children: "Number of stations" }),
      /* @__PURE__ */ jsx("p", { children: "Max frequency" }),
      /* @__PURE__ */ jsx("p", { children: "Pricing" })
    ] })
  ] });
};
const WesternAustralia = ({ onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "network", children: [
    /* @__PURE__ */ jsx("h1", { children: "Western Australia" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Stats" }),
      /* @__PURE__ */ jsx("p", { children: "Population: 3,008,700" }),
      /* @__PURE__ */ jsx("p", { children: "Number of stations" }),
      /* @__PURE__ */ jsx("p", { children: "Max frequency" }),
      /* @__PURE__ */ jsx("p", { children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsx("img", { src: "../network_maps/perth-train-map.jpg", onClick }),
    /* @__PURE__ */ jsx("img", { src: "../network_maps/wa-train-map.jpg", onClick })
  ] });
};
const Browse = () => {
  const [active, setActive] = useState("null");
  return /* @__PURE__ */ jsxs("div", {
    className: "page",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Browse"
    }), /* @__PURE__ */ jsx("p", {
      children: "Select from multiple networks across Australia"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setActive("act"),
      children: "ACT"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setActive("nt"),
      children: "Northern Territory"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setActive("nsw"),
      children: "NSW"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setActive("qld"),
      children: "Queensland"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setActive("sa"),
      children: "South Australia"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setActive("tas"),
      children: "Tasmania"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setActive("vic"),
      children: "Victoria"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setActive("wa"),
      children: "Western Australia"
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("div", {
      className: "page",
      children: [active === "null" && /* @__PURE__ */ jsx(NullNetwork, {}), active === "act" && /* @__PURE__ */ jsx(ACT, {
        onClick: () => console.log("vic")
      }), active === "nt" && /* @__PURE__ */ jsx(NorthernTerritory, {
        onClick: () => console.log("vic")
      }), active === "nsw" && /* @__PURE__ */ jsx(NSW, {
        onClick: () => console.log("vic")
      }), active === "qld" && /* @__PURE__ */ jsx(Queensland, {
        onClick: () => console.log("vic")
      }), active === "sa" && /* @__PURE__ */ jsx(SouthAustralia, {
        onClick: () => console.log("vic")
      }), active === "tas" && /* @__PURE__ */ jsx(Tasmania, {
        onClick: () => console.log("vic")
      }), active === "vic" && /* @__PURE__ */ jsx(Victoria$1, {
        onClick: () => console.log("vic")
      }), active === "wa" && /* @__PURE__ */ jsx(WesternAustralia, {
        onClick: () => console.log("vic")
      })]
    })]
  });
};
const Browse$1 = UNSAFE_withComponentProps(Browse);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Browse$1
}, Symbol.toStringTag, { value: "Module" }));
const ImgEnlarge = ({ onClick, src }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "img-enlarge-container",
      id: "img-enlarge-container",
      onClick,
      children: /* @__PURE__ */ jsx("img", { src, className: "img-enlarge" })
    }
  );
};
const Comparison = () => {
  const [active1, setActive1] = useState("null");
  const [active2, setActive2] = useState("null");
  const [select1, setSelect1] = useState("null");
  const [select2, setSelect2] = useState("null");
  const [hoveredSrc, setHoveredSrc] = useState(void 0);
  const handleClickImage = (e) => {
    setHoveredSrc(e.currentTarget.src);
    console.log(e.target);
  };
  const handleSelectChange1 = (event) => {
    var _a;
    setSelect1((_a = event.target) == null ? void 0 : _a.value);
  };
  const handleSelectChange2 = (event) => {
    var _a;
    setSelect2((_a = event.target) == null ? void 0 : _a.value);
  };
  const [showImg, setShowImg] = useState(false);
  const handleShowImage = () => {
    setShowImg(false);
    console.log(hoveredSrc);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "page",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Compare 2 Networks"
    }), /* @__PURE__ */ jsx("p", {
      children: 'Select 2 networks from the dropdowns and click "Compare".'
    }), /* @__PURE__ */ jsxs("div", {
      className: "comparison",
      children: [/* @__PURE__ */ jsxs("select", {
        id: "compare-select1",
        onChange: handleSelectChange1,
        children: [/* @__PURE__ */ jsx("option", {
          value: "null",
          children: "Choose network..."
        }), /* @__PURE__ */ jsx("option", {
          value: "act",
          children: "Australian Capital Territory"
        }), /* @__PURE__ */ jsx("option", {
          value: "nsw",
          children: "New South Wales"
        }), /* @__PURE__ */ jsx("option", {
          value: "nt",
          children: "Northern Territory"
        }), /* @__PURE__ */ jsx("option", {
          value: "qld",
          children: "Queensland"
        }), /* @__PURE__ */ jsx("option", {
          value: "sa",
          children: "South Australia"
        }), /* @__PURE__ */ jsx("option", {
          value: "tas",
          children: "Tasmania"
        }), /* @__PURE__ */ jsx("option", {
          value: "vic",
          children: "Victoria"
        }), /* @__PURE__ */ jsx("option", {
          value: "wa",
          children: "Western Australia"
        })]
      }), /* @__PURE__ */ jsxs("select", {
        id: "compare-select2",
        onChange: handleSelectChange2,
        children: [/* @__PURE__ */ jsx("option", {
          value: "null",
          children: "Choose network..."
        }), /* @__PURE__ */ jsx("option", {
          value: "act",
          children: "Australian Capital Territory"
        }), /* @__PURE__ */ jsx("option", {
          value: "nsw",
          children: "New South Wales"
        }), /* @__PURE__ */ jsx("option", {
          value: "nt",
          children: "Northern Territory"
        }), /* @__PURE__ */ jsx("option", {
          value: "qld",
          children: "Queensland"
        }), /* @__PURE__ */ jsx("option", {
          value: "sa",
          children: "South Australia"
        }), /* @__PURE__ */ jsx("option", {
          value: "tas",
          children: "Tasmania"
        }), /* @__PURE__ */ jsx("option", {
          value: "vic",
          children: "Victoria"
        }), /* @__PURE__ */ jsx("option", {
          value: "wa",
          children: "Western Australia"
        })]
      })]
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => {
        setActive1(select1);
        setActive2(select2);
      },
      children: "Compare"
    }), /* @__PURE__ */ jsxs("div", {
      className: "comparison",
      children: [active1 === "null" && /* @__PURE__ */ jsx(NullNetwork, {}), active1 === "vic" && /* @__PURE__ */ jsx(Victoria$1, {
        onClick: () => setShowImg(true)
      }), active1 === "nsw" && /* @__PURE__ */ jsx(NSW, {
        onClick: () => handleClickImage
      }), active1 === "act" && /* @__PURE__ */ jsx(ACT, {
        onClick: () => setShowImg(true)
      }), active1 === "nt" && /* @__PURE__ */ jsx(NorthernTerritory, {
        onClick: () => handleClickImage
      }), active1 === "qld" && /* @__PURE__ */ jsx(Queensland, {
        onClick: () => setShowImg(true)
      }), active1 === "sa" && /* @__PURE__ */ jsx(SouthAustralia, {
        onClick: () => setShowImg(true)
      }), active1 === "tas" && /* @__PURE__ */ jsx(Tasmania, {
        onClick: () => setShowImg(true)
      }), active1 === "wa" && /* @__PURE__ */ jsx(WesternAustralia, {
        onClick: () => setShowImg(true)
      }), /* @__PURE__ */ jsx("div", {
        className: "divider"
      }), active2 === "null" && /* @__PURE__ */ jsx(NullNetwork, {}), active2 === "vic" && /* @__PURE__ */ jsx(Victoria$1, {
        onClick: () => setShowImg(true)
      }), active2 === "nsw" && /* @__PURE__ */ jsx(NSW, {
        onClick: handleClickImage
      }), active2 === "act" && /* @__PURE__ */ jsx(ACT, {
        onClick: () => setShowImg(true)
      }), active2 === "nt" && /* @__PURE__ */ jsx(NorthernTerritory, {
        onClick: () => handleClickImage
      }), active2 === "qld" && /* @__PURE__ */ jsx(Queensland, {
        onClick: () => setShowImg(true)
      }), active2 === "sa" && /* @__PURE__ */ jsx(SouthAustralia, {
        onClick: () => setShowImg(true)
      }), active2 === "tas" && /* @__PURE__ */ jsx(Tasmania, {
        onClick: () => setShowImg(true)
      }), active2 === "wa" && /* @__PURE__ */ jsx(WesternAustralia, {
        onClick: () => setShowImg(true)
      })]
    }), showImg && /* @__PURE__ */ jsx(ImgEnlarge, {
      onClick: handleShowImage,
      src: hoveredSrc
    })]
  });
};
const Comparison$1 = UNSAFE_withComponentProps(Comparison);
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Comparison$1
}, Symbol.toStringTag, { value: "Module" }));
const ExploreBtn = ({ children, position, className }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [update, setUpdate] = useState(0);
  let navigate = useNavigate();
  const setPosition = () => {
    if (position == "tl") {
      setX(0);
      setY(0);
    } else if (position == "t") {
      setX(50);
      setY(0);
    } else if (position == "tr") {
      setX(100);
      setY(0);
    } else if (position == "l") {
      setX(0);
      setY(50);
    } else if (position == "c") {
      setX(50);
      setY(50);
    } else if (position == "r") {
      setX(100);
      setY(50);
    } else if (position == "bl") {
      setX(0);
      setY(100);
    } else if (position == "b") {
      setX(50);
      setY(100);
    } else if (position == "br") {
      setX(100);
      setY(100);
    }
  };
  useEffect(() => setPosition());
  const dynamicStyle = {
    left: `calc(${x}%)`,
    top: `calc(${y}%)`,
    translate: `calc(-50%) calc(-50%)`
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: () => {
        setUpdate(update + 1);
        navigate(
          "/home/explore/" + (children == null ? void 0 : children.toLocaleString().replace(" ", "-"))
        );
      },
      className: "explore-btn " + className,
      style: dynamicStyle,
      children
    }
  );
};
const ExploreLine = ({ position, col, lineNo }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ox, setOx] = useState(0);
  const [oy, setOy] = useState(0);
  const [rot, setRot] = useState(0);
  const [height, setHeight] = useState(60);
  const [colour, setColour] = useState("var(--primary-colour)");
  const setPosition = () => {
    if (position == "tl") {
      setX(25 + ox);
      setY(25 - oy);
      setRot(-45);
      setHeight(69);
    } else if (position == "t") {
      setX(50 + ox * 1.5);
      setY(25);
      setRot(0);
    } else if (position == "tr") {
      setX(75 + ox);
      setY(25 + oy);
      setRot(45);
      setHeight(69);
    } else if (position == "l") {
      setX(25);
      setY(50 - oy * 1.5);
      setRot(90);
    } else if (position == "r") {
      setX(75);
      setY(50 + oy * 1.5);
      setRot(90);
    } else if (position == "bl") {
      setX(25 - ox);
      setY(75 - oy);
      setRot(45);
      setHeight(69);
    } else if (position == "b") {
      setX(50 - ox * 1.5);
      setY(75);
      setRot(0);
    } else if (position == "br") {
      setX(75 - ox);
      setY(75 + oy);
      setRot(-45);
      setHeight(69);
    }
  };
  const setOffset = () => {
    if (lineNo == 1) {
      setOx(-1);
      setOy(-1);
    } else if (lineNo == 2) {
      setOx(1);
      setOy(1);
    } else if (lineNo == 3) {
      setOx(-2);
      setOy(-2);
    } else if (lineNo == 4) {
      setOx(2);
      setOy(2);
    } else if (lineNo == 5) {
      setOx(-3);
      setOy(-3);
    } else if (lineNo == 6) {
      setOx(3);
      setOy(3);
    } else if (lineNo == 7) {
      setOx(-4);
      setOy(-4);
    } else if (lineNo == 8) {
      setOx(4);
      setOy(4);
    } else if (lineNo == 9) {
      setOx(-5);
      setOy(-5);
    } else if (lineNo == 10) {
      setOx(5);
      setOy(5);
    }
  };
  const setDisplay = () => {
    if (col == "v") {
      setColour("var(--primary-colour)");
    } else if (col == "y") {
      setColour("var(--secondary-colour)");
    } else if (col == "g") {
      setColour("green");
    } else if (col == "r") {
      setColour("red");
    } else if (col == "b") {
      setColour("blue");
    } else if (col == "c") {
      setColour("cyan");
    } else if (col == "p") {
      setColour("pink");
    }
  };
  useEffect(() => {
    setOffset();
    setPosition();
    setDisplay();
  });
  const dynamicStyle = {
    backgroundColor: colour,
    left: `calc(${x}%)`,
    top: `calc(${y}%)`,
    height: `calc(${height}%)`,
    translate: `calc(-50%) calc(-50%)`,
    transform: `rotate(${rot}deg)`
  };
  return /* @__PURE__ */ jsx("div", { className: "explore-line", style: dynamicStyle });
};
const ExploreContainer = ({ stationInfo }) => {
  const [connectedStations, setConnectedStations] = useState([]);
  const populateStations = (str) => {
    const data2 = [];
    const stations = str.split(" ");
    for (let i = 1; i < stations.length; i++) {
      let stationButtonString = stations[i].trim();
      if (stationButtonString.startsWith("time:")) {
        console.log("time");
      } else if (stationButtonString != "") {
        let stationButton = stationButtonString.split(":");
        console.log(stationButton[2]);
        if (stationButton.length == 3) {
          data2.push({
            // add the data to the data array
            id: i,
            name: stationButton[0].replace("-", " "),
            dir: stationButton[1].trim(),
            colours: stationButton[2].split(",")
          });
        } else if (stationButton.length == 2) {
          data2.push({
            id: i,
            name: stationButton[0].replace("-", " "),
            dir: stationButton[1].trim(),
            colours: ["v"]
          });
        }
      }
    }
    return data2;
  };
  const data = populateStations(stationInfo);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { id: "explore-container", className: "explore-container", children: [
    /* @__PURE__ */ jsx(ExploreBtn, { className: "explore-btn-focus", position: "c", children: stationInfo.split(" ")[0].replace("-", " ") }),
    data.map((item) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(ExploreBtn, { position: item.dir, children: item.name }),
      item.colours.map((colour) => /* @__PURE__ */ jsx(
        ExploreLine,
        {
          position: item.dir,
          col: colour,
          lineNo: item.colours.indexOf(colour)
        }
      ))
    ] }, item.name))
  ] }) });
};
const SubTitle = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "subtitle", children });
};
const Explore = () => {
  const {
    currentStation
  } = useParams();
  const targetRef = useRef(null);
  const [fileContent, setFileContent] = useState("");
  const [stationInfo, setStationInfo] = useState("Southern-Cross");
  const [hasImg, setHasImg] = useState(false);
  const [stations, setStations] = useState([""]);
  const [jumpStation, setJumpStation] = useState("");
  const [timeToCBD, setTimeToCBD] = useState(3);
  const [update, setUpdate] = useState(0);
  let navigate = useNavigate();
  const searchStation = (searchTerm, lines) => {
    let stationData = "";
    if (searchTerm) {
      lines.forEach((line) => {
        if (!line.trim().startsWith("//")) {
          if (line.trim().split(" ")[0] == searchTerm) {
            console.log("Line found: " + searchTerm);
            stationData = line;
          }
        }
      });
    }
    console.log("station data: " + stationData);
    return stationData;
  };
  useEffect(() => {
    fetch("/stations-vic.sl?nocache=" + Date.now()).then((response) => response.text()).then((text) => {
      setFileContent(text);
      let fileLines = text.split("\n");
      setStationInfo(searchStation(currentStation, fileLines));
      console.log("stationInfo: " + stationInfo);
    }).catch((error) => console.error("Error reading file: ", error));
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
    async function checkImg() {
      try {
        const response = await fetch(`/stations/images/vic/${currentStation == null ? void 0 : currentStation.toLowerCase()}.jpg`, {
          method: "HEAD"
        });
        if (response.ok) {
          setHasImg(true);
        } else {
          setHasImg(false);
        }
      } catch (error) {
        console.error("Error checking image existence", error);
        setHasImg(false);
      }
    }
    checkImg();
  }, [currentStation]);
  useEffect(() => {
    if (stationInfo.split(" ")[1]) {
      if (stationInfo.split(" ")[1].startsWith("time:")) {
        setTimeToCBD(parseInt(stationInfo.split(" ")[1].split(":")[1]));
      } else {
        setTimeToCBD(-1);
      }
    }
  }, [stationInfo]);
  useEffect(() => {
    fetch("/stations-vic.sl?nocache=" + Date.now()).then((response) => response.text()).then((text) => {
      setFileContent(text);
      let fileLines = text.split("\n");
      let fileStations = [];
      fileLines.forEach((line) => {
        let stationName = line.split(" ")[0].replace("-", " ");
        if (stationName.trim() != "//" && stationName.trim() != "") fileStations.push(stationName);
      });
      setStations(fileStations);
    }).catch((error) => console.error("Error reading file: ", error));
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "page explore",
    id: "explore",
    children: [/* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx(SubTitle, {
        children: "Explore"
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "station-jump",
      ref: targetRef,
      children: [/* @__PURE__ */ jsx("input", {
        type: "text",
        list: "stations-list",
        placeholder: "Jump to station...",
        value: jumpStation,
        onChange: (e) => {
          setJumpStation(e.target.value);
        }
      }), /* @__PURE__ */ jsx("datalist", {
        id: "stations-list",
        children: stations.map((station) => /* @__PURE__ */ jsx("option", {
          value: station
        }))
      }), /* @__PURE__ */ jsx("button", {
        onClick: () => {
          console.log(jumpStation);
          navigate("/home/explore/" + jumpStation.replace(" ", "-"));
        },
        children: "Go"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "explore-outer-container",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "explore-station-info",
        children: [/* @__PURE__ */ jsx("h1", {
          children: stationInfo.split(" ")[0].replace("-", " ")
        }), hasImg && /* @__PURE__ */ jsx("img", {
          src: `/stations/images/vic/${currentStation == null ? void 0 : currentStation.toLowerCase()}.jpg`
        }), timeToCBD >= 0 && /* @__PURE__ */ jsxs("p", {
          children: ["Time to Southern Cross (by 8:30am): ", timeToCBD, " min"]
        })]
      }), /* @__PURE__ */ jsx(ExploreContainer, {
        stationInfo
      })]
    })]
  }, currentStation);
};
const Explore$1 = UNSAFE_withComponentProps(Explore);
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Explore$1
}, Symbol.toStringTag, { value: "Module" }));
const About = () => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(SubTitle, {
      children: "About this website"
    })
  });
};
const About$1 = UNSAFE_withComponentProps(About);
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About$1
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/pt-maps-reactassets/entry.client-C4r7F_-V.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js", "/pt-maps-reactassets/client-CrJs2Uly.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/pt-maps-reactassets/root-6fqE8eX8.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js", "/pt-maps-reactassets/client-CrJs2Uly.js"], "css": ["/pt-maps-reactassets/app-B1RkSO5n.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/IndexRedirect": { "id": "routes/IndexRedirect", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pt-maps-reactassets/IndexRedirect-EHNke_GW.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/HomeBase": { "id": "routes/HomeBase", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pt-maps-reactassets/HomeBase-upaimIP1.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Browse": { "id": "routes/Browse", "parentId": "routes/HomeBase", "path": "browse/*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pt-maps-reactassets/Browse-DK7JIlIu.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js", "/pt-maps-reactassets/WesternAustralia-CF5GQmI2.js", "/pt-maps-reactassets/Victoria-BHUC9-J4.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/networks/Victoria": { "id": "routes/networks/Victoria", "parentId": "routes/Browse", "path": "victoria", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pt-maps-reactassets/Victoria-BHUC9-J4.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Comparison": { "id": "routes/Comparison", "parentId": "routes/HomeBase", "path": "compare/*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pt-maps-reactassets/Comparison-Ws_aTE5r.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js", "/pt-maps-reactassets/Victoria-BHUC9-J4.js", "/pt-maps-reactassets/WesternAustralia-CF5GQmI2.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Explore": { "id": "routes/Explore", "parentId": "routes/HomeBase", "path": "explore/:currentStation", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pt-maps-reactassets/Explore-I0EOE_Kp.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js", "/pt-maps-reactassets/client-CrJs2Uly.js", "/pt-maps-reactassets/SubTitle-CEh91Lvc.js"], "css": ["/pt-maps-reactassets/app-B1RkSO5n.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/About": { "id": "routes/About", "parentId": "routes/HomeBase", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pt-maps-reactassets/About-DR7J93sv.js", "imports": ["/pt-maps-reactassets/chunk-PVWAREVJ-BBtH3yxJ.js", "/pt-maps-reactassets/SubTitle-CEh91Lvc.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/pt-maps-reactassets/manifest-95169ad2.js", "version": "95169ad2", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/pt-maps-react";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/IndexRedirect": {
    id: "routes/IndexRedirect",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/HomeBase": {
    id: "routes/HomeBase",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/Browse": {
    id: "routes/Browse",
    parentId: "routes/HomeBase",
    path: "browse/*",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/networks/Victoria": {
    id: "routes/networks/Victoria",
    parentId: "routes/Browse",
    path: "victoria",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/Comparison": {
    id: "routes/Comparison",
    parentId: "routes/HomeBase",
    path: "compare/*",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/Explore": {
    id: "routes/Explore",
    parentId: "routes/HomeBase",
    path: "explore/:currentStation",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/About": {
    id: "routes/About",
    parentId: "routes/HomeBase",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
