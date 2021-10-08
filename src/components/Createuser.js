//react component for creating an user
//formik for vaildation
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import UserContext from "./Usercontext";
import { useHistory } from "react-router";
// import axios from 'axios'
function Login() {
  let history = useHistory();

  const initialValues = { name: "", email: "", city: "" };

  const validate = (values) => {
    // console.log(values)
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.city) {
      errors.city = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  function handleSubmit(){
    console.log("hello")
  }
//function to called when submit is clicked or when the form is submitted
  // async function handleSubmit(obj, onSubmitProps) {
  //   let newUser = obj;
  //   console.log(newUser);
  //   let name = newUser.name
  //   let email = newUser.email
  //   let city = newUser.city
  //   console.log(name,email,city);
  //    try {
  //     await axios.post(`https://6125bfe92d4e0d0017b6c44c.mockapi.io/Users`, {
  //       name,
  //       email,
  //       city
  //   })
  //   .then((response) => {
  //     console.log(response.data) ;
  //   })
  //    } catch (error) {
  //      console.log(error)
  //    }
     
  

  // // Object { userName: "asvg", email: "cwavsuo@gmail.com", dateOfBirth: "", city: "hiho" }

  //   history.push("/");
  //   onSubmitProps.resetForm();
  // }

  return (
    <div className=" ms-auto mx-auto mt-3 card border-primary mb-3">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <div className="text-start">
          <div className=" mb-4">
            <h1 className="h3 mb-1 text-dark-1000 mt-3 text-center">
              Create User
            </h1>
          </div>
          <div className="container">
            <Form>
              {/* <div className="row"> */}
              <div className="col-lg-12">
                <label className="fw-bold">Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="name"
                ></Field>
                <ErrorMessage name="name">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12">
                <label className="fw-bold">Email</label>
                <Field
                  type="text"
                  className="form-control"
                  name="email"
                ></Field>
                <ErrorMessage name="email">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12">
                <label className="fw-bold">City</label>
                <Field
                  type="text"
                  className="form-control"
                  name="city"
                ></Field>
                <ErrorMessage name="city">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mt-3 mb-3 text-center"
                />
              </div>

              {/* </div> */}
            </Form>
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default Login;
