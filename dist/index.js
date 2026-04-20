"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  ThemeProvider: () => ThemeProvider,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(index_exports);

// components/Button/Button.tsx
var import_react_native = require("react-native");

// theme/ThemeProvider.tsx
var import_react = require("react");

// theme/theme.ts
var theme = {
  "colors": {
    "abubutek": "#bed8d4",
    "black": "#000000",
    "blue": "#2364aa",
    "coklat": "#efd9ce",
    "darkcyan": "#3c887e",
    "grey": "#bdbdbd",
    "greynew": "#bbddbbdd",
    "purple": "#b79ced",
    "skyaqua": "#3c887e",
    "springgreen": "#0fff95",
    "tropicalTeal": "#73bfb8",
    "white": "#ffffff",
    "yellow": "#fec601"
  },
  "language": {
    "enHalo": "holaaaa",
    "idHalo": "halo"
  }
};

// theme/ThemeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeContext = (0, import_react.createContext)(theme);
var ThemeProvider = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, { value: theme, children });
};
var useTheme = () => (0, import_react.useContext)(ThemeContext);

// components/Button/Button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = ({ title }) => {
  const theme2 = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react_native.TouchableOpacity,
    {
      style: {
        backgroundColor: theme2.colors.abubutek,
        borderRadius: 8
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native.Text, { style: { color: "#fff" }, children: title })
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  ThemeProvider,
  useTheme
});
