import React from 'react'
import store from './redux/Store';
import { Provider} from 'react-redux'; //Provider: permite el acceso al store en toda la applicacion
import Counter from './components/Counter';
import Info from './components/Info';


const App = () => {
  return (
      <Provider store={store}>
        <h1>Hola</h1>
        <div>
          <Info/>
          <Counter/>
        </div>
      </Provider>
      
  )
}

export default App