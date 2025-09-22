import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from './Home'
import IDModel from "./IDModel";
import Test from "./test";

const App = () => {
  return (<>
    <BrowserRouter>
    <div className=" flex justify-center home-bg">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ID" element={<IDModel/>} />
        <Route path="/test" element={<Test/>} />
      </Routes >
      </div>
    </BrowserRouter>
    
  </>);
}
 
export default App ;