import React, { useContext, useEffect, useRef, useState } from "react";
//import './global.css'

//{Provider, Consumer}
const MyContext = React.createContext();

const boxStyles = {
  padding: "0.5em",
  margin: "0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

const Header = () => {
  //const context = useContext(MyContext);
  return (
    <>
      <h1 style={boxStyles}> Hooks Ejemplos</h1>
    </>
  );
};

const App = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const entrada = useRef();

  useEffect(() => {
    setTimeout(() => {
      fetch(
        'https://universidad-react-api-test.luxfenix.vercel.app/products?name='+ name
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          setIsFetching(false);
        });
    }, 6000);
  }, [name]);

  const handleInput = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Header />
      <input type="text" onChange={handleInput} ref={entrada} />
      {isFetching && <h1> Cargando Datos...</h1>}
      <h1>{name}</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id} style={boxStyles}>
            {`${prod.name} `}
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
