import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout';
import Gifts from './Components/Gifts/TodoList';
import User from './Components/User/User';
import FAQ from './Components/Blogs/Blogs'



// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<App/>

//       },
//       {
//         path:"/Gift",
//         element:<Gifts/>
//       }
//     ]

//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
      <Route path ='' element={<App/>} />
      <Route path ='Gift' element={<Gifts/>} />
      <Route path ='User/:Userid' element={<User/>} />
      <Route path ='Blogs' element={<FAQ/>} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
