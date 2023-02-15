import {useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Formout from './Formout'
import Form from './Form'
import Signin from './Signin'
import Task from './Task'
import Payhuddle from './Payhuddle'
import { createContext} from 'react'


export const Appcontext = createContext(null)

const Routing = () => {
  var [name, setname] = useState("");
  var [image, setimage] = useState("");
  const func = (e, i) => {
    setname(e);
    setimage(i);
    console.log(name);
  };
  return (
    <Appcontext.Provider value={{func,name,image}} >
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<Task/>}></Route>
    <Route path='/page' element={<Payhuddle/>}></Route>
   
 </Routes>
 </BrowserRouter>
 </Appcontext.Provider>
  )
}

export default Routing
