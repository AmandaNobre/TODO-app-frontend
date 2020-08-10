import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './main/app'
import reducers from '../src/main/reducers'

const store = createStore(reducers)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))