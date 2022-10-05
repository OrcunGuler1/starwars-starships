import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/styles.scss'
import { Provider } from 'react-redux'
import store from './store'

console.log('store', store.getState())
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>,
)
