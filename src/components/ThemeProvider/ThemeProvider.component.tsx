import React, { FunctionComponent, useState, useEffect } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider, DefaultTheme } from 'styled-components';
import { ThemeProviderProps } from './ThemeProvider.types';
import { resolveTheme } from './ThemeProvider.utils';

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, variants, theme, fromJSON }) => {

    const [ resolvedTheme, setResolvedTheme ] = useState<DefaultTheme>(resolveTheme(theme, variants, fromJSON));

    useEffect(() => {
        setResolvedTheme(resolveTheme(theme, variants, fromJSON));
    }, [ variants ]);

    return (
        <StyledComponentsThemeProvider theme={resolvedTheme}>
            {children}
        </StyledComponentsThemeProvider>
    );

}

export default ThemeProvider;