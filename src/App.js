import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Flower from "./pages/Flower";
import Conifers from "./pages/Conifers";
import Tree from "./pages/Tree";
import Services from "./pages/Services";
import ErrorPage from "./pages/ErrorPage";

document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';

function scrollToTop(){
  window.scrollTo(0, 0);
}


const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root />,
    errorElement: <ErrorPage onLink={scrollToTop}/>,
    children: [
      {path: '/', element: <Home onLink={scrollToTop}/>},
      {path: '/o-nama', element: <About />},
      {path: '/naše-cveće', element: <Products onLink={scrollToTop}/>},
      {path: '/naše-cveće/:flowerName', element: <Flower onLink={scrollToTop}/>},
      {path: '/naše-drveće', element: <Conifers onLink={scrollToTop}/>},
      {path: '/naše-drveće/:treeName', element: <Tree onLink={scrollToTop}/>},
      {path: '/naše-usluge', element: <Services />},
    ]
  }
]);

function App() { 

  return (
    <RouterProvider router={router}/>
    // <>
    //   <Header opened={opened} openMenu={openMenu}/>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/o-nama" element={<About />}></Route>
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;
