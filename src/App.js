
import { RouterProvider } from 'react-router-dom';
import './App.css';
import SecondRouter from './Route/Second';



function App() {
  return (
    <div>
      <RouterProvider router={SecondRouter}></RouterProvider>
    </div>
  );
}

export default App;
