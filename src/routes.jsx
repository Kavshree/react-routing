import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import Products from "./pages/Products";
import Profile from "./pages/Profile";
import App from "./App";
import { Login } from './components/Login';
import { RequireAuth } from './components/requireAuth';
const LazyProducts = React.lazy(() => import('./pages/Products'))

export default function GlobalRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/" element= { <Home/> } />
                <Route path="/products" element= { 
                    <React.Suspense fallback="Loading...">
                      <LazyProducts /> 
                    </React.Suspense>
                }/>
                <Route path="/profile" 
                    element= { 
                    <RequireAuth>
                       <Profile /> 
                    </RequireAuth>
                } />
                <Route path="/login" element= { <Login/> } />
                <Route path="*" element= { <Home/> } />
            </Route>
        </Routes>
    )
}