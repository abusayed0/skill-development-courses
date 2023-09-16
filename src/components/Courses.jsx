import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const url = "courses.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    />)
                }
            </div>
        </div>
    );
};

export default Courses;