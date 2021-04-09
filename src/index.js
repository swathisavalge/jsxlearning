//Importing react libraries
import React from 'react';
import ReactDOM from 'react-dom';

const buttonText = {text: 'click me here!'};

//Below is a react component
const App = () => {
    return (
      <div>
        <label className='label' htmlFor='name'>Enter Name:</label>
        <input id='name' type='text' />
        <button style={{backgroundColor:'blue', color:'white'}} >{buttonText.text}</button>
      </div>
    );
};

class App extends React.Component{
  
}

//section 2 Test

// function getTime() {
//   return (new Date()).toLocaleTimeString()
// }

// //Below is a react component
// const App = () => {
//     return (
//       <div>
//         <div>Current Time:</div>
//         <h3>{getTime()}</h3>
//        </div>
//     );
// };

// Using react-dom to show content on the browser
ReactDOM.render(<App />,document.getElementById('root'));