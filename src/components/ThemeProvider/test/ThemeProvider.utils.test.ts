import { token, resolveTheme } from "../ThemeProvider.utils";

describe("components/ThemeProvider/utils", () => {

    describe("token", () => {
        describe("when creating token", () => {
            it("should return a function", () => {
                const myToken = token("mode", {
                    dark: "darkred",
                    light: "red"
                });
                expect(myToken).toBeInstanceOf(Function);
            });
        });
        describe("when resolving token", () => {
            it("should resolve to correct value given variants", () => {
                const myToken = token("mode", {
                    dark: "darkred",
                    light: "red"
                });
                expect(myToken({ mode: "light" })).toEqual("red");
            });
        });
    });

    describe("resolveTheme", () => {
        it("should resolve all tokens and keep non-token values as they are", () => {
            const resolvedTheme = resolveTheme({
                colors: {
                    primary: token("mode", {
                        dark: "darkred",
                        light: "red"
                    })
                },
                sizes: {
                    button: "25px"
                }
            }, { mode: "light" });
            expect(resolvedTheme).toEqual({
                colors: {
                    primary: "red"
                },
                sizes: {
                    button: "25px"
                }
            })
        });
        it("should resolve from JSON tokens and keep non-token values as they are", () => {
            const resolvedTheme = resolveTheme({
                "colors": {
                    "primary": {
                        "token": "mode",
                        "values": {
                            "dark": "darkred",
                            "light": "red"
                        }
                    }
                },
                "sizes": {
                    "button": "25px"
                }
            }, { mode: "light" }, true);
            expect(resolvedTheme).toEqual({
                colors: {
                    primary: "red"
                },
                sizes: {
                    button: "25px"
                }
            })
        });
    });
    
});
