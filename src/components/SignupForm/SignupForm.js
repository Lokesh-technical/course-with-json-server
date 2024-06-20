// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../features/authSlice";
// import { useNavigate } from "react-router-dom";

// const Signin = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSignin = (e) => {
//     e.preventDefault();

//     dispatch(addUser({ name, email, password, role }));
//     navigate("/");
//   };

//   return (
//     <section className="bg-gray-50 ">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
//               Sign in to your account
//             </h1>
//             <form className="space-y-4 md:space-y-6" onSubmit={handleSignin}>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 text-sm font-medium text-gray-900 "
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
//                   placeholder="Your Name"
//                   value={name}
//                   onChange={handleNameChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="role"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your Role
//                 </label>
//                 <select
//                   name="role"
//                   id="role"
//                   value={role}
//                   onChange={handleRoleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
//                   required
//                 >
//                   <option value="">Select Role</option>
//                   <option value="Teacher">Teacher</option>
//                   <option value="Student">Student</option>
//                 </select>
//               </div>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
//                   placeholder="Email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="••••••••"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   required
//                 />
//               </div>
//               <button className="bg-gray-50 px-2 rounded-lg font-bold border border-black-600">
//                 Sign in
//               </button>
//               <p className="">if you have already account go <a className="text-lg text-blue-900" href="/">Login</a></p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signin;


// SignupForm.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./SignupForm.css";
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = data => {
    console.log(data);
    dispatch(addUser(data)).then(()=> navigate("/login"));
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select id="role" {...register('role', { required: 'Role is required' })}>
            <option value="">Select a role</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
          {errors.role && <p className="error">{errors.role.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' }
              })}
            />
            <div type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}
          <p className="signup-link">If you have an account, <a href="/login">Login</a></p>
        </div>

        <Button />
      </form>
    </div>
  );
};

export default SignupForm;
