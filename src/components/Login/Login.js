// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { loginUser } from '../features/authSlice';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const dispatch = useDispatch();
//     const { error, isAuthenticated  } = useSelector(state => state.auth)
//     const [formData , setFormData] = useState({
//         email: "",
//         password: ""
//     })

//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("formData", formData);
//         dispatch(loginUser(formData));
//       };

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//           ...prevState,
//           [name]: value,
//         }));
//       };

//       if(isAuthenticated) {
//         navigate("/home")
//       }

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//             <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//                 <img className="w-12 h-12 " src="heardpng.pg" alt="logo" />
//                 LP    
//             </a>
//             <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                 <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                     <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                         Sign in to your account
//                     </h1>
//                     <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//                         <div>
//                             <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                             <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//                         </div>
//                         <div>
//                             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                             <input type="password" name="password" id="password" placeholder="••••••••" value={formData.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//                         </div>
//                         <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
//                         {error && <div className="error">{error}</div>}
//                         <p className="text-white">if you din't have any account go <a className="text-lg text-yellow-300" href="/Signin">SignUp</a></p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Login



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../features/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; // Import icons
// import './Login.css'; 

// const Login = () => {
//   const dispatch = useDispatch();
//   const { error, isAuthenticated } = useSelector(state => state.auth);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(formData));
//   };

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   if (isAuthenticated) {
//     navigate("/home");
//   }

//   return (
//     <section className="form-container">
//       <div className="signup-form">
//         <div className="form-group">
//           <label htmlFor="email">Your email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="input-field"
//             placeholder="name@company.com"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"} // Toggle between text and password
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="input-field"
//               placeholder="••••••••"
//               required
//             />
//             <div className="toggle-password" onClick={togglePasswordVisibility}>
//               {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
//             </div>
//           </div>
//         </div>
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="submit-button"
//         >
//           Sign in
//         </button>
//         {error && <div className="error">{error}</div>}
//         <p className="signup-link">If you don't have an account, <a href="/signup">Sign Up</a></p>
//       </div>
//     </section>
//   );
// };

// export default Login;



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../features/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; // Import icons
// import './Login.css'; 

// const Login = () => {
//   const dispatch = useDispatch();
//   const { error, isAuthenticated } = useSelector(state => state.auth);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/home");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(formData));
//   };

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <section className="form-container">
//       <div className="signup-form">
//         <div className="form-group">
//           <label htmlFor="email">Your email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="input-field"
//             placeholder="name@company.com"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"} // Toggle between text and password
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="input-field"
//               placeholder="••••••••"
//               required
//             />
//             <div className="toggle-password" onClick={togglePasswordVisibility}>
//               {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
//             </div>
//           </div>
//         </div>
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="submit-button"
//         >
//           Sign in
//         </button>
//         {error && <div className="error">{error}</div>}
//         <p className="signup-link">If you don't have an account, <a href="/signup">Sign Up</a></p>
//       </div>
//     </section>
//   );
// };

// export default Login;




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../features/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; // Import icons
// import './Login.css'; 

// const Login = () => {
//   const dispatch = useDispatch();
//   const { error, isAuthenticated } = useSelector(state => state.auth);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/home");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(formData));
//   };

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <section className="form-container">
//       <div className="signup-form">
//         <div className="form-group">
//           <label htmlFor="email">Your email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="input-field"
//             placeholder="name@company.com"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"} // Toggle between text and password
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="input-field"
//               placeholder="••••••••"
//               required
//             />
//             <div className="toggle-password" onClick={togglePasswordVisibility}>
//               {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
//             </div>
//           </div>
//         </div>
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="submit-button"
//         >
//           Sign in
//         </button>
//         {error && <div className="error">{error}</div>}
//         <p className="signup-link">If you don't have an account, <a href="/signup">Sign Up</a></p>
//       </div>
//     </section>
//   );
// };

// export default Login;




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/authSlice.js';
import { useNavigate } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; 
import './Login.css'; 

const Login = () => {
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector(state => state.auth);
  console.log("isAuthenticated=====>", isAuthenticated);
   const user = JSON.parse(localStorage.getItem('currentUser'));
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
 
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/home");
  //   }
  // }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then(()=>  navigate("/home"));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="form-container">
      <div className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              placeholder="••••••••"
              required
            />
            <div className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="submit-button"
        >
          Sign in
        </button>
        {error && <div className="error">{error}</div>}
        <p className="signup-link">If you don't have an account, <a href="/signup">Sign Up</a></p>
      </div>
    </section>
  );
};

export default Login;
