import React, {useState} from 'react'

function SubmitMarks() {

const [details, setDetails] = useState({classes:"", marks:"", });
var course = [];
var teacher = [];
var marks = [];
var passing = [];
var description = [];

const submitHandler = e => {
    e.preventDefault();
    SubmitMarks();
}

  return (

    <form onSubmit ={submitHandler}>
        <div className="form-inner">
            <h2>Enter your information</h2>
            <div className="form-group">
                <label htmlFor="name">Course:</label>
                <input type="text" name="course" id="course"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Teacher:</label>
                <input type="text" name="teacher" id="teacher"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Mark:</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Passing:</label>
                <input type="text" name="passing" id="passing"/>
            </div>
        </div>
    </form>
  )
}

export default SubmitMarks;