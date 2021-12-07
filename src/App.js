import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { retry } from './utils/CommonFunctions';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
const Navigation = lazy(() => retry(() => import('./components/Navigation')));
const Home = lazy(() => retry(() => import('./pages/Home')));
const Contact = lazy(() => retry(() => import('./pages/Contact')));
const Footer = lazy(() => retry(() => import('./components/Footer')));

const App = () => {
  console.log('%cMade with ❤ by Hit Patel', 'color: black; background: grey; font-size: 15px; padding: 5px 15px; border-radius: 6px');

  const pages = [
    {
      pageLink: '/',
      view: Home
    },
    {
      pageLink: '/contact',
      view: Contact
    }
  ];

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          {pages.map((page, index) => {
            return (
              <Route
                path={page.pageLink}
                element={<page.view />}
                key={index}
              />
            );
          })}
          <Route exact path="/" element={<Navigate to ="/" />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
