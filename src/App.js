import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';
import { technologiesDataLoader } from './loaders/technologiesDataLoader';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: technologiesDataLoader,
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: technologiesDataLoader,
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
