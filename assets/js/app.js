import React                      from 'react'
import ReactDOM                 from 'react-dom'
import Modal from 'react-modal';

import App                        from './App/App'

import "common_css/app.less";

const domContainer = document.querySelector('#root');

Modal.setAppElement(domContainer)
ReactDOM.render((<App />), domContainer);
