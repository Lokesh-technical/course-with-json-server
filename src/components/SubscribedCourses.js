import React from 'react';
import { useSelector } from 'react-redux';
import { selectSubscribedCourses } from '../selectors';
import Card from './card';

const SubscribedCourses = () => {
    const subscribedCourses = useSelector(selectSubscribedCourses);
    const role = useSelector(state => state.auth.currantUser.role);

    return (
        <div className="course-list">
            {subscribedCourses.map(course => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    role={role}
                    subscribed={true}
                />
            ))}
        </div>
    );
};

export default SubscribedCourses;
