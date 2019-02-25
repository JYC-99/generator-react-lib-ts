/** Jest test setup file. */

const { configure } = require('enzyme');
const { initializeIcons } = require('@uifabric/icons');
const Adapter = require('enzyme-adapter-react-16');
const ReactDOM = require('react-dom');

// Initialize icons.
initializeIcons('');

// optional
window.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

configure({ adapter: new Adapter() });

// https://github.com/facebook/react/issues/11565
ReactDOM.createPortal = node => node;
