// // features/counterSlice.js

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   user: [],
//   // courses: [{title: "React js", description: "Learn react js within 10 min", image: "heardpng.png"},{title: "Python", description: "Learn react js within 10 min", image: "heardpng.png"}],
//   isAuthenticated: false,
//   error: null, 
//   currantUser: {
//     role: null,
//     emailId: null
//   }
// };

//  const AuthSlice =  createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     addUser:  (state, action) => {
//       const {name,  email, password , role} = action.payload;
//       const newUser = {
//         id: nanoid(),
//         name: name,
//         email: email,
//         password: password,
//         role: role,
//       };
//       state.user.push(newUser);
//     },
  
//   login: (state, action) => {
//     const { email, password } = action.payload;
//     const user = state.user.find(user => user.email === email && user.password === password);
//     if (user) {
//       state.isAuthenticated = true;
//       state.error = null;
//       state.currantUser.role = user.role
//       state.currantUser.emailId = user.email
//     } else {
//       state.isAuthenticated = false;
//       state.error = "Invalid email or password";
//       state.currantUser.role = null
//       state.currantUser.emailId = null
//     }
//   },
//   logout: (state, action) => {
//     state.isAuthenticated = false;
//     state.currantUser.role = null
//     state.currantUser.emailId = null
//   }
// },
// });

// export const { addUser , login, logout} = AuthSlice.actions;

// export default AuthSlice.reducer;


// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   user: [],
//   isAuthenticated: false,
//   error: null, 
//   currantUser: {
//     role: null,
//     emailId: null,
//     subscriptions: [] // Add subscriptions array
//   }
// };

