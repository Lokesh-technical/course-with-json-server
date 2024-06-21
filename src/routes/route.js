// import BaseLayout from './layout/index';
// import React from 'react';
// import Login from './components/Login/Login';
// import Home from './components/Home';
// import Readmore from './components/Readmore';
// import SignupForm from './components/SignupForm/SignupForm';

// const routes = [
//     {
//         path: '',
//         element: <BaseLayout />,
//         children: [
//           {
//             path: '/',
//             element: <Login />
//           },
//           {
//             path: '/login',
//             element: <Login />
//           },
//           {
//             path: '/Signup',
//             element: <SignupForm />
//           },
//           {
//             path: '/home',
//             element: <Home />
//           },
//           {
//             path: '/readmore/:id', // Dynamic route parameter ':id'
//             element: <Readmore />
//           },
//         ]
//       },
// ]

// export default routes;


// // routes.js
// import React from 'react';
// import Login from './components/Login/Login';
// import Home from './components/Home';
// import Readmore from './components/Readmore';
// import SignupForm from './components/SignupForm/SignupForm';

// const routes = [
//   {
//     path: '/',
//     element: <Login />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <SignupForm />
//   },
//   {
//     path: '/home',
//     element: <Home />
//   },
//   {
//     path: '/readmore/:id', // Dynamic route parameter ':id'
//     element: <Readmore />
//   }
// ];

// export default routes;




// import React from 'react';
// import Login from '../components/Login/Login';
// import Home from '../components/Home';
// import Readmore from '../components/Readmore';
// import SignupForm from '../components/SignupForm/SignupForm';
// import ProtectedRoute from './ProtectedRoute';

// const routes = [
//   {
//     path: '/',
//     element: <Login />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <SignupForm />
//   },
//   {
//     path: '/home',
//     element: <ProtectedRoute element={<Home />} />
//   },
//   {
//     path: '/readmore/:id',
//     element: <ProtectedRoute element={<Readmore />} />
//   }
// ];

// export default routes;



// import React from 'react';
// import Login from '../components/Login/Login';
// import Home from '../components/Home';
// import Readmore from '../components/Readmore';
// import SignupForm from '../components/SignupForm/SignupForm';
// import ProtectedRoute from './ProtectedRoute';
// import BaseLayout from '../layout/index';

// const routes = [
//   {
//     path: '/',
//     element: <Login />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <SignupForm />
//   },
//   {
//     path: '/home',
//     element: (
//       <ProtectedRoute element={<BaseLayout />}>
//         <Home />
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: '/readmore/:id',
//     element: (
//       <ProtectedRoute element={<BaseLayout />}>
//         <Readmore />
//       </ProtectedRoute>
//     )
//   }
// ];

// export default routes;



// import React from 'react';
// import Login from '../components/Login/Login';
// import Home from '../components/Home';
// import Readmore from '../components/Readmore';
// import SignupForm from '../components/SignupForm/SignupForm';
// import ProtectedRoute from './ProtectedRoute';

// const routes = [
//   {
//     path: '/',
//     element: <Login />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <SignupForm />
//   },
//   {
//     path: '/home',
//     element: <ProtectedRoute element={<Home />} />
//   },
//   {
//     path: '/readmore/:id',
//     element: <ProtectedRoute element={<Readmore />} />
//   }
// ];

// export default routes;



import React from 'react';
import Login from '../components/Login/Login.js';
import Home from '../components/Home.js';
import Readmore from '../components/Readmore.js';
import SignupForm from '../components/SignupForm/SignupForm.js';
import ProtectedRoute from './ProtectedRoute.js';

const routes = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignupForm />
  },
  {
    path: '/home',
    element: <ProtectedRoute element={<Home />} />
  },
  {
    path: '/readmore/:id',
    element: <ProtectedRoute element={<Readmore />} />
  }
];

export default routes;

