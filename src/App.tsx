import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    index: true,
    element: (
      <>
        <a href="/login">Login</a>
        <h1> Home</h1>
      </>
    ),
  },
  {
    path: '/login',
    element: <h1> Login</h1>,
  },
  {},
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
