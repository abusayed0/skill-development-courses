
# Live site link : [Netlify](https://skill-development-001.netlify.app/).

## Feature :
- You can add course on your cart.
- A course can only be added once.
- Total credit cann't be much than 20.


## How i managed my state in my proeject :
> I had to access two states from Cart component and update them from Course component. So i declare the states and handler function in their common parent component which is the App component and then passed states and handler function as props.