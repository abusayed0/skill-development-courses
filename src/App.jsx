
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Courses from './components/Courses'
import Header from './components/Header'
import Swal from 'sweetalert2'

function App() {
  const [cartCourses, setCartCourses] = useState([]);
  const [hourRemaining, setHourRemaining] = useState(20);
  const handleAddToCart = course => {
    // console.log(course);
    const isAlreadyAdded = cartCourses.find(cartCourse => cartCourse.id === course.id);
    if(isAlreadyAdded){
      Swal.fire(`You have already added : ${course.course_name}`)
    }
    else {
      const courseCredit = course.credit;
      if((hourRemaining - courseCredit) < 0){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `You have only ${hourRemaining}hr credit remaining!`,
        })
        return;
      }
      else{
        setHourRemaining(hourRemaining - courseCredit);
      }
      const newCartCourses = [...cartCourses, course];
      setCartCourses(newCartCourses);
      
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto px-1 md:px-4 lg:px-14">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Courses handleAddToCart={handleAddToCart}/>
        <Cart cartCourses={cartCourses} hourRemaining={hourRemaining}/>
      </div>
    </div>
  )
}

export default App
