// import { useRoutes } from 'react-router-dom';
// import router from "./route"
// import './App.css';


// function App() {
//   const content = useRoutes(router);

//   return (
//    <div>
//     {content}
//    </div>
//   );
// }

// export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom';
// import router from './routes/route'; // Ensure your routes configuration is imported correctly
// import BaseLayout from './layout/index'; // Adjust the path if needed
// import './App.css';

// function App() {
//   const content = useRoutes(router);

//   return (
//     <div>
//       {/* <BaseLayout> */}
//         {content}
//       {/* </BaseLayout> */}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom';
// import routes from './routes/route'; 
// import './App.css';

// function App() {
//   const content = useRoutes(routes);

//   return (
//     <div>
//       {content}
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom';
// import routes from './routes/route'; // Ensure your routes configuration is imported correctly
// import './App.css';

// function App() {
//   const content = useRoutes(routes);

//   return (
//     <Router>
//       {content}
//     </Router>
//   );
// }

// export default App;



// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from './routes/route'; 
import './App.css';
import { logout } from './features/authSlice'; 

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let logoutTimer;

    const resetLogoutTimer = () => {
      if (logoutTimer) clearTimeout(logoutTimer);

      logoutTimer = setTimeout(() => {
        dispatch(logout());
        navigate('/login');
      }, 0.5 * 60 * 1000); 
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll'];

    activityEvents.forEach(event => {
      window.addEventListener(event, resetLogoutTimer);
    });

    resetLogoutTimer(); 

    return () => {
      clearTimeout(logoutTimer);
      activityEvents.forEach(event => {
        window.removeEventListener(event, resetLogoutTimer);
      });
    };
  }, [dispatch, navigate]);

  const content = useRoutes(routes);

  return (
    <div>
      {content}
    </div>
  );
}

export default App;


