import ReactOnRails from 'react-on-rails';

import Editor from '../components/Editor';
import Preview from '../components/Preview';
import ColorPicker from '../components/ColorPicker';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Editor, Preview, ColorPicker
});
