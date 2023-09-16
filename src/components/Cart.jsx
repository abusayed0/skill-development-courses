import { list } from "postcss";

const Cart = ({ cartCourses, hourRemaining }) => {
    // console.log(cartCourses);
    const totalCredit = cartCourses.reduce((previousTotal, cartCourse) => previousTotal + cartCourse.credit, 0);
    return (
        <div>
            <div className="p-6 bg-white rounded-2xl">
                <h3 className="text-[#2F80ED] font-bold">Credit Hour Remaining {hourRemaining} hr</h3>
                <hr className="my-4" />
                {
                    cartCourses.length ?
                        <div>
                            <h2 className="text-xl font-bold">Course Name :</h2>
                            <ul className="list-decimal p-6 flex flex-col gap-2">
                                {
                                    cartCourses.map(cartCourse => <li key={cartCourse.id}>{cartCourse.course_name}</li>)
                                }
                            </ul>
                        </div>
                        :
                        <h3 className="font-semibold">No Course Added</h3>
                }
                <hr className="my-4" />
                <h3 className="font-medium">Total Credit Hour : {totalCredit}</h3>
            </div>
        </div>
    );
};

export default Cart;