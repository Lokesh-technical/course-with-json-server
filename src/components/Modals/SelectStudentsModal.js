// // import React, { useState } from 'react';

// // const SelectStudentsModal = ({ isOpen, onClose, students, onSendLink }) => {
// //   const [selectedStudents, setSelectedStudents] = useState([]);

// //   const handleCheckboxChange = (studentId) => {
// //     setSelectedStudents(prevSelected =>
// //       prevSelected.includes(studentId)
// //         ? prevSelected.filter(id => id !== studentId)
// //         : [...prevSelected, studentId]
// //     );
// //   };

// //   const handleSendLink = () => {
// //     onSendLink(selectedStudents);
// //     onClose(); // Close the modal after sending the link
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
// //       <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
// //         <h2 className="text-xl font-bold mb-4">Select Students</h2>
// //         <div className="max-h-64 overflow-y-auto">
// //           {students.map(student => (
// //             <div key={student.id} className="flex items-center mb-2">
// //               <input
// //                 type="checkbox"
// //                 checked={selectedStudents.includes(student.id)}
// //                 onChange={() => handleCheckboxChange(student.id)}
// //                 className="mr-2"
// //               />
// //               <label>{student.name}</label>
// //             </div>
// //           ))}
// //         </div>
// //         <button
// //           onClick={handleSendLink}
// //           className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// //         >
// //           Send Link
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SelectStudentsModal;



// import React, { useState, useEffect } from 'react';

// const SelectStudentsModal = ({ isOpen, onClose, students, onSendLink, previouslySelectedStudents }) => {
//   const [selectedStudents, setSelectedStudents] = useState([]);

//   // Filter out previously selected students
//   const availableStudents = students.filter(student => !previouslySelectedStudents.includes(student.id));
//   console.log("availableStudents", availableStudents);

//   const handleCheckboxChange = (studentId) => {
//     setSelectedStudents(prevSelected =>
//       prevSelected.includes(studentId)
//         ? prevSelected.filter(id => id !== studentId)
//         : [...prevSelected, studentId]
//     );
//     console.log("selectedStudents", selectedStudents);
//   };

//   const handleSendLink = () => {
//     onSendLink(selectedStudents);
//     onClose(); 
//   };

//   useEffect(() => {
//     if (!isOpen) {
//       setSelectedStudents([]);
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//       <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-xl font-bold mb-4">Select Students</h2>
//         <div className="max-h-64 overflow-y-auto">
//           {availableStudents.map(student => (
//             <div key={student.id} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 checked={selectedStudents.includes(student.id)}
//                 onChange={() => handleCheckboxChange(student.id)}
//                 className="mr-2"
//               />
//               <label>{student.username }</label>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleSendLink}
//           className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//         >
//           Send Link
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectStudentsModal;




// import React, { useState, useEffect, useRef } from 'react';

// const SelectStudentsModal = ({ isOpen, onClose, students, onSendLink, previouslySelectedStudents = [] }) => {
//   const [selectedStudents, setSelectedStudents] = useState([]);
//   const modalRef = useRef(null);

//   // Filter out previously selected students
//   const availableStudents = students.filter(student => !previouslySelectedStudents.includes(student.id));

//   const handleCheckboxChange = (studentId) => {
//     console.log("studentId????????", studentId);
//     const array = []
//     const e = array.includes(studentId)
//     if(e) {
//         array = array.filter(id => id !== studentId);
//     } else {
//         array.push(studentId)
//     }

//     console.log("array===>", array);

//     // setSelectedStudents(array);
//   };

//   const handleSendLink = () => {
//     onSendLink(selectedStudents);
//     onClose();
//   };

//   useEffect(() => {
//     if (!isOpen) {
//       setSelectedStudents([]);
//     }
//   }, [isOpen]);

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//       <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-xl font-bold mb-4">Select Students</h2>
//         <div className="max-h-64 overflow-y-auto">
//           {availableStudents.map(student => (
//             console.log("student?>?>?", student.id),
//             <div key={student.id} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(student.id)}
//                 className="mr-2"
//               />
//               <label>{student.username}</label>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleSendLink}
//           className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//         >
//           Send Link
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectStudentsModal;



// import React, { useState, useEffect, useRef } from 'react';

// const SelectStudentsModal = ({ isOpen, onClose, students, onSendLink, previouslySelectedStudents = [] }) => {
//   const [selectedStudents, setSelectedStudents] = useState([]);
//   const modalRef = useRef(null);

//   // Filter out previously selected students
//   const availableStudents = students.filter(student => !previouslySelectedStudents.includes(student.id));

//   const handleCheckboxChange = (studentId) => {
//     const updatedSelectedStudents = [...selectedStudents];
//     if (updatedSelectedStudents.includes(studentId)) {
//       // Remove studentId if already selected
//       updatedSelectedStudents.splice(updatedSelectedStudents.indexOf(studentId), 1);
//     } else {
//       // Add studentId if not selected
//       updatedSelectedStudents.push(studentId);
//     }
//     setSelectedStudents(updatedSelectedStudents);
//   };

//   const handleSendLink = () => {
//     onSendLink(selectedStudents);
//     onClose();
//   };

//   useEffect(() => {
//     if (!isOpen) {
//       setSelectedStudents([]);
//     }
//   }, [isOpen]);

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//       <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-xl font-bold mb-4">Select Students</h2>
//         <div className="max-h-64 overflow-y-auto">
//           {availableStudents.map(student => (
//             <div key={student.id} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(student.id)}
//                 checked={selectedStudents.includes(student.id)}
//                 className="mr-2"
//               />
//               <label>{student.username}</label>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleSendLink}
//           className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//         >
//           Send Link
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectStudentsModal;




