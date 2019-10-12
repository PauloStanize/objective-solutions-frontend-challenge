import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes'

const middlewares = [thunk]
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares))

render(
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
