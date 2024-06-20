// features/counterSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   courses: [
    
//   ],
//   isAuthenticated: false,
//   error: null, 
// };

// const courseSlice =  createSlice({
//   name: "courses",
//   initialState,
//   reducers: {
//     addCourse:  (state ,action) => {
//       const {id ,title,  description, image} = action.payload;
//       const newCourse = {
//         id: id,
//         title: title,
//         description: description,
//         image: image,
//         subscribe: false
//       };
//       state.courses.push(newCourse);
//     },
//     deleteCourse: (state, action) => {
//       state.courses = state.courses.filter((course) => course.id !== action.payload.id);
//     },
//     editCourse: (state, action) => {
//       const { id, title, description, image } = action.payload;
//       const index = state.courses.findIndex(course => course.id === id);
//       if (index !== -1) {
//         state.courses[index] = { id, title, description, image };
//       }
//     },
//     subscribeCourse: (state, action)=> {
//       const subscribeData = state.courses.find((course) => course.id === action.payload);
//       subscribeData.subscribe = true;
//     }
// },
// });

// export const { addCourse, deleteCourse, editCourse, subscribeCourse } = courseSlice.actions;

// export default courseSlice.reducer;




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "http://localhost:8000/courses"; // Update with your API URL

// const initialState = {
//   courses: [],
//   isLoading: false,
//   error: null,
// };

// export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// export const addCourse = createAsyncThunk("courses/addCourse", async (courseData) => {
//   const response = await axios.post(API_URL, courseData);
//   return response.data;
// });

// export const editCourse = createAsyncThunk("courses/editCourse", async (courseData) => {
//   const { id, ...data } = courseData;
//   const response = await axios.put(`${API_URL}/${id}`, data);
//   return response.data;
// });

// export const deleteCourse = createAsyncThunk("courses/deleteCourse", async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
//   return id;
// });

// export const subscribeCourse = createAsyncThunk(
//   "courses/subscribeCourse",
//   async ({ userId, courseId }) => {
//     const response = await axios.get(`${API_URL}/${courseId}`);
//     const course = response.data;
//     if (!course.subscribers.includes(userId)) {
//       course.subscribers.push(userId);
//       await axios.put(`${API_URL}/${courseId}`, course);
//     }
//     return courseId;
//   }
// );

// const courseSlice = createSlice({
//   name: "courses",
//   initialState,
//   reducers: {
//     updateCourseSubscription: (state, action) => {
//       const courseId = action.payload;
//       const course = state.courses.find((course) => course.id === courseId);
//       if (course) {
//         course.subscribe = true; // Update local state or UI if needed
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCourses.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchCourses.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.courses = action.payload;
//       })
//       .addCase(fetchCourses.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(addCourse.fulfilled, (state, action) => {
//         state.courses.push(action.payload);
//       })
//       .addCase(editCourse.fulfilled, (state, action) => {
//         const updatedCourse = action.payload;
//         const index = state.courses.findIndex((course) => course.id === updatedCourse.id);
//         if (index !== -1) {
//           state.courses[index] = updatedCourse;
//         }
//       })
//       .addCase(deleteCourse.fulfilled, (state, action) => {
//         state.courses = state.courses.filter((course) => course.id !== action.payload);
//       })
//       .addCase(subscribeCourse.fulfilled, (state, action) => {
//         const courseId = action.payload;
//         const course = state.courses.find((course) => course.id === courseId);
//         if (course && !course.subscribed) {
//           course.subscribed = true; // Update local state or UI if needed
//         }
//       });
//   },
// });

// export const { updateCourseSubscription } = courseSlice.actions;

// export default courseSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = "http://localhost:8000/courses";

// const initialState = {
//   courses: [],
//   error: null,
// };

// export const fetchCourseById = createAsyncThunk(
//   'courses/fetchCourseById',
//   async (id) => {
//     try {
//       const response = await axios.get(`${API_URL}/${id}`);
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// export const addCourse = createAsyncThunk('courses/addCourse', async (course) => {
//   const response = await axios.post(API_URL, course);
//   return response.data;
// });

// export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
//   return id;
// });


// export const editCourse = createAsyncThunk('courses/editCourse', async ({ id, course }, thunkAPI) => {
//   console.log("id , course", id, course);
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, course);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue({ error: error.message });
//   }
// });

// export const updateCourseStudents = createAsyncThunk(
//   'courses/updateCourseStudents',
//   async ({ courseId, selectedStudents }) => {
//     const response = await axios.put(`${API_URL}/${courseId}/studentIds`, { selectedStudents });
//     return response.data;
//   }
// );


