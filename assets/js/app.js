import React                      from 'react'
import ReactDOM                 from 'react-dom'
import Modal from 'react-modal';

import App                        from './App/App'

import "common_css/app.less";

Modal.setAppElement('#root')
ReactDOM.render((<App />), document.getElementById('root'));
