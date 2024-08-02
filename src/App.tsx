import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Studio from './pages/Studio';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Studio />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
