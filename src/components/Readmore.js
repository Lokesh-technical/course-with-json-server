// Readmore.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseById } from '../features/courseSlice';

const Readmore = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    dispatch(fetchCourseById(id)).then((e)=> {
      setTitle(e.payload.title)
      setDescription(e.payload.description)
      setImage(e.payload.image)
    });
  }, [id]);

  return (
    <div className="container mx-auto p-5">
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Readmore;
