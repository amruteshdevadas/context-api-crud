// this is default or like the homepage which displays the users with their list

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import UserContext from "./Usercontext";
function Users() {
  async function refreshList() {
    try {
      await axios
        .get(`https://6125bfe92d4e0d0017b6c44c.mockapi.io/Users`)
        .then((response) => {
          setApiData(response.data);
        });

      console.log("refresh List called");
    } catch (error) {
      console.error(error);
    }
  }

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    refreshList();
  }, []);

  //function called when the delete button is hit
  async function handleDelete(id) {
    //before deleting the user confirm window will be popped to get the confirmation
    let confirm = window.confirm(`Do you want to delete? ${id}`);
    if (confirm) {
      try {
        await axios
          .delete(`https://6125bfe92d4e0d0017b6c44c.mockapi.io/Users/${id}`)
          .then(() => {
            refreshList();
          });
      } catch (error) {
        console.error(error);
      }
    }
  }

  // const sendGetRequest = async () => {
  //   try {
  //     const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     console.log(resp.data);
  // } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  // }
  // };

  return (
    <div className="mx-auto ms-auto col-lg-8">
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight h3 mb-2 text-dark-800">
          Users
        </div>
        <div className="p-2 bd-highlight">
          {" "}
          <Link to="/create_user" className=" btn btn-xl btn-primary ">
            Create User
          </Link>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Examples
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {apiData.map((obj) => {
                  return (
                    <tr key={obj.email}>
                      <td>{obj.id}</td>
                      <td>{obj.name}</td>
                      <td>{obj.email}</td>
                      <td>{obj.city}</td>
                      <td>
                        <button
                          className="btn btn-danger mx-3 mb-2 mt-2"
                          onClick={() => {
                            handleDelete(obj.id);
                          }}
                        >
                          Delete
                        </button>
                        <Link
                          to={`/edit_user/${obj.id}`}
                          data={obj}
                          className="btn btn-warning  ps-4 px-4  ms-3 mb-2 mt-2 text-dark"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
