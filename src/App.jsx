import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductLandingPage from './components/ProductLandingPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ProductLandingPage />} />
            </Routes>
        </div>
    );
}

export default App;
