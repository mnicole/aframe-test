export const categories = ['clothes', 'electronics', 'health', 'food'];
export const categoriesUpper = ['Clothes', 'Electronics', 'Health', 'Food'];

export const categoryProps = {
    clothes: {
        position: {
            in: {
                x: 0,
                y: 10,
                z: -1.5
            },
            idle: {
                x: 0.35,
                y: 0.5,
                z: -0.35
            },
            center: {
                x: 0.35,
                y: 1,
                z: -0.35
            },
            out: {
                x: 0,
                y: -10,
                z: -7
            }
        },
        rotation: {
            in: {
                x: 90,
                y: 180,
                z: 90
            },
            idle: {
                x: 0,
                y: 0,
                z: 0
            },
            center: {
                x: 0,
                y: 0,
                z: 0
            },
            out: {
                x: 90,
                y: 180,
                z: 90
            }
        }
    },  
    electronics: {
        position: {
            in: {
                x: 0,
                y: 10,
                z: -1.5
            },
            idle: {
                x: -0.35,
                y: 0.5,
                z: -0.35
            },
            center: {
                x: -0.35,
                y: 1,
                z: -0.35
            },
            out: {
                x: 0,
                y: -10,
                z: -7
            }
        },
        rotation: {
            in: {
                x: 90,
                y: 180,
                z: 90
            },
            idle: {
                x: 0,
                y: 90,
                z: 0
            },
            center: {
                x: 0,
                y: 90,
                z: 0
            },
            out: {
                x: 90,
                y: 180,
                z: 90
            }
        }
    },
    food: {
        position: {
            in: {
                x: 0,
                y: 10,
                z: -1.5
            },
            idle: {
                x: -0.35,
                y: 0.5,
                z: 0.35
            },
            center: {
                x: -0.35,
                y: 1,
                z: 0.35
            },
            out: {
                x: 0,
                y: -10,
                z: -7
            }

        },
        rotation: {
            in: {
                x: 90,
                y: 180,
                z: 90
            },
            idle: {
                x: 0,
                y: 180,
                z: 0  
            },
            center: {
                x: 0,
                y: 180,
                z: 0
            },
            out: {
                x: 90,
                y: 180,
                z: 90
            }
        }
    },
    health: {
        position: {
            in: {
                x: 0,
                y: 10,
                z: -1.5
            },
            idle: {
                x: 0.35,
                y: 0.5,
                z: 0.35
            },
            center: {
                x: 0.35,
                y: 1,
                z: 0.35
            },
            out: {
                x: 0,
                y: -10,
                z: -7
            }
        },
        rotation: {
            in: {
                x: 90,
                y: 20,
                z: 90
            },
            idle: {
                x: 0,
                y: 270,
                z: 0
            },
            center: {
                x: 0,
                y: 270,
                z: 0
            },
            out: {
                x: 90,
                y: 180,
                z: 90
            }
        }
    }
};
