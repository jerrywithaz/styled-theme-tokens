import React, { FunctionComponent, useState, useEffect } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider, DefaultTheme } from 'styled-components';
import { ThemeProviderProps } from './ThemeProvider.types';
import { resolveTheme } from './ThemeProvider.utils';

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, variants, theme }) => {

    const [ resolvedTheme, setResolvedTheme ] = useState<DefaultTheme>(resolveTheme(theme, variants));

    useEffect(() => {
        setResolvedTheme(resolveTheme(theme, variants));
    }, [ variants ]);

    return (
        <StyledComponentsThemeProvider theme={resolvedTheme}>
            {children}
        </StyledComponentsThemeProvider>
    );

}

export default ThemeProvider;