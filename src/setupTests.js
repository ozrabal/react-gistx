//import Enzyme, { shallow, render, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
//Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
//global.shallow = shallow;
//global.render = render;
//global.mount = mount;
// Fail tests on any warning
/*console.error = message => {
   throw new Error(message)
};*/
const react = require('react');
// Resolution for requestAnimationFrame not supported in jest error :
// https://github.com/facebook/react/issues/9102#issuecomment-283873039
//global.window = global;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};

module.exports = react;
var localStorageMock = (function() {
    var store = {'token': 'token'};

    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        removeItem: function(key) {
          store[key] = undefined
        },
        clear: function() {
            store = {};
        }
    };
})();

Object.defineProperty(window, 'localStorage', {
     value: localStorageMock
});

const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0)
};

export default raf
