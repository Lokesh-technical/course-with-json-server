// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { subscribeCourse } from '../features/authSlice';
// import { updateCourseSubscription } from '../features/courseSlice';

// const Card = ({ title, description, image, id, onDelete, onEdit, role, subscribe }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currantUser } = useSelector(state => state.auth);

//   const handleDelete = () => {
//     onDelete(id);
//   };
//   const handleEdit = () => {
//     onEdit(id);
//   };

//   const handleReadMore = () => {
//     if (currantUser.subscriptions.includes(id)) {
//       navigate('/readmore');
//     } else {
//       alert("First subscribe to the course");
//     }
//   };

//   const handleSubscribe = () => {
//     dispatch(subscribeCourse(id));
//     dispatch(updateCourseSubscription(id));
//   };

//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//       </a>
//       <div className="p-5">
//         <img src={image} alt='image' />
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//         {role === "instructor" && <button onClick={handleDelete} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Delete
//         </button>}
//         {role === "instructor" && <button onClick={handleEdit} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Edit
//         </button>}
//         {role === "student" && <button onClick={handleReadMore} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Read more
//         </button>}
//         {role === "student" && !currantUser.subscriptions.includes(id) && <button onClick={handleSubscribe} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Buy now
//         </button>}
//       </div>
//     </div>
//   )
// }

// export default Card


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { subscribeCourse } from '../features/authSlice';
// import { deleteCourse } from '../features/courseSlice';
// import DeleteModal from './Modals/DeleteModal';

// const Card = ({ title, description, image, id, onEdit, role, subscribe }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector(state => state.auth);
//   const [showModal, setShowModal] = useState(false);

//   const handleDelete = () => {
//     dispatch(deleteCourse(id));
//     setShowModal(false);
//   };

//   const handleEdit = () => {
//     onEdit(id); // Assuming onEdit will open an edit modal or form
//   };

//   const handleReadMore = () => {
//     if (currentUser.subscriptions.includes(id)) {
//       navigate(`/readmore/${id}`); // Navigate to read more page with course id
//     } else {
//       alert("First subscribe to the course");
//     }
//   };

//   const handleSubscribe = () => {
//     dispatch(subscribeCourse({ email: currentUser.email, courseId: id }));
//   };

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//       </a>
//       <div className="p-5">
//         <img src={image} alt='image' />
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//         {role === "instructor" && (
//           <>
//             <button onClick={openModal} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Delete
//             </button>
//             <DeleteModal isOpen={showModal} onClose={closeModal} onConfirm={handleDelete} />
//           </>
//         )}
//         {role === "instructor" && (
//           <button onClick={handleEdit} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Edit
//           </button>
//         )}
//         {role === "instructor" && (
//           // Send course link to student i want to open a dropdown and display all student list and i want to at a time select mutiple student and send link.
//         )}
//         {role === "student" && (
//           <button onClick={handleReadMore} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//           </button>
//         )}
//         {role === "student" && !currentUser.subscriptions.includes(id) && (
//           <button onClick={handleSubscribe} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Buy now
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;




// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { subscribeCourse } from '../features/authSlice';
// import { deleteCourse } from '../features/courseSlice';
// import StudentDropdown from './StudentDropdown';
// import DeleteModal from './Modals/DeleteModal';

// const Card = ({ title, description, image, id, onEdit, role, subscribe, students }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector(state => state.auth);
//   const [showModal, setShowModal] = useState(false);

//   const handleDelete = () => {
//     dispatch(deleteCourse(id));
//     setShowModal(false);
//   };

//   const handleEdit = () => {
//     console.log(`Editing course with ID: ${id}`); // Debugging log
//     onEdit(id);
//   };

//   const handleReadMore = () => {
//     if (currentUser.subscriptions.includes(id)) {
//       navigate(`/readmore/${id}`);
//     } else {
//       alert("First subscribe to the course");
//     }
//   };

