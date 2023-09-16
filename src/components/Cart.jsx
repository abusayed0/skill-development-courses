import { list } from "postcss";

const Cart = ({cartCourses}) => {
    // console.log(cartCourses);
    return (
        <div>
            <div className="p-6 bg-white rounded-2xl">
                <h3 className="text-[#2F80ED] font-bold">Credit Hour Remaining 7 hr</h3>
                <hr className="my-4" />
                <div>
                    <h2 className="text-xl font-bold">Course Name :</h2>
                    <ul className="list-decimal p-6 flex flex-col gap-2">
                        {
                            cartCourses.map(cartCourse => <li key={cartCourse.id}>{cartCourse.course_name}</li>)
                        }
                    </ul>
                </div>
                <hr className="my-4"/>
                <h3 className="font-medium">Total Credit Hour : 13</h3>
            </div>
        </div>
    );
};

export default Cart;