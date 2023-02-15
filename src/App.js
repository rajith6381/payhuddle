import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formout from "./Formout";
import { useState } from "react";
import Routing from "./Routing";
function App() {
  // var [name, setname] = useState("");
  // var [image, setimage] = useState("");
  // const func = (e, i) => {
  //   setname(e);
  //   setimage(i);
  //   console.log(name);
  // };
  return (
    <div>
     
      {/* <Form func={func} />
      <Formout name={name} image={image} /> */}
      <Routing />
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form func={func}/>}></Route>
        <Route path='/profile' element={<Formout name={name}/>}></Route>
      </Routes>
      </BrowserRouter> */}
      {/*  */}

    </div>
  );
}

export default App;
