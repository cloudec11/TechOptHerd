import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

import Mainpage  from './components/Mainpage';

import SubmitMarks from './components/SubmitMarks';


function App() {

  const [user, setUser] = useState({name:""})
  const [info, setInfo] = useState({course:"", teacher:"", marks:"", passing:"", description:""})

  var names = ["testing"];
  var course = [];
  var teacher = [];
  var marks = [];
  var passing = [];
  var description = [];
  var times = 0;


  const Login = details =>{ 
    console.log(details);

    setUser({
      name:details.name
    });

    if(names.includes(details.name)){
      console.log("Logged in");
    } else{
      console.log("New name detected");
      names.push(details.name);
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({name:""});
  }

  return (
    <div className="App">
      {(user.name !="") ?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          
          <p>How many marks would you like to enter?</p>
          <button onClick={four}>1 semester (4 marks)</button>
          <button onClick={eight}>2 semesters (8 marks)</button>

          <button onClick={Logout}>Logout</button>



        </div>

        

      ) : (
        <LoginForm Login={Login}/>
        
      )

      }

    </div>
  );

  function four(){
    times = 4
    console.log("times set to 4");
    for(let i = 0; i < times; i++){
      <SubmitMarks />
    }
  }
  
  function eight(){
    times = 8
    console.log("times set to 8");
    for(let i = 0; i < times; i++){
      <SubmitMarks />
    }
  }

}

export default App;
