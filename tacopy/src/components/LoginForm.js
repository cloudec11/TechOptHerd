import React, {useState} from 'react'

function LoginForm({Login}) {

const [details, setDetails] = useState({name:""});

const submitHandler = e => {
    e.preventDefault();
    Login(details);
}

  return (
    <form onSubmit ={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e=> setDetails({...details, name:e.target.value})} value = {details.name}/>
            </div>
            <input type="submit" value="Login" />
        </div>
    </form>
  )
}

export default LoginForm;