// const courseSlice = createSlice({
//   name: "courses",
//   initialState,
//   reducers: {
//     updateCourseSubscription: (state, action) => {
//       const courseId = action.payload;
//       const course = state.courses.find(course => course.id === courseId);
//       if (course) {
//         course.subscribe = true;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCourses.fulfilled, (state, action) => {
//         state.courses = action.payload;
//       })
//       .addCase(addCourse.fulfilled, (state, action) => {
//         state.courses.push(action.payload);
//       })
//       .addCase(deleteCourse.fulfilled, (state, action) => {
//         state.courses = state.courses.filter(course => course.id !== action.payload);
//       })
//       .addCase(editCourse.fulfilled, (state, action) => {
//         const updatedCourse = action.payload;
//         const index = state.courses.findIndex(course => course.id === updatedCourse.id);
//         if (index !== -1) {
//           state.courses[index] = updatedCourse;
//         }
//       });
//   },
// });

// export const { updateCourseSubscription } = courseSlice.actions;

// export default courseSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = "http://localhost:8000/courses";

// const initialState = {
//   courses: [],
//   error: null,
// };

// export const fetchCourseById = createAsyncThunk(
//   'courses/fetchCourseById',
//   async (id) => {
//     try {
//       const response = await axios.get(`${API_URL}/${id}`);
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// export const addCourse = createAsyncThunk('courses/addCourse', async (course) => {
//   const response = await axios.post(API_URL, course);
//   return response.data;
// });

// export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
//   return id;
// });


// export const editCourse = createAsyncThunk('courses/editCourse', async ({ id, course }, thunkAPI) => {
//   console.log("id , course", id, course);
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, course);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue({ error: error.message });
//   }
// });

// export const updateCourseStudents = createAsyncThunk(
//   'courses/updateCourseStudents',
//   async ({ courseId, selectedStudents }) => {
//     const response = await axios.put(`${API_URL}/${courseId}`, { studentIds: selectedStudents });
//     return { courseId, studentIds: selectedStudents }; // Return both courseId and updated studentIds
//   }
// );


// const courseSlice = createSlice({
//   name: "courses",
//   initialState,
//   reducers: {
//     updateCourseSubscription: (state, action) => {
//       const courseId = action.payload;
//       const course = state.courses.find(course => course.id === courseId);
//       if (course) {
//         course.subscribe = true;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCourses.fulfilled, (state, action) => {
//         state.courses = action.payload;
//       })
//       .addCase(addCourse.fulfilled, (state, action) => {
//         state.courses.push(action.payload);
//       })
//       .addCase(deleteCourse.fulfilled, (state, action) => {
//         state.courses = state.courses.filter(course => course.id !== action.payload);
//       })
//       .addCase(editCourse.fulfilled, (state, action) => {
//         const updatedCourse = action.payload;
//         const index = state.courses.findIndex(course => course.id === updatedCourse.id);
//         if (index !== -1) {
//           state.courses[index] = updatedCourse;
//         }
//       })
//       .addCase(updateCourseStudents.fulfilled, (state, action) => {
//         const updatedCourse = action.payload;
//         const index = state.courses.findIndex(course => course.id === updatedCourse.id);
//         if (index !== -1) {
//           state.courses[index] = updatedCourse;
//         }
//       });
//   },
// });

// export const { updateCourseSubscription } = courseSlice.actions;

// export default courseSlice.reducer;





import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/courses'; // replace with your API URL

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addCourse = createAsyncThunk('courses/addCourse', async (course) => {
  const response = await axios.post(API_URL, course);
  return response.data;
});

export const editCourse = createAsyncThunk('courses/editCourse', async ({ id, course }) => {
  const response = await axios.put(`${API_URL}/${id}`, course);
  return response.data;
});

export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const fetchCourseById = createAsyncThunk(
  'courses/fetchCourseById',
  async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const updateCourseStudents = createAsyncThunk(
  'courses/updateCourseStudents',
  async ({ courseId, selectedStudents }, { getState }) => {
    try {
      // Get the current state
      const state = getState();
      // Find the current course object by courseId
      const currentCourse = state.courses.courses.find(course => course.id === courseId);
      
      // Merge current student IDs with selected students
      const updatedStudentIds = [...new Set([...currentCourse.studentIds, ...selectedStudents])];

      // Create a new course object with updated studentIds
      const updatedCourse = {
        ...currentCourse,
        studentIds: updatedStudentIds
      };

      // Send the updated course object to the server
      const response = await axios.put(`${API_URL}/${courseId}`, updatedCourse);
      
      // Return response data
      return response.data;
    } catch (error) {
      // Handle errors gracefully
      console.error('Error updating course students:', error);
      throw error; // Throw the error to propagate it
    }
  }
);

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex(course => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(course => course.id !== action.payload);
      })
      .addCase(updateCourseStudents.fulfilled, (state, action) => {
        const { courseId, studentIds } = action.payload;
        const course = state.courses.find(course => course.id === courseId);
        if (course) {
          course.studentIds = studentIds;
        }
      });
  }
});

export default courseSlice.reducer;
