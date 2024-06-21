// /* eslint-disable no-unused-expressions */
// /* eslint-disable array-callback-return */
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Card from './card';
// import Header from './Header';
// import Modal from './modal';
// import Modal2 from './Modal2';


// const Home = () => {

//     const  role  = useSelector(state => state.auth.currantUser.role)
//     console.log("role==>", role);
//     const  course  = useSelector(state => state.courses)
//     const [modal , setModel] = useState(false)
//     const [editCourseData, setEditCourseData] = useState(null); 
//     const [modal2, setModal2] = useState(false);
//     const [deleteId, setDeleteId] = useState(null);

//     const handleDelete = (id) => {
//       setDeleteId(id); 
//       setModal2(true);
//     };

//     const handleEdit = e => {
//       const editCourseData = course.courses.find(p => p.id === e)
//       setEditCourseData(editCourseData);
//       setModel(true);
//   };

//     const handleModal = ()=> {
//       setModel(true)
//     }

//     const closeModal = () => {
//       setModel(false)
//       setModal2(false)
//       setDeleteId(null)
//     }

//   return (
//     <div>
//         {role === "instructor" ? 
//         <div>
//           <Header handleModal={handleModal}/>
//           <h1>Teacher</h1>
//          <div className='px-5 py-8 flex justify-between flex-wrap gap-10'>
//            {course.courses.map((e)=> 
//           <Card role={role} key={e.id} title={e.title} description={e.description} image={e.image} id={e.id} onDelete={handleDelete} onEdit={handleEdit}/>
//         )} 
//          </div>
//          {modal && <Modal closeModal={closeModal} editCourseData={editCourseData}/>}
//          {modal2 && <Modal2 id={deleteId} closeModal={closeModal}/>} 
//         </div>
//         : 
//         <div>
//           <Header />
//           <h1>Student</h1>
//           <div className='px-5 py-8 flex justify-between flex-wrap gap-10'>
//            {course.courses.map((e)=> 
//               <Card role={"Student"} key={e.id} title={e.title} description={e.description} image={e.image} id={e.id} onDelete={handleDelete} onEdit={handleEdit} subscribe={e.subscribe}/>
//             )} 
//           </div>
//         </div>
//         }
//     </div>
//   )
// }

// export default Home



// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Header from './Header/Header';
// import Modal2 from './Modal2';
// import Card from './card';
// import Modal from './modal';

// const Home = () => {
//   const role = useSelector(state => state.auth.currentUser.role);
//   const courses = useSelector(state => state.courses.courses);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [editCourseData, setEditCourseData] = useState(null);
//   const [deleteId, setDeleteId] = useState(null);

//   const handleDelete = id => {
//     setDeleteId(id);
//     setModalOpen(false);
//   };

//   const handleEdit = id => {
//     const course = courses.find(course => course.id === id);
//     setEditCourseData(course);
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//     setDeleteId(null);
//     setEditCourseData(null);
//   };

//   return (
//     <div>
//       <Header role={role} handleModal={() => setModalOpen(true)} />
//       <h1>{role}</h1>
//       <div className="px-5 py-8 flex justify-between flex-wrap gap-10">
//         {courses.map(course => (
//           <Card
//             key={course.id}
//             role={role}
//             title={course.title}
//             description={course.description}
//             image={course.image}
//             id={course.id}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//             subscribe={course.subscribe}
//           />
//         ))}
//       </div>
//       {modalOpen && (
//         <Modal closeModal={handleModalClose} editCourseData={editCourseData} />
//       )}
//       {deleteId && (
//         <Modal2 id={deleteId} closeModal={handleModalClose} />
//       )}
//     </div>
//   );
// };

// export default Home;





// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Card from './card';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteCourse(id));
//   };

//   const handleEdit = (id) => {
//     const courseToEdit = courses.find(course => course.id === id);
//     // Open edit modal or form and pass courseToEdit
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold my-5">Course List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map(course => (
//           <Card
//             key={course.id}
//             id={course.id}
//             title={course.title}
//             description={course.description}
//             image={course.image}
//             role={currentUser.role}
//             subscribe={course.subscribe}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//             students={user.filter(u => u.role === 'student')}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;







// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header'
// import Card from './card';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteCourse(id));
//   };

//   const handleEdit = (id) => {
//     const courseToEdit = courses.find(course => course.id === id);
//     // Open edit modal or form and pass courseToEdit
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map(course => (
//             <Card
//               key={course.id}
//               id={course.id}
//               title={course.title}
//               description={course.description}
//               image={course.image}
//               role={currentUser.role}
//               subscribe={course.subscribe}
//               onDelete={handleDelete}
//               onEdit={handleEdit}
//               students={user.filter(u => u.role === 'student')}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);
//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteCourse(id));
//   };

//   const handleEdit = (id) => {
//     const courseToEdit = courses.find(course => course.id === id);
//     setCourseToEdit(courseToEdit);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = (course) => {
//     if (courseToEdit) {
//       dispatch(editCourse({ ...course, id: courseToEdit.id }));
//       setCourseToEdit(null);
//     } else {
//       dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const openAddCourseModal = () => setIsAddCourseModalOpen(true);
//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map(course => (
//             <Card
//               key={course.id}
//               id={course.id}
//               title={course.title}
//               description={course.description}
//               image={course.image}
//               role={currentUser.role}
//               subscribe={course.subscribe}
//               onDelete={handleDelete}
//               onEdit={handleEdit}
//               students={user.filter(u => u.role === 'student')}
//             />
//           ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit} // Pass the course to edit
//         />
//       )}
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);
//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const courseToEdit = courses.find(course => course.id === id);
//     setCourseToEdit(courseToEdit);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = (course) => {
//     alert("dfj,hdkhdhhg")
//     if (courseToEdit) {
//       dispatch(editCourse({ ...course, id: courseToEdit.id }));
//       setCourseToEdit(null);
//     } else {
//       dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const openAddCourseModal = () => setIsAddCourseModalOpen(true);
//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map(course => (
//             <Card
//               key={course.id}
//               id={course.id}
//               title={course.title}
//               description={course.description}
//               image={course.image}
//               role={currentUser.role}
//               students={user.filter(u => u.role === 'student')}
//               onEdit={handleEdit} // Pass the handleEdit function
//             />
//           ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit} // Pass the course to edit
//         />
//       )}
//     </div>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);
//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     alert("sbnkwsgskskhsjhklsjhlsfjglsjfl")
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = (course) => {
//     if (courseToEdit) {
//       alert("sbnkwsgskskhsjhklsjhlsfjglsjfl jixofhlfjhlfdjgldjgldjgeldjgeljgl")
//       dispatch(editCourse({ ...course, id: courseToEdit.id }));
//       setCourseToEdit(null);
//     } else {
//       dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map(course => (
//             <Card
//               key={course.id}
//               id={course.id}
//               title={course.title}
//               description={course.description}
//               image={course.image}
//               role={currentUser.role}
//               students={user.filter(u => u.role === 'student')}
//               onEdit={handleEdit} // Pass the handleEdit function
//             />
//           ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit} // Pass the course to edit
//         />
//       )}
//     </div>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);
//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     alert("Editing Course with ID: " + id);
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = (course) => {
//     if (courseToEdit) {
//       alert("Updating Course with ID: " + courseToEdit.id);
//       dispatch(editCourse({ ...course, id: courseToEdit.id }));
//       setCourseToEdit(null);
//     } else {
//       alert("Adding New Course");
//       dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map(course => (
//             <Card
//               key={course.id}
//               id={course.id}
//               title={course.title}
//               description={course.description}
//               image={course.image}
//               role={currentUser.role}
//               students={user.filter(u => u.role === 'student')}
//               onEdit={handleEdit} // Pass the handleEdit function
//             />
//           ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit} // Pass the course to edit
//         />
//       )}
//     </div>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);
//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = async (course) => {
//     if (courseToEdit) {
//       await dispatch(editCourse({ id: courseToEdit.id, course }));
//       setCourseToEdit(null);
//     } else {
//       await dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map(course => (
//             <Card
//               key={course.id}
//               id={course.id}
//               title={course.title}
//               description={course.description}
//               image={course.image}
//               role={currentUser.role}
//               students={user.filter(u => u.role === 'student')}
//               onEdit={handleEdit} // Pass the handleEdit function
//             />
//           ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit} // Pass the course to edit
//         />
//       )}
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';
// import SelectStudentsModal from './Modals/SelectStudentsModal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);

//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);
//   const [courseToAssign, setCourseToAssign] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = async (course, id = null) => {
//     if (id) {
//       await dispatch(editCourse({ id, course }));
//       setCourseToEdit(null);
//     } else {
//       await dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deleteCourse(id));
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   const openSelectStudentsModal = (courseId) => {
//     setCourseToAssign(courseId);
//     setIsSelectStudentsModalOpen(true);
//   };

//   const closeSelectStudentsModal = () => {
//     setIsSelectStudentsModalOpen(false);
//     setCourseToAssign(null);
//   };

//   const handleSendLink = (selectedStudents) => {
//     console.log(`Course ID: ${courseToAssign}`);
//     console.log('Selected Students:', selectedStudents);
//     // Logic to send the course link to the selected students goes here
//     // For example, dispatch an action to update the state or send a request to the server
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses
//             .filter(course => course.userid === currentUser.userid)
//             .map(course => (
//               <Card
//                 key={course.id}
//                 id={course.id}
//                 title={course.title}
//                 description={course.description}
//                 image={course.image}
//                 role={currentUser.role}
//                 students={user.filter(u => u.role === 'student')}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onSelectStudents={openSelectStudentsModal}
//               />
//             ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit}
//           currentUserId={currentUser.userid}
//         />
//       )}
//       {isSelectStudentsModalOpen && (
//         <SelectStudentsModal
//           isOpen={isSelectStudentsModalOpen}
//           onClose={closeSelectStudentsModal}
//           students={user.filter(u => u.role === 'student')}
//           onSendLink={handleSendLink}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse } from '../features/courseSlice';
// import { fetchUsers, updateUserCourses } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';
// import SelectStudentsModal from './Modals/SelectStudentsModal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);
//   console.log("courses??", courses);

//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);
//   const [courseToAssign, setCourseToAssign] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = async (course, id = null) => {
//     if (id) {
//       await dispatch(editCourse({ id, course }));
//       setCourseToEdit(null);
//     } else {
//       await dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deleteCourse(id));
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   const openSelectStudentsModal = (courseId) => {
//     setCourseToAssign(courseId);
//     setIsSelectStudentsModalOpen(true);
//   };

//   const closeSelectStudentsModal = () => {
//     alert("jkhxvgjkb")
//     setIsSelectStudentsModalOpen(false);
//     setCourseToAssign(null);
//   };

//   const handleSendLink =  (selectedStudents) => {
//     console.log("selectedStudents....", selectedStudents);
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses
//             .filter(course => course.userid === currentUser.userid)
//             .map(course => (
//               console.log("course>>>>", course.studentIds),
//               <Card
//                 key={course.id}
//                 id={course.id}
//                 title={course.title}
//                 description={course.description}
//                 image={course.image}
//                 role={currentUser.role}
//                 students={user.filter(u => u.role === 'student')}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onSelectStudents={openSelectStudentsModal}
//                 previouslySelectedStudents={course.studentIds}
//               />
//             ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit}
//           currentUserId={currentUser.userid}
//         />
//       )}
//       {isSelectStudentsModalOpen && (
//         <SelectStudentsModal
//           isOpen={isSelectStudentsModalOpen}
//           onClose={closeSelectStudentsModal}
//           students={user.filter(u => u.role === 'student')}
//           onSendLink={handleSendLink}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';
// import SelectStudentsModal from './Modals/SelectStudentsModal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);
//   console.log("courses??", courses);

//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);
//   const [courseToAssign, setCourseToAssign] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = async (course, id = null) => {
//     if (id) {
//       await dispatch(editCourse({ id, course }));
//       setCourseToEdit(null);
//     } else {
//       await dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deleteCourse(id));
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   const openSelectStudentsModal = (courseId) => {
//     alert(courseId)
//     setCourseToAssign(courseId);
//     setIsSelectStudentsModalOpen(true);
//   };



//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses
//             .filter(course => course.userid === currentUser.userid)
//             .map(course => (
//               console.log("course>>>>", course.studentIds),
//               <Card
//                 key={course.id}
//                 id={course.id}
//                 title={course.title}
//                 description={course.description}
//                 image={course.image}
//                 role={currentUser.role}
//                 students={user.filter(u => u.role === 'student')}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onSelectStudents={openSelectStudentsModal}
//                 previouslySelectedStudents={course.studentIds}
//               />
//             ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit}
//           currentUserId={currentUser.userid}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;





// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse, updateCourseStudents } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';
// import SelectStudentsModal from './Modals/SelectStudentsModal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);
//   console.log("courses??", courses);

//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);
//   const [courseToAssign, setCourseToAssign] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = async (course, id = null) => {
//     if (id) {
//       await dispatch(editCourse({ id, course }));
//       setCourseToEdit(null);
//     } else {
//       await dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deleteCourse(id));
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   const openSelectStudentsModal = (courseId) => {
//     setCourseToAssign(courseId);
//     setIsSelectStudentsModalOpen(true);
//   };

//   const closeSelectStudentsModal = () => {
//     setIsSelectStudentsModalOpen(false);
//     setCourseToAssign(null);
//   };

//   const handleSendLink = (selectedStudents) => {
//     alert(selectedStudents)
//     if (courseToAssign) {
//       alert(courseToAssign)
//       dispatch(updateCourseStudents({ courseId: courseToAssign, selectedStudents }));
//     }
//     closeSelectStudentsModal();
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses
//             .filter(course => course.userid === currentUser.userid)
//             .map(course => (
//               <Card
//                 key={course.id}
//                 id={course.id}
//                 title={course.title}
//                 description={course.description}
//                 image={course.image}
//                 role={currentUser.role}
//                 students={user.filter(u => u.role === 'student')}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onSelectStudents={() => openSelectStudentsModal(course.id)}
//                 previouslySelectedStudents={course.studentIds}
//               />
//             ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit}
//           currentUserId={currentUser.userid}
//         />
//       )}
//       {isSelectStudentsModalOpen && (
//         <SelectStudentsModal
//           isOpen={isSelectStudentsModalOpen}
//           onClose={closeSelectStudentsModal}
//           students={user.filter(u => u.role === 'student')}
//           onSendLink={handleSendLink}
//           previouslySelectedStudents={courses.find(course => course.id === courseToAssign)?.studentIds || []}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse, updateCourseStudents } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card';
// import Modal from './modal';
// import SelectStudentsModal from './Modals/SelectStudentsModal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   const { user, currentUser } = useSelector(state => state.auth);

//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);
//   const [courseToAssign, setCourseToAssign] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = async (course, id = null) => {
//     if (id) {
//       await dispatch(editCourse({ id, course }));
//       setCourseToEdit(null);
//     } else {
//       await dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deleteCourse(id));
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   const openSelectStudentsModal = (courseId) => {
//     setCourseToAssign(courseId);
//     setIsSelectStudentsModalOpen(true);
//   };

//   const closeSelectStudentsModal = () => {
//     setIsSelectStudentsModalOpen(false);
//     setCourseToAssign(null);
//   };

//   const handleSendLink = (selectedStudents) => {
//     dispatch(updateCourseStudents({ courseId: courseToAssign, selectedStudents }));
//     closeSelectStudentsModal();
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses
//             .filter(course => course.userid === currentUser.userid)
//             .map(course => (
//               <Card
//                 key={course.id}
//                 id={course.id}
//                 title={course.title}
//                 description={course.description}
//                 image={course.image}
//                 role={currentUser.role}
//                 students={user.filter(u => u.role === 'student')}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onSelectStudents={() => openSelectStudentsModal(course.id)}
//                 previouslySelectedStudents={course.studentIds}
//               />
//             ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit}
//           currentUserId={currentUser.userid}
//         />
//       )}
//       {isSelectStudentsModalOpen && (
//         <SelectStudentsModal
//           isOpen={isSelectStudentsModalOpen}
//           onClose={closeSelectStudentsModal}
//           students={user.filter(u => u.role === 'student')}
//           onSendLink={handleSendLink}
//           previouslySelectedStudents={courses.find(course => course.id === courseToAssign)?.studentIds || []}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;





// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse, updateCourseStudents } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card'; // Assuming Card component name
// import Modal from './modal'; // Assuming Modal component name
// import SelectStudentsModal from './Modals/SelectStudentsModal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   console.log("courses=----->", courses[0].studentIds  );
//   const { user, currentUser } = useSelector(state => state.auth);

//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);
//   const [courseToAssign, setCourseToAssign] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = async (course, id = null) => {
//     if (id) {
//       await dispatch(editCourse({ id, course }));
//       setCourseToEdit(null);
//     } else {
//       await dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deleteCourse(id));
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   const openSelectStudentsModal = (courseId) => {
//     setCourseToAssign(courseId);
//     setIsSelectStudentsModalOpen(true);
//   };

//   const closeSelectStudentsModal = () => {
//     setIsSelectStudentsModalOpen(false);
//     setCourseToAssign(null);
//   };

//   const handleSendLink = (selectedStudents) => {
//     dispatch(updateCourseStudents({ courseId: courseToAssign, selectedStudents }));
//     closeSelectStudentsModal();

//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses
//             .filter(course => course.userid === currentUser.userid)
//             .map(course => (
//               <Card
//                 key={course.id}
//                 id={course.id}
//                 title={course.title}
//                 description={course.description}
//                 image={course.image}
//                 role={currentUser.role}
//                 students={user.filter(u => u.role === 'student')}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onSelectStudents={() => openSelectStudentsModal(course.id)}
//                 previouslySelectedStudents={course.studentIds}
//               />
//             ))}
//         </div>
//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit}
//           currentUserId={currentUser.userid}
//         />
//       )}
//       {isSelectStudentsModalOpen && (
//         <SelectStudentsModal
//           isOpen={isSelectStudentsModalOpen}
//           onClose={closeSelectStudentsModal}
//           students={user.filter(u => u.role === 'student')}
//           onSendLink={handleSendLink}
//           previouslySelectedStudents={courses.find(course => course.id === courseToAssign)?.studentIds || []}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses, deleteCourse, editCourse, addCourse, updateCourseStudents } from '../features/courseSlice';
// import { fetchUsers } from '../features/authSlice';
// import Header from './Header/Header';
// import Card from './card'; // Assuming Card component name
// import Modal from './modal'; // Assuming Modal component name
// import SelectStudentsModal from './Modals/SelectStudentsModal';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { courses } = useSelector(state => state.courses);
//   console.log("coursescourses", courses);
//   console.log(courses.map((e)=> console.log("eeee", e)));
//   const { users, currentUser } = useSelector(state => state.auth);
//   const jj = useSelector(state => state.auth);
//   console.log("users--------->", users );
//   const a = courses.filter(course => course.userid ===  currentUser.id )
//   console.log("aaaa", a);
//   console.log("currentUser--------->", currentUser);
//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);
//   const [courseToEdit, setCourseToEdit] = useState(null);
//   const [courseToAssign, setCourseToAssign] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (id) => {
//     const course = courses.find(course => course.id === id);
//     setCourseToEdit(course);
//     setIsAddCourseModalOpen(true);
//   };

//   const handleAddCourse = async (course, id = null) => {
//     console.log("coursecoursecoursecoursecoursecourse", course);
//     if (id) {
//       await dispatch(editCourse({ id, course }));
//       setCourseToEdit(null);
//     } else {
//       await dispatch(addCourse(course));
//     }
//     setIsAddCourseModalOpen(false);
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deleteCourse(id));
//   };

//   const openAddCourseModal = () => {
//     setCourseToEdit(null);
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//     setCourseToEdit(null);
//   };

//   const openSelectStudentsModal = (courseId) => {
//     setCourseToAssign(courseId);
//     setIsSelectStudentsModalOpen(true);
//   };

//   const closeSelectStudentsModal = () => {
//     setIsSelectStudentsModalOpen(false);
//     setCourseToAssign(null);
//     // Optionally, refetch courses here to ensure you have the latest data
//     dispatch(fetchCourses());
//   };

//   const handleSendLink = (selectedStudents) => {
//     dispatch(updateCourseStudents({ courseId: courseToAssign, selectedStudents }))
//       .then(() => {
//         closeSelectStudentsModal(); // Close modal after successful update
//         dispatch(fetchCourses()); // Refetch courses to ensure they are updated
//       })
//       .catch(error => {
//         console.error('Failed to update course students:', error);
//       });
//   };

//   return (
//     <div>
//       <Header onAddCourse={openAddCourseModal} />
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold my-5">Course List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//   {currentUser.role === "instructor" ? (
//     courses
//       .filter(course => course.userid === currentUser.id)
//       .map(course => (
//         console.log("course>>>>>??//" , course),
//         <Card
//           key={course.id}
//           id={course.id}
//           title={course.title}
//           description={course.description}
//           image={course.image}
//           role={currentUser.role}
//           students={users.filter(u => u.role === 'student')}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//           onSelectStudents={() => openSelectStudentsModal(course.id)}
//           previouslySelectedStudents={course.studentIds}
//         />
//       ))
//   ) : (
//     courses.map(course => (
//       console.log("course>>>>>" , course),
//       <Card
//         key={course.id}
//         id={course.id}
//         title={course.title}
//         description={course.description}
//         image={course.image}
//         role={currentUser.role}
//         // students={user.filter(u => u.role === 'student')}
//         studentIds={course.studentIds}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//         onSelectStudents={() => openSelectStudentsModal(course.id)}
//         previouslySelectedStudents={course.studentIds}
//         currentUserId={currentUser.id}
//       />
//     ))
//   )}
// </div>

//       </div>
//       {isAddCourseModalOpen && (
//         <Modal
//           isOpen={isAddCourseModalOpen}
//           onClose={closeAddCourseModal}
//           onAddCourse={handleAddCourse}
//           courseToEdit={courseToEdit}
//           currentUserId={currentUser.id}
//         />
//       )}
//       {isSelectStudentsModalOpen && (
//         <SelectStudentsModal
//           isOpen={isSelectStudentsModalOpen}
//           onClose={closeSelectStudentsModal}
//           students={users.filter(u => u.role === 'student')}
//           onSendLink={handleSendLink}
//           previouslySelectedStudents={courses.find(course => course.id === courseToAssign)?.studentIds || []}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, deleteCourse, editCourse, addCourse, updateCourseStudents } from '../features/courseSlice';
import { fetchUsers } from '../features/authSlice';
import Header from './Header/Header';
import Card from './card'; // Assuming Card component name
import Modal from './modal'; // Assuming Modal component name
import SelectStudentsModal from './Modals/SelectStudentsModal';
import DeleteModal from './Modals/DeleteModal'; // Import DeleteModal component
import Loader from './Loader'; // Import Loader component

const Home = () => {
  const dispatch = useDispatch();
  const { courses, loading: coursesLoading } = useSelector(state => state.courses);
  const { users,currentUser, loading: usersLoading } = useSelector(state => state.auth);

  // console.log("dnjklhjlcd", currentUser);
  // const current = localStorage.getItem('currentUser');

  // console.log("currentUser>>>>>>", current);

  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState(null);
  const [courseToAssign, setCourseToAssign] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); // State for DeleteModal
  const [courseToDelete, setCourseToDelete] = useState(null); // State to store course to delete
  const itemsPerPage = 7; // Number of items per page
  const user = localStorage.getItem('currentUser');

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (id) => {
    const course = courses.find(course => course.id === id);
    setCourseToEdit(course);
    setIsAddCourseModalOpen(true);
  };

  const handleAddCourse = async (course, id = null) => {
    if (id) {
      await dispatch(editCourse({ id, course }));
      setCourseToEdit(null);
    } else {
      await dispatch(addCourse(course));
    }
    setIsAddCourseModalOpen(false);
  };

  const handleDelete = async () => {
    if (courseToDelete) {
      await dispatch(deleteCourse(courseToDelete.id));
      setDeleteModalOpen(false); // Close the modal after deletion
      setCourseToDelete(null); // Reset courseToDelete state
    }
  };

  const openDeleteModal = (id) => {
    const course = courses.find(course => course.id === id);
    setCourseToDelete(course);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setCourseToDelete(null); 
  };

  const openAddCourseModal = () => {
    setCourseToEdit(null);
    setIsAddCourseModalOpen(true);
  };

  const closeAddCourseModal = () => {
    setIsAddCourseModalOpen(false);
    setCourseToEdit(null);
  };

  const openSelectStudentsModal = (courseId) => {
    setCourseToAssign(courseId);
    setIsSelectStudentsModalOpen(true);
  };

  const closeSelectStudentsModal = () => {
    setIsSelectStudentsModalOpen(false);
    setCourseToAssign(null);
    dispatch(fetchCourses());
  };

  const handleSendLink = (selectedStudents) => {
    dispatch(updateCourseStudents({ courseId: courseToAssign, selectedStudents }))
      .then(() => {
        closeSelectStudentsModal();
        dispatch(fetchCourses());
      })
      .catch(error => {
        console.error('Failed to update course students:', error);
      });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredCourses.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav className="flex justify-center mt-4">
        <ul className="inline-flex items-center -space-x-px">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <a
                onClick={() => paginate(number)}
                className={`px-3 py-2 leading-tight border rounded-l-lg cursor-pointer 
                            ${currentPage === number ? 'text-blue-600 border-blue-300 bg-blue-50' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <div>
      {coursesLoading || usersLoading ? (
        <Loader /> // Show loader if courses or users are still loading
      ) : (
        <>
          <Header onAddCourse={openAddCourseModal} />
          <div className="container mx-auto ">
            <div className='flex justify-between align-middle mx-2'>
              <h1 className="text-3xl font-bold my-5">Course List</h1>
              <input
                type="text"
                placeholder="Search courses"
                value={searchQuery}
                onChange={handleSearch}
                className="mb-4 mt-2 p-2 border border-gray-500 rounded"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-2">
              {currentUser.role === "instructor" ? (
                currentCourses
                  .filter(course => course.userid === currentUser.id)
                  .map(course => (
                    <Card 
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      image={course.image}
                      role={currentUser.role}
                      students={users.filter(u => u.role === 'student')}
                      onEdit={handleEdit}
                      onDelete={() => openDeleteModal(course.id)} // Pass a function to open delete modal with course id
                      onSelectStudents={() => openSelectStudentsModal(course.id)}
                      previouslySelectedStudents={course.studentIds}
                    />
                  ))
              ) : (
                currentCourses.map(course => (
                  <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    role={currentUser.role}
                    studentIds={course.studentIds}
                    onEdit={handleEdit}
                    onDelete={() => openDeleteModal(course.id)} // Pass a function to open delete modal with course id
                    onSelectStudents={() => openSelectStudentsModal(course.id)}
                    previouslySelectedStudents={course.studentIds}
                    currentUserId={currentUser.id}
                  />
                ))
              )}
            </div>
            {renderPagination()}
          </div>
          {isAddCourseModalOpen && (
            <Modal
              isOpen={isAddCourseModalOpen}
              onClose={closeAddCourseModal}
              onAddCourse={handleAddCourse}
              courseToEdit={courseToEdit}
              currentUserId={currentUser.id}
            />
          )}
          {isSelectStudentsModalOpen && (
            <SelectStudentsModal
              isOpen={isSelectStudentsModalOpen}
              onClose={closeSelectStudentsModal}
              students={users.filter(u => u.role === 'student')}
              onSendLink={handleSendLink}
              previouslySelectedStudents={courses.find(course => course.id === courseToAssign)?.studentIds || []}
            />
          )}
          {/* Render DeleteModal */}
          <DeleteModal
            isOpen={deleteModalOpen}
            onClose={closeDeleteModal}
            onConfirm={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default Home;
