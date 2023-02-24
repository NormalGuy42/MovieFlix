import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router,createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import MoviePage from './MoviePage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
    {
    path:'/',
    element: <App />,
    },{
        path:'/MoviePage',
        element: <MoviePage/>,
    }
])
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
    
);