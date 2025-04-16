import { useState } from 'react'
import './App.css'
import Caculator_useReducer from './components/Caculator_useReducer'
import Caculator_Redux from './components/Caculator_Redux'
import { Provider } from 'react-redux'
import store from './js/store_toolkit'
import Caculator_ReduxToolkit from './components/Caculator_ReduxToolkit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <div>
      <Caculator_useReducer></Caculator_useReducer>
      <hr />
      <Caculator_Redux></Caculator_Redux>
      <hr />
      <Caculator_ReduxToolkit></Caculator_ReduxToolkit>
      </div>
    </Provider>
    </>
  )
}

export default App
