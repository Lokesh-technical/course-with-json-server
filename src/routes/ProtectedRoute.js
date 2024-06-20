// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ element }) => {
//   const { currentUser } = useSelector(state => state.auth);
//   console.log("currentUserid------->", currentUser.id);

//   return currentUser.id ? element : <Navigate to="/login" />;
// };

// export default ProtectedRoute;



// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrentUser } from '../features/authSlice';

// const ProtectedRoute = ({ element }) => {
//   const dispatch = useDispatch();
//   const { currentUser, isAuthenticated } = useSelector(state => state.auth);

//   useEffect(() => {
//     dispatch(fetchCurrentUser());
//   }, [dispatch]);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return element;
// };

// export default ProtectedRoute;



// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrentUser } from '../features/authSlice';

// const ProtectedRoute = ({ element }) => {
//   const dispatch = useDispatch();
//   const { currentUser, isAuthenticated } = useSelector(state => state.auth);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       dispatch(fetchCurrentUser());
//     }
//   }, [dispatch, isAuthenticated]);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return element;
// };

// export default ProtectedRoute;



// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrentUser } from '../features/authSlice';

// const ProtectedRoute = ({ element }) => {
//   const dispatch = useDispatch();
//   const { currentUser, isAuthenticated } = useSelector(state => state.auth);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       dispatch(fetchCurrentUser());
//     }
//   }, [dispatch, isAuthenticated]);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return element;
// };

// export default ProtectedRoute;



// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrentUser } from '../features/authSlice';

// const ProtectedRoute = ({ element }) => {
//   const dispatch = useDispatch();
//   const { currentUser, isAuthenticated } = useSelector(state => state.auth);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       dispatch(fetchCurrentUser());
//     }
//   }, [dispatch, isAuthenticated]);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return element;
// };

// export default ProtectedRoute;


import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrentUser } from '../features/authSlice';

const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();
  const { currentUser, isAuthenticated } = useSelector(state => state.auth);

  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user && !isAuthenticated) { 
    return <Navigate to="/login" />;
  }
  return element;
};

export default ProtectedRoute;




// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrentUser } from '../features/authSlice';

// const ProtectedRoute = ({ element }) => {
//   const dispatch = useDispatch();
//   const { currentUser, isAuthenticated } = useSelector(state => state.auth);
//   console.log("isAuthenticated", isAuthenticated);

//   const user = localStorage.getItem('currentUser');

//   useEffect(() => {
//     if (!user) {
//       dispatch(fetchCurrentUser());
//     }
//   }, [dispatch, user]);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return element;
// };

// export default ProtectedRoute;




