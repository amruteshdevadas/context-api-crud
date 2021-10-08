//react component for editing an user
//formik for vaildation
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import {useState} from 'react'

function Edituser(props) {
  let history = useHistory();
  const [userName,setUserName] = useState("")
  const [city,setCity] = useState("")
  const[email,setEmail] = useState("")
  const[id,setId]= useState(props.match.params.index)

  //to pupulate the credentials of the user to be edited index if the user will be used
  // let id = props.match.params.index;

  useEffect( ()=>
  {
    async function userlist(){
    try {
      await axios
        .put(`https://6125bfe92d4e0d0017b6c44c.mockapi.io/Users/${id}`)
        .then((response) => {
          let { id, name, email, city } = response.data;
          setCity(city)  
          setUserName(name)   
          setEmail(email)  
          setId(id)       
        });
    } 
    catch (error) {
      console.log(error);
    }
  }
  userlist()
  }, [])

  //function to called when submit is clicked or when the form is submitted
  async function handleSubmit(obj) {
    obj.preventDefault()
    let name= obj.target.userName.value
    let email = obj.target.email.value
    let city = obj.target.city.value
    try {
      await axios
        .put(`https://6125bfe92d4e0d0017b6c44c.mockapi.io/Users/${id}`, {
          name,
          email,
          city,
        })
        .then((response) => {
          console.log(response.data);
          history.push("/");
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ms-auto mx-auto mt-3 card border-primary mb-3">
      <Formik > 
        <div className="">
          <div className="mb-4">
            <h1 className="h3 mb-1 text-dark-1000 mt-3 ">Edit User</h1>
          </div>
          <div className="container">
            <Form onSubmit={handleSubmit} >
              <div className="col-lg-12">
                <label className="fw-bold">Name</label>
                <Field
                  type="text"
                  className="form-control mb-2"
                  name="userName"
                  value={userName}
                  onChange ={e=>setUserName(e.target.value)}
                ></Field>
                <ErrorMessage name="name">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12 mb-1">
                <label className="fw-bold">Email</label>
                <Field
                  type="text"
                  className="form-control mb-2"
                  name="email"
                  value={email}
                  onChange ={e=>setEmail(e.target.value)}
                 
                ></Field>
                <ErrorMessage name="email">
                  {(error) => <h6 className="link-danger ">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12 mb-1">
                <label className="fw-bold">City</label>
                <Field
                  type="text"
                  className="form-control mb-2"
                  name="city"
                  value={city}
                  onChange ={e=>setCity(e.target.value)}
                 
                ></Field>
                <ErrorMessage name="city">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12 mb-1">
                <button
                  type="submit"
                  // value="Submit"
                  className="btn btn-primary mt-3 mb-3 text-center"
                >Submit</button>
              </div>
            </Form>
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default Edituser;
