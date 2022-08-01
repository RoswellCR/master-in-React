import React from 'react'
import store from './redux/Store';
import { Provider} from 'react-redux'; //Provider: permite el acceso al store en toda la applicacion
// import Counter from './components/Counter';
// import Info from './components/Info';
// import Fruits from './components/Fruits';
// import Todos from './components/Todos/Todos';
import Blogs from './components/Blogs';
//import Controller from './components/Controller'

const App = () => {
  return (
      <Provider store={store}>
        <div>
          {/* <Info/>
          <Counter/> */}
          {/* <Todos/>
          <Fruits/> */}
          {/* <Controller/> */}
          <Blogs/>
        </div>
      </Provider>
      
  )
}

export default App