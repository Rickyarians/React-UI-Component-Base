import * as react_jsx_runtime from 'react/jsx-runtime';

declare const Button: ({ title }: any) => react_jsx_runtime.JSX.Element;

declare const ThemeProvider: ({ children }: any) => react_jsx_runtime.JSX.Element;
declare const useTheme: () => {
    colors: {
        abubutek: string;
        black: string;
        blue: string;
        coklat: string;
        darkcyan: string;
        grey: string;
        greynew: string;
        purple: string;
        skyaqua: string;
        springgreen: string;
        tropicalTeal: string;
        white: string;
        yellow: string;
    };
    language: {
        enHalo: string;
        idHalo: string;
    };
};

export { Button, ThemeProvider, useTheme };