// const AuthSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     addUser: (state, action) => {
//       const { name, email, password, role } = action.payload;
//       const newUser = {
//         id: nanoid(),
//         name,
//         email,
//         password,
//         role,
//         subscriptions: [] // Initialize subscriptions array
//       };
//       state.user.push(newUser);
//     },
//     login: (state, action) => {
//       const { email, password } = action.payload;
//       const user = state.user.find(user => user.email === email && user.password === password);
//       if (user) {
//         state.isAuthenticated = true;
//         state.error = null;
//         state.currantUser = {
//           role: user.role,
//           emailId: user.email,
//           subscriptions: user.subscriptions
//         };
//       } else {
//         state.isAuthenticated = false;
//         state.error = "Invalid email or password";
//         state.currantUser = {
//           role: null,
//           emailId: null,
//           subscriptions: []
//         };
//       }
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.currantUser = {
//         role: null,
//         emailId: null,
//         subscriptions: []
//       };
//     },
//     subscribeCourse: (state, action) => {
//       const courseId = action.payload;
//       console.log("courseId", state.user);
//       const user = state.user.find(user => user.email === state.currantUser.emailId);
//       console.log("user-------->", state.user);
//       if (user && !user.subscriptions.includes(courseId)) {
//         console.log("skhjzofjofj");
//         user.subscriptions.push(courseId);
//         state.currantUser.subscriptions.push(courseId);
//       }
//     }
//   },
// });

// export const { addUser, login, logout, subscribeCourse } = AuthSlice.actions;

// export default AuthSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = "http://localhost:8000/users"; // Update with your json-server URL

// const initialState = {
//   user: [],
//   isAuthenticated: false,
//   error: null,
//   currentUser: {
//     role: null,
//     emailId: null,
//     subscriptions: [],
//   },
// };

// // Async thunks for interacting with the API
// export const fetchUsers = createAsyncThunk('auth/fetchUsers', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// export const addUser = createAsyncThunk('auth/addUser', async (user) => {
//   const response = await axios.post(API_URL, user);
//   return response.data;
// });

// export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
//   const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
//   console.log("response=========>", response);
//   if (response.data.length === 0) {
//     alert("hellloo")
//     throw new Error('Invalid email or password');
//   }
//   return response.data[0];
// });

// export const subscribeCourse = createAsyncThunk('auth/subscribeCourse', async ({ email, courseId }) => {
//   const response = await axios.get(`${API_URL}?email=${email}`);
//   const user = response.data[0];
//   if (!user.subscriptions.includes(courseId)) {
//     user.subscriptions.push(courseId);
//     await axios.put(`${API_URL}/${user.id}`, user);
//   }
//   return user;
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.currentUser.role = null;
//       state.currentUser.emailId = null;
//       state.currentUser.subscriptions = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.user = action.payload;
//       })
//       .addCase(addUser.fulfilled, (state, action) => {
//         state.user.push(action.payload);
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         const user = action.payload;
//         state.isAuthenticated = true;
//         state.error = null;
//         state.currentUser.role = user.role;
//         state.currentUser.emailId = user.email;
//         state.currentUser.subscriptions = user.subscriptions;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isAuthenticated = false;
//         state.error = action.error.message;
//         state.currentUser.role = null;
//         state.currentUser.emailId = null;
//         state.currentUser.subscriptions = [];
//       })
//       .addCase(subscribeCourse.fulfilled, (state, action) => {
//         const user = action.payload;
//         state.currentUser.subscriptions = user.subscriptions;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = "http://localhost:8000/users";

// const initialState = {
//   user: [],
//   isAuthenticated: false,
//   error: null,
//   currentUser: {
//     id: null,
//     role: null,
//     email: null,
//     subscriptions: [],
//   },
// };

// export const fetchUsers = createAsyncThunk('auth/fetchUsers', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });


// export const addUser = createAsyncThunk('auth/addUser', async (user) => {
//   const response = await axios.post(API_URL, user);
//   return response.data;
// });

// export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
//   const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
//   if (response.data.length === 0) {
//     throw new Error('Invalid email or password');
//   }
//   return response.data[0];
// });

// export const subscribeCourse = createAsyncThunk('auth/subscribeCourse', async ({ email, courseId }) => {
//   const response = await axios.get(`${API_URL}?email=${email}`);
//   const user = response.data[0];
//   if (!user.subscriptions.includes(courseId)) {
//     user.subscriptions.push(courseId);
//     await axios.put(`${API_URL}/${user.id}`, user);
//   }
//   return user;
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.currentUser = {
//         userid: null, 
//         role: null,
//         email: null,
//         subscriptions: [],
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.user = action.payload;
//       })
//       .addCase(addUser.fulfilled, (state, action) => {
//         state.user.push(action.payload);
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         const user = action.payload;
//         state.isAuthenticated = true;
//         state.error = null;
//         state.currentUser = {
//           userid: user.id ,
//           role: user.role,
//           email: user.email,
//           subscriptions: user.subscriptions,
//         };
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isAuthenticated = false;
//         state.error = action.error.message;
//         state.currentUser = {
//           userid: null, 
//           role: null,
//           email: null,
//           subscriptions: [],
//         };
//       })
//       .addCase(subscribeCourse.fulfilled, (state, action) => {
//         state.currentUser.subscriptions = action.payload.subscriptions;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = "http://localhost:8000/users";

// const initialState = {
//   user: [],
//   isAuthenticated: false,
//   error: null,
//   currentUser: {
//     id: null,
//     role: null,
//     email: null,
//     subscriptions: [],
//   },
// };

// export const fetchUsers = createAsyncThunk('auth/fetchUsers', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// export const updateUserCourses = createAsyncThunk(
//   'auth/updateUserCourses',
//   async ({ studentId, courseId }) => {
//     const response = await axios.get(`${API_URL}/${studentId}`);
//     const user = response.data;
//     if (!user.courses.includes(courseId)) {
//       user.courses.push(courseId);
//     }
//     const updatedResponse = await axios.put(`${API_URL}/${studentId}`, user);
//     return updatedResponse.data;
//   }
// );

// export const addUser = createAsyncThunk('auth/addUser', async (user) => {
//   const response = await axios.post(API_URL, user);
//   return response.data;
// });

// export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
//   const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
//   if (response.data.length === 0) {
//     throw new Error('Invalid email or password');
//   }
//   return response.data[0];
// });

// export const subscribeCourse = createAsyncThunk('auth/subscribeCourse', async ({ email, courseId }) => {
//   const response = await axios.get(`${API_URL}?email=${email}`);
//   const user = response.data[0];
//   if (!user.subscriptions.includes(courseId)) {
//     user.subscriptions.push(courseId);
//     await axios.put(`${API_URL}/${user.id}`, user);
//   }
//   return user;
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.currentUser = {
//         userid: null, 
//         role: null,
//         email: null,
//         subscriptions: [],
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.user = action.payload;
//       })
//       .addCase(addUser.fulfilled, (state, action) => {
//         state.user.push(action.payload);
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         const user = action.payload;
//         state.isAuthenticated = true;
//         state.error = null;
//         state.currentUser = {
//           userid: user.id,
//           role: user.role,
//           email: user.email,
//           subscriptions: user.subscriptions,
//         };
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isAuthenticated = false;
//         state.error = action.error.message;
//         state.currentUser = {
//           userid: null, 
//           role: null,
//           email: null,
//           subscriptions: [],
//         };
//       })
//       .addCase(subscribeCourse.fulfilled, (state, action) => {
//         state.currentUser.subscriptions = action.payload.subscriptions;
//       })
//       .addCase(updateUserCourses.fulfilled, (state, action) => {
//         const updatedUser = action.payload;
//         const userIndex = state.user.findIndex(user => user.id === updatedUser.id);
//         if (userIndex !== -1) {
//           state.user[userIndex] = updatedUser;
//         }
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://localhost:8000/users";

const initialState = {
  users: [],
  isAuthenticated: false,
  error: null,
  currentUser: {
    id: null,
    role: null,
    email: null,
    subscriptions: [],
  },
};

// export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async () => {
//   const response = await axios.get('http://localhost:8000/currentUser');
//   return response.data;
// });

// export const fetchUsers = createAsyncThunk('auth/fetchUsers', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async () => {
//   const response = await axios.get('http://localhost:8000/currentuser');
//   console.log("response==>", response.data);
//   return response.data;
// });

export const fetchUsers = createAsyncThunk('auth/fetchUsers', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const updateUserCourses = createAsyncThunk(
  'auth/updateUserCourses',
  async ({ studentId, courseId }) => {
    const response = await axios.get(`${API_URL}/${studentId}`);
    const user = response.data;
    if (!user.courses.includes(courseId)) {
      user.courses.push(courseId);
    }
    const updatedResponse = await axios.put(`${API_URL}/${studentId}`, user);
    return updatedResponse.data;
  }
);

export const addUser = createAsyncThunk('auth/addUser', async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
  const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
  if (response.data.length === 0) {
    throw new Error('Invalid email or password');
  }
  const user = response.data[0]
  // await axios.post('http://localhost:8000/currantuser', user); // Post the current user data
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
});

export const subscribeCourse = createAsyncThunk('auth/subscribeCourse', async ({ email, courseId }) => {
  const response = await axios.get(`${API_URL}?email=${email}`);
  const user = response.data[0];
  if (!user.subscriptions.includes(courseId)) {
    user.subscriptions.push(courseId);
    await axios.put(`${API_URL}/${user.id}`, user);
  }
  return user;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = {
        id: null, 
        role: null,
        email: null,
        subscriptions: [],
      };
      localStorage.removeItem('currentUser');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.currentUser = {
          id: user.id,
          role: user.role,
          email: user.email,
          subscriptions: user.subscriptions,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
        state.currentUser = {
          id: null, 
          role: null,
          email: null,
          subscriptions: [],
        };
      })
      .addCase(subscribeCourse.fulfilled, (state, action) => {
        state.currentUser.subscriptions = action.payload.subscriptions;
      })
      .addCase(updateUserCourses.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const userIndex = state.users.findIndex(user => user.id === updatedUser.id);
        if (userIndex !== -1) {
          state.users[userIndex] = updatedUser;
        }
      })
      
  }
  })

export const { logout } = authSlice.actions;

export default authSlice.reducer;
