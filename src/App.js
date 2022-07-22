import React from 'react'
import store from './redux/Store';
import { Provider} from 'react-redux'
//Provider: permite el acceso al store en toda la applicacion
import Counter from './components/Counter'

const Videos = () => (
  <h1>Videos</h1>
)



const App = () => {
  return (
      <Provider store={store}>
        <h1>Hola</h1>
        <div>
          <Counter/>
        </div>
      </Provider>
      
  )
}

export default App