// import React, { useState, useEffect, useRef } from 'react';

// const SelectStudentsModal = ({ isOpen, onClose, students, onSendLink, previouslySelectedStudents = [] }) => {
//   const [selectedStudents, setSelectedStudents] = useState([]);
//   const modalRef = useRef(null);

//   // Filter out previously selected students
//   const availableStudents = students.filter(student => !previouslySelectedStudents.includes(student.id));

//   const handleCheckboxChange = (studentId) => {
//     // alert(studentId)
//     setSelectedStudents(prevSelected => {
//       if (prevSelected.includes(studentId)) {
//         // alert("Updatas")
//         let a = prevSelected.filter(id => id !== studentId)
//         console.log("Updatas", a);
//         return prevSelected.filter(id => id !== studentId);
//       } else {
//         // alert("Added")
//         let b = [...prevSelected, studentId]
//         console.log("Added", b);
//         return [...prevSelected, studentId];
//       }
//     });
//   };
  
//   const handleSendLink = () => {
//     onSendLink(selectedStudents);
//     onClose();
//     console.log("selectedStudents++", selectedStudents);
//   };

//   useEffect(() => {
//     if (!isOpen) {
//       setSelectedStudents([]);
//     }
//   }, [isOpen]);

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//       <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-xl font-bold mb-4">Select Students</h2>
//         <div className="max-h-64 overflow-y-auto">
//           {availableStudents.map(student => (
//             <div key={student.id} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(student.id)}
//                 checked={selectedStudents.includes(student.id)}
//                 className="mr-2"
//               />
//               <label>{student.username}</label>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleSendLink}
//           className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//         >
//           Send Link
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectStudentsModal;




// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch } from 'react-redux';

// const SelectStudentsModal = ({ isOpen, onClose, students, previouslySelectedStudents = []}) => {
//   const [selectedStudents, setSelectedStudents] = useState([]);
//   const modalRef = useRef(null);

//   // Filter out previously selected students
//   const availableStudents = students.filter(student => !previouslySelectedStudents.includes(student.id));

//   const handleCheckboxChange = (studentId) => {
//     setSelectedStudents(prevSelected => {
//       if (prevSelected.includes(studentId)) {
//         return prevSelected.filter(id => id !== studentId);
//       } else {
//         return [...prevSelected, studentId];
//       }
//     });
//   };

//   const handleSendLink = async () => {
//     alert(selectedStudents)
    
//      onClose()
//   };

//   useEffect(() => {
//     if (!isOpen) {
//       setSelectedStudents([]);
//     }
//   }, [isOpen]);

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//       <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-xl font-bold mb-4">Select Students</h2>
//         <div className="max-h-64 overflow-y-auto">
//           {availableStudents.map(student => (
//             <div key={student.id} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(student.id)}
//                 checked={selectedStudents.includes(student.id)}
//                 className="mr-2"
//               />
//               <label>{student.username}</label>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleSendLink}
//           className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//         >
//           Send Link
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectStudentsModal;




// import React, { useState, useEffect } from 'react';

// const SelectStudentsModal = ({ isOpen, onClose, students, previouslySelectedStudents, onSendLink }) => {
//   const [selectedStudents, setSelectedStudents] = useState([]);

//   useEffect(() => {
//     setSelectedStudents(previouslySelectedStudents);
//   }, [previouslySelectedStudents]);

//   const handleStudentChange = (studentId) => {
//     if (selectedStudents.includes(studentId)) {
//       setSelectedStudents(selectedStudents.filter(id => id !== studentId));
//     } else {
//       setSelectedStudents([...selectedStudents, studentId]);
//     }
//   };

//   const handleSendLink = () => {
//     onSendLink(selectedStudents);
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-4 rounded-lg">
//           <h2 className="text-xl font-bold mb-4">Select Students</h2>
//           <ul>
//             {students.map(student => (
//               <li key={student.id}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={selectedStudents.includes(student.id)}
//                     onChange={() => handleStudentChange(student.id)}
//                   />
//                   {student.username}
//                 </label>
//               </li>
//             ))}
//           </ul>
//           <button onClick={handleSendLink} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Send Link</button>
//           <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg">Close</button>
//         </div>
//       </div>
//     )
//   );
// };

// export default SelectStudentsModal;



import React, { useState, useEffect } from 'react';

const SelectStudentsModal = ({ isOpen, onClose, students, previouslySelectedStudents, onSendLink }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  // Reset selectedStudents when previouslySelectedStudents changes or modal opens
  useEffect(() => {
    setSelectedStudents(previouslySelectedStudents);
  }, [previouslySelectedStudents, isOpen]);

  const availableStudents = students.filter(student => !previouslySelectedStudents.includes(student.id));

  const handleStudentChange = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const handleSendLink = () => {
    onSendLink(selectedStudents);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Students</h2>
          <ul className="space-y-2 mb-4 max-h-60 overflow-y-auto">
            {availableStudents.map(student => (
              <li key={student.id} className="flex items-center justify-between">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={() => handleStudentChange(student.id)}
                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  {student.username}
                </label>
              </li>
            ))}
          </ul>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleSendLink}
              className={`px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selectedStudents.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={selectedStudents.length === 0}
            >
              Send Link
            </button>
            <button onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Close</button>
          </div>
        </div>
      </div>
    )
  );
};

export default SelectStudentsModal;
