import { Outlet } from "react-router-dom";
import Header from "./components/Headers/Headers";
import Footer from "./components/Footers/Footers";


export default function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    
  )
}