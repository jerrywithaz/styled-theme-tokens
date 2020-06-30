import deepMapObject from './../';

describe("utils/deepMapObject", () => {

    it("should deep merge object without replacing values that are objects", () => {

        const result = deepMapObject({
            a: {
                d: {
                    e: {
                        f: 1
                    }
                }
            },
            b: {
                g: 2
            },
            c: {
                h: 2,
                i: {
                    j: [2, 2, 2]
                }
            }
        }, () => {
            return 5;
        });
        
        expect(result).toEqual({
            a: {
                d: {
                    e: {
                        f: 5
                    }
                }
            },
            b: {
                g: 5
            },
            c: {
                h: 5,
                i: {
                    j: [2, 2, 2]
                }
            }
        });

    });

    it("should deep merge object and replace values that are objects", () => {

        const result = deepMapObject({
            a: {
                d: {
                    e: {
                        f: 1
                    }
                }
            },
            b: {
                g: 2
            },
            c: {
                h: 2,
                i: {
                    j: [2, 2, 2]
                }
            }
        }, (value, key) => {
            if (key === "a" || key === "d" || key === "e" || key === "f") {
                return value;
            }
            return 5;
        }, true);
        
        expect(result).toEqual({
            a: {
                d: {
                    e: {
                        f: 1
                    }
                }
            },
            b: 5,
            c: 5
        });

    });

});
