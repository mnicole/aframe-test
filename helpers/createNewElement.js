/**
 * Creates an element
 * @param  {string} elementType Type of element to create
 * @param  {object} config Config object with key, value pairs for attributes
 * @return {string} Created element
 */
export const createNewElement = (elementType, config) => {
    const el = document.createElement(elementType);
    const keys = Object.keys(config);
    keys.forEach((k) => {
        el.setAttribute(k, config[k])
    });

    return el;
}

export const addProperties = (el, config) => {
    const keys = Object.keys(config);
    keys.forEach((k) => {
        el.setAttribute(k, config[k])
    });

    return el;
}

export default createNewElement;
