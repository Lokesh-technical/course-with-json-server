import React, { useState } from 'react';

const StudentDropdown = ({ students = [], onSendLink }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleStudent = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const handleSendLink = () => {
    onSendLink(selectedStudents);
    setSelectedStudents([]);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send Link
      </button>
      {isDropdownOpen && (
        <ul className="absolute bg-white border border-gray-200 rounded-lg shadow-lg mt-1 py-1 w-full z-10">
          {students.map(student => (
            <li
              key={student.id}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center`}
              onClick={() => toggleStudent(student.id)}
            >
              <input
                type="checkbox"
                className="mr-2 leading-tight"
                checked={selectedStudents.includes(student.id)}
                onChange={() => toggleStudent(student.id)}
              />
              <span>{student.username}</span>
            </li>
          ))}
        </ul>
      )}
      {isDropdownOpen && (
        <button
          onClick={handleSendLink}
          className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Send Course Link
        </button>
      )}
    </div>
  );
};

export default StudentDropdown;
