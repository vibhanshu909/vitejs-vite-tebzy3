import { useState } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

const Home = () => (
  <>
    <a href="/login">Login</a>
    <h1> Home</h1>
  </>
);
const Login = () => <h1> Login</h1>;

const routes = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      {/* <RouterProvider router={routes} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
