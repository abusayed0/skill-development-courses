import { FaBookReader, FaDollarSign } from 'react-icons/fa';

const Course = ({ course }) => {
    console.log(course);
    const { id, cover_img, course_name, description, price, credit } = course;
    return (
        <div className="rounded-xl p-4 bg-white">
            <img className="w-full h-36" src={cover_img} alt="" />
            <div className="mt-4 ">
                <h3 className="text-lg font-semibold">{course_name}</h3>
                <p className="mt-3 text-[rgba(28,27,27,0.60)]">{description}</p>
                <div className="mt-5 flex justify-between">
                    <div className="flex items-center gap-2">

                        <FaDollarSign className="text-2xl"></FaDollarSign>
                        <p className="font-medium">Price : {price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBookReader className="text-2xl"></FaBookReader>
                        <p className="font-medium">Credit : {credit}</p>
                    </div>
                </div>
                <button className="mt-6 font-semibold text-lg py-2 bg-[#2F80ED] rounded-lg text-white w-full">Select</button>
            </div>
        </div>
    );
};

export default Course;