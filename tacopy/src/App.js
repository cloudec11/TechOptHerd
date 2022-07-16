import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
function App() {

  const [user, setUser] = useState({name:""})

  var names = ["testing"];

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
  }


  return (
    <div className="App">
      {(user.name !="") ?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login}/>
        
      )}
    </div>
  );
}

export default App;