//   const handleSubscribe = () => {
//     dispatch(subscribeCourse({ email: currentUser.email, courseId: id }));
//   };

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleSendLinkToStudents = (selectedStudents) => {
//     console.log(`Sending course link to students: ${selectedStudents}`);
//   };

//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img className="rounded-t-lg" src={image} alt={title} />
//       </a>
//       <div className="p-5">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//         {role === "instructor" && (
//           <>
//             <button onClick={openModal} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Delete
//             </button>
//             <DeleteModal isOpen={showModal} onClose={closeModal} onConfirm={handleDelete} />
//           </>
//         )}
//         {role === "instructor" && (
//           <button onClick={handleEdit} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Edit
//           </button>
//         )}
//         {role === "instructor" && (
//           <StudentDropdown students={students} onSendLink={handleSendLinkToStudents} />
//         )}
//         {role === "student" && (
//           <button onClick={handleReadMore} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//           </button>
//         )}
//         {role === "student" && !currentUser.subscriptions.includes(id) && (
//           <button onClick={handleSubscribe} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Buy now
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { editCourse } from '../features/courseSlice';
// import EditModal from './modal'; // Import your EditModal component

// const Card = ({ title, description, image, id, role, students }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector(state => state.auth);
//   const [showModal, setShowModal] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(title);
//   const [editedDescription, setEditedDescription] = useState(description);

//   const handleEdit = () => {
//     setShowModal(true);
//   };

//   const handleSaveChanges = () => {
//     const updatedCourse = {
//       id,
//       title: editedTitle,
//       description: editedDescription,
//       image, // Assuming you don't change the image in this edit flow
//     };
//     dispatch(editCourse(updatedCourse));
//     setShowModal(false);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleReadMore = () => {
//     navigate(`/readmore/${id}`);
//   };

//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//       </a>
//       <div className="p-5">
//         <img src={image} alt='image' />
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//         {role === "instructor" && (
//           <>
//             <button onClick={handleEdit} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Edit
//             </button>
//             <EditModal
//               isOpen={showModal}
//               onClose={handleCloseModal}
//               title={editedTitle}
//               description={editedDescription}
//               onTitleChange={setEditedTitle}
//               onDescriptionChange={setEditedDescription}
//               onSaveChanges={handleSaveChanges}
//             />
//           </>
//         )}
//         {role === "student" && (
//           <button onClick={handleReadMore} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { deleteCourse, editCourse } from '../features/courseSlice';
// import EditModal from './modal'; // Import your EditModal component
// import DeleteModal from './Modals/DeleteModal'; // Import your DeleteModal component

// const Card = ({ title, description, image, id, role, students }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector(state => state.auth);
//   const [showModal, setShowModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(title);
//   const [editedDescription, setEditedDescription] = useState(description);

//   const handleEdit = () => {
//     setShowModal(true);
//   };

//   const handleSaveChanges = () => {
//     const updatedCourse = {
//       id,
//       title: editedTitle,
//       description: editedDescription,
//       image, 
//     };
//     dispatch(editCourse(updatedCourse));
//     setShowModal(false);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleDelete = () => {
//     dispatch(deleteCourse(id));
//     setShowDeleteModal(false);
//   };

//   const handleConfirmDelete = () => {
//     setShowDeleteModal(true);
//   };

//   const handleCloseDeleteModal = () => {
//     setShowDeleteModal(false);
//   };

//   const handleReadMore = () => {
//     navigate(`/readmore/${id}`);
//   };

//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//       </a>
//       <div className="p-5">
//         <img src={image} alt='image' />
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//         {role === "instructor" && (
//           <>
//             <button onClick={handleEdit} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Edit
//             </button>
//             <EditModal
//               isOpen={showModal}
//               onClose={handleCloseModal}
//               title={editedTitle}
//               description={editedDescription}
//               onTitleChange={setEditedTitle}
//               onDescriptionChange={setEditedDescription}
//               onSaveChanges={handleSaveChanges}
//             />
//             <button onClick={handleConfirmDelete} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
//               Delete
//             </button>
//             <DeleteModal isOpen={showDeleteModal} onClose={handleCloseDeleteModal} onConfirm={handleDelete} />
//           </>
//         )}
//         {role === "student" && (
//           <button onClick={handleReadMore} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { deleteCourse } from '../features/courseSlice';
// import EditModal from './modal'; // Import your EditModal component
// import DeleteModal from './Modals/DeleteModal'; // Import your DeleteModal component

// const Card = ({ title, description, image, id, role, students, onEdit }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   const handleEdit = () => {
//     onEdit(id);
//   };

//   const handleDelete = () => {
//     dispatch(deleteCourse(id));
//     setShowDeleteModal(false);
//   };

//   const handleConfirmDelete = () => {
//     setShowDeleteModal(true);
//   };

//   const handleCloseDeleteModal = () => {
//     setShowDeleteModal(false);
//   };

//   const handleReadMore = () => {
//     navigate(`/readmore/${id}`);
//   };

//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//       </a>
//       <div className="p-5">
//         <img src={image} alt='image' />
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//         {role === "instructor" && (
//           <>
//             <button onClick={handleEdit} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Edit
//             </button>
//             <button onClick={handleConfirmDelete} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
//               Delete
//             </button>
//             <DeleteModal isOpen={showDeleteModal} onClose={handleCloseDeleteModal} onConfirm={handleDelete} />
//           </>
//         )}
//         {role === "student" && (
//           <button onClick={handleReadMore} className="ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Card = ({ id, title, description, image, role, students, onEdit, onDelete, onSelectStudents }) => {


//   return (
//     <div className="border rounded-lg p-4 shadow-lg">
//       {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />}
//       <div className="p-4">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-700 mb-4">{description}</p>
//         {role === 'instructor' && (
//           <div className="flex justify-between">
//             <button
//               onClick={() => onEdit(id)}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => onDelete(id)}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//             >
//               Delete
//             </button>
//             <button
//               // onClick={}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               Select Students
//             </button>
//           </div>
//         )}
//         {role === 'student' && (
//           <div className="flex justify-between">
//             <Link className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" to={{ pathname: `/readmore/${id}`, state: { id, title, description, image } }}>
//               Read More
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Card = ({ id, title, description, image, role, onEdit, onDelete, onSelectStudents }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-lg">
//       {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />}
//       <div className="p-4">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-700 mb-4">{description}</p>
//         {role === 'instructor' && (
//           <div className="flex justify-between">
//             <button
//               onClick={() => onEdit(id)}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => onDelete(id)}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => onSelectStudents(id)}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               Select Students
//             </button>
//           </div>
//         )}
//         {role === 'student' && (
//           <div className="flex justify-between">
//             <Link className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" to={{ pathname: `/readmore/${id}` }}>
//               Read More
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import SelectStudentsModal from './Modals/SelectStudentsModal';

// const Card = ({ id, title, description, image, role, students, previouslySelectedStudents, onEdit, onDelete }) => {
//   const [isSelectStudentsModalOpen, setIsSelectStudentsModalOpen] = useState(false);

//   const handleSelectStudentsClick = () => {
//     setIsSelectStudentsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsSelectStudentsModalOpen(false);
//   };

//   return (
//     <div className="border rounded-lg p-4 shadow-lg">
//       {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />}
//       <div className="p-4">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-700 mb-4">{description}</p>
//         {role === 'instructor' && (
//           <div className="flex justify-between">
//             <button
//               onClick={() => onEdit(id)}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => onDelete(id)}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//             >
//               Delete
//             </button>
//             <button
//               onClick={handleSelectStudentsClick}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               Select Students
//             </button>
//           </div>
//         )}
//         {role === 'student' && (
//           <div className="flex justify-between">
//             <Link className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" to={{ pathname: `/readmore/${id}` }}>
//               Read More
//             </Link>
//           </div>
//         )}
//       </div>
//       {isSelectStudentsModalOpen && (
//         <SelectStudentsModal
//           isOpen={isSelectStudentsModalOpen}
//           onClose={handleModalClose}
//           students={students}
//           previouslySelectedStudents={previouslySelectedStudents}
//         />
//       )}
//     </div>
//   );
// };

// export default Card;



import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({
  id,
  title,
  description,
  image,
  role,
  students,
  onEdit,
  onDelete,
  onSelectStudents,
  studentIds,
  currentUserId
}) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const isInstructor = role === 'instructor' || user?.role === 'instructor';
  const isStudent = role === 'student' || user?.role === 'student';
  const isStudentEnrolled = studentIds?.includes(currentUserId);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white transition transform hover:scale-105 hover:shadow-2xl">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {isInstructor && (
          <div className="flex justify-between space-x-2">
            <button
              onClick={() => onEdit(id)}
              className="flex-1 inline-flex items-center justify-center px-4 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(id)} // Trigger onDelete function with course id
              className="flex-1 inline-flex items-center justify-center px-4 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Delete
            </button>
            <button
              onClick={() => onSelectStudents(id)}
              className="flex-1 inline-flex items-center justify-center px-4 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Select Students
            </button>
          </div>
        )}
        {isStudent && (
          <div className="mt-4">
            {isStudentEnrolled ? (
              <Link
                className="inline-flex items-center justify-center w-full px-4 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                to={`/readmore/${id}`}
              >
                Read More
              </Link>
            ) : (
              <p className="text-red-500 mt-4">You are not enrolled in this course</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
