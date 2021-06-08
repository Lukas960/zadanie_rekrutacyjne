import React from 'react';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import Start from './components/Start';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App" style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Start />
      </div>
    </Provider>
  );
}

export default App;
