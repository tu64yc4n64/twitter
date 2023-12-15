
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes';
import "./main.css"
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import TweetsReducer from './stores/tweets/index.jsx'
import UserReducer from "./stores/users"


const store = configureStore({
  reducer: {
    tweets: TweetsReducer,
    users: UserReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>


    <RouterProvider router={routes}>

    </RouterProvider>
  </Provider>


)


export default store