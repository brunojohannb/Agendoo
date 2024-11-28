import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;

