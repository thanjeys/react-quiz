import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Appquiz from './Appquiz';
import {Navbar} from './components/navbar';
import {Footer} from './components/footer';
import reportWebVitals from './reportWebVitals';

const Layout = () =>
{
    return(
    <>
        <Navbar />
        <div className="container">
        <Appquiz />
        <Footer />
        </div>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Layout />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
