import React, {useEffect, useState} from "react";
import APIController from '../Controllers/APIController';
import { Navigate, useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Spinner, Button, Row, Col, Alert, Modal} from 'react-bootstrap';

function StudentList() {

    const navigate = useNavigate();
    const { http } = APIController();
    const [Students, setStudents] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents= () => {
        console.log("fetching");
        http.get('/Students/').then((res) => {
            setStudents(res.data);
        });
    };
    const StudentInfo= async(e, id) => {
        navigate(`/Students/${id}`);
    };

    return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4><svg height="24" width="24" viewBox="0 0 24 24" className="EmployeeSelect-module_avatar_f8203f" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet" fill="currentColor"><path d="M17.6 13.714A9.987 9.987 0 0122 22h-2a8 8 0 00-4.124-7 8.026 8.026 0 001.724-1.286zM12 2a6 6 0 01.225 11.996L12 14a8 8 0 00-8 8H2c0-4.21 2.603-7.814 6.287-9.288A6 6 0 0112 2zm0 2C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fillRule="evenodd"></path></svg>Users</h4>
                  </div>
                  <div className="card-body">
                    </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Age</th>
                        <th scope="col">University</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(Students).map(([key, val]) => (
                        <tr key={val.id}>
                          <th scope="row">{val.name}</th>
                          <th scope="row">{val.lastName}</th>
                          <th scope="row">{val.age}</th>
                          <th scope="row">{val.university}</th>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={(e) => StudentInfo(e, val.Id)}
                            >
                              Info
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    
}

export default StudentList;