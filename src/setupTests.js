// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Polyfill window.matchMedia for libraries (e.g., react-slick/enquire.js)
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = function matchMedia(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function () {}, // deprecated
      removeListener: function () {}, // deprecated
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () { return false; }
    };
  };
}

// Minimal webpack-style require.context shim for Jest environment
// Returns a function with a .keys() that yields no files by default.
// Components using it will behave as if there are no dynamic assets in tests.
// This is sufficient to render without throwing.
// eslint-disable-next-line no-undef
if (typeof require !== 'undefined' && typeof require.context !== 'function') {
  // eslint-disable-next-line no-undef
  require.context = () => {
    const context = (p) => p;
    context.keys = () => [];
    return context;
  };
}
