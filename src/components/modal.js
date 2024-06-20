// import React, { useState, useEffect } from 'react';

// const Modal = ({ isOpen, onClose, onAddCourse, courseToEdit }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);

//   // Set initial values if editing an existing course
//   useEffect(() => {
//     if (courseToEdit) {
//       setTitle(courseToEdit.title);
//       setDescription(courseToEdit.description);
//       setImage(courseToEdit.image);
//     }
//   }, [courseToEdit]);

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (!image) {
//       const newCourse = { title, description, image: null };
//       onAddCourse(newCourse);
//       resetForm();
//       return;
//     }
  
//     if (!(image instanceof Blob)) {
//       console.error("Selected file is not a Blob or File.");
//       return;
//     }
  
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const newCourse = { title, description, image: reader.result };
//       onAddCourse(newCourse);
//       resetForm();
//     };
//     reader.readAsDataURL(image);
//   };
  

//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setImage(null);
//     onClose();
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md">
//           <h2 className="text-2xl mb-4">{courseToEdit ? 'Edit Course' : 'Add New Course'}</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Description</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows="3"
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 {courseToEdit ? 'Save Changes' : 'Add Course'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;



// import React, { useState, useEffect } from 'react';

// const Modal = ({ isOpen, onClose, onAddCourse, courseToEdit }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     if (courseToEdit) {
//       setTitle(courseToEdit.title);
//       setDescription(courseToEdit.description);
//       setImage(courseToEdit.image);
//     } else {
//       resetForm();
//     }
//   }, [courseToEdit]);

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     alert("hksdvhk")
//     e.preventDefault();
  
//     if (!image) {
//       const newCourse = { title, description, image: null };
//       onAddCourse(newCourse);
//       resetForm();
//       return;
//     }
  
//     if (!(image instanceof Blob)) {
//       console.error("Selected file is not a Blob or File.");
//       return;
//     }
  
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const newCourse = { title, description, image: reader.result };
//       onAddCourse(newCourse);
//       resetForm();
//     };
//     reader.readAsDataURL(image);
//   };

//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setImage(null);
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md">
//           <h2 className="text-2xl mb-4">{courseToEdit ? 'Edit Course' : 'Add New Course'}</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Description</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows="3"
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 {courseToEdit ? 'Save Changes' : 'Add Course'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;


// import React, { useState, useEffect } from 'react';

// const Modal = ({ isOpen, onClose, onAddCourse, courseToEdit }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     if (courseToEdit) {
//       setTitle(courseToEdit.title);
//       setDescription(courseToEdit.description);
//       setImage(courseToEdit.image);
//     } else {
//       resetForm();
//     }
//   }, [courseToEdit]);

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (!image) {
//       const newCourse = { title, description, image: null };
//       onAddCourse(newCourse);
//       resetForm();
//       return;
//     }
  
//     if (!(image instanceof Blob)) {
//       console.error("Selected file is not a Blob or File.");
//       return;
//     }
  
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const newCourse = { title, description, image: reader.result };
//       onAddCourse(newCourse);
//       resetForm();
//     };
//     reader.readAsDataURL(image);
//   };

//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setImage(null);
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md">
//           <h2 className="text-2xl mb-4">{courseToEdit ? 'Edit Course' : 'Add New Course'}</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Description</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows="3"
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 {courseToEdit ? 'Save Changes' : 'Add Course'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;




// import React, { useState, useEffect } from 'react';

// const Modal = ({ isOpen, onClose, onAddCourse, courseToEdit }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     if (courseToEdit) {
//       setTitle(courseToEdit.title);
//       setDescription(courseToEdit.description);
//       setImage(courseToEdit.image);
//     } else {
//       resetForm();
//     }
//   }, [courseToEdit]);

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form Submitted");

//     if (!image) {
//       const newCourse = { title, description, image: null };
//       onAddCourse(newCourse);
//       resetForm();
//       return;
//     }

//     if (!(image instanceof Blob)) {
//       console.error("Selected file is not a Blob or File.");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const newCourse = { title, description, image: reader.result };
//       onAddCourse(newCourse);
//       resetForm();
//     };
//     reader.readAsDataURL(image);
//   };

//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setImage(null);
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md">
//           <h2 className="text-2xl mb-4">{courseToEdit ? 'Edit Course' : 'Add New Course'}</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Description</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows="3"
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 {courseToEdit ? 'Save Changes' : 'Add Course'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;



import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onAddCourse, courseToEdit, currentUserId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (courseToEdit) {
      setTitle(courseToEdit.title);
      setDescription(courseToEdit.description);
      setImage(courseToEdit.image);
    } else {
      resetForm();
    }
  }, [courseToEdit]);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = { title, description, studentIds: [] };

    if (image && image instanceof Blob) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newCourse.image = reader.result;
        newCourse.userid = currentUserId;
        onAddCourse(newCourse, courseToEdit ? courseToEdit.id : null);
        resetForm();
        onClose();
      };
      reader.readAsDataURL(image);
    } else {
      newCourse.image = courseToEdit ? courseToEdit.image : null;
      newCourse.userid = currentUserId;
      onAddCourse(newCourse, courseToEdit ? courseToEdit.id : null);
      resetForm();
      onClose();
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{courseToEdit ? 'Edit Course' : 'Add New Course'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border p-4 border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {courseToEdit ? 'Save Changes' : 'Add Course'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
