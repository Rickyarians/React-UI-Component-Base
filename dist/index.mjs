// components/Button/Button.tsx
import { TouchableOpacity, Text } from "react-native";

// theme/ThemeProvider.tsx
import { createContext, useContext } from "react";

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
import { jsx } from "react/jsx-runtime";
var ThemeContext = createContext(theme);
var ThemeProvider = ({ children }) => {
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: theme, children });
};
var useTheme = () => useContext(ThemeContext);

// components/Button/Button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Button = ({ title }) => {
  const theme2 = useTheme();
  return /* @__PURE__ */ jsx2(
    TouchableOpacity,
    {
      style: {
        backgroundColor: theme2.colors.abubutek,
        borderRadius: 8
      },
      children: /* @__PURE__ */ jsx2(Text, { style: { color: "#fff" }, children: title })
    }
  );
};
export {
  Button,
  ThemeProvider,
  useTheme
};
