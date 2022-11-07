import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import VideoDetail from './pages/VideoDetail';
import Videos from './pages/Videos';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'videos', element: <Videos /> },
      { path: '/result', element: <Search /> },
      { path: 'videos/:videoId', element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
