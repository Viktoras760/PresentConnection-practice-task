import React, {useEffect, useState} from "react";
import APIController from '../Controllers/APIController';
import { useNavigate, useParams } from 'react-router-dom';
import './Table.css';

function StudentList() {

    const navigate = useNavigate();
    const { http } = APIController();

    const [Students, setStudents] = useState('');

    const [pages, setPages] = useState(1);
    const { number } = useParams();

    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchStudents();
    });

    const fetchStudents= () => {
        http.get(`/Students/page/${number}`).then((res) => {
          const students = res.data.students;
          if (sortBy !== '') {
              students.sort((a, b) => {
                  if (sortOrder === 'asc') {
                    if (a[sortBy] < b[sortBy]) {
                      return -1;
                    }
                    if (a[sortBy] > b[sortBy]) {
                      return 1;
                    }
                    return 0;
                  } else {
                    if (a[sortBy] > b[sortBy]) {
                      return -1;
                    }
                    if (a[sortBy] < b[sortBy]) {
                      return 1;
                    }
                    return 0;
                  }
              });
          }
            setStudents(res.data.students);
            setPages(res.data.pages);
        });
    };

    const StudentInfo= async(e, id) => {
        navigate(`/Students/${id}`);
    };

    const addStudent= async(e, id) => {
      navigate(`/Student/`);
  };

  const handlePageChange= async( number) => {
    navigate(`/Students/page/${number}`);
  };

  const handleSort = (column) => {
    console.log("working");
    if(sortBy === column) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }else{
        setSortBy(column);
        setSortOrder('asc');
    }
  };

    return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4><svg height="24" width="24" viewBox="0 0 24 24" className="EmployeeSelect-module_avatar_f8203f" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet" fill="currentColor"><path d="M17.6 13.714A9.987 9.987 0 0122 22h-2a8 8 0 00-4.124-7 8.026 8.026 0 001.724-1.286zM12 2a6 6 0 01.225 11.996L12 14a8 8 0 00-8 8H2c0-4.21 2.603-7.814 6.287-9.288A6 6 0 0112 2zm0 2C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fillRule="evenodd"></path></svg>Students</h4>
                  </div>
                  <div className="card-body">
                    <button
                            className="btn btn-success"
                            onClick={() => addStudent()}
                            >
                            Add new student
                        </button>
                    </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th onClick={() => handleSort('name')}>Name</th>
                        <th onClick={() => handleSort('lastName')}>Last name</th>
                        <th onClick={() => handleSort('age')}>Age</th>
                        <th onClick={() => handleSort('university')}>University</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(Students).sort((a,b) => (sortOrder === 'asc' ? a[sortBy] > b[sortBy] : b[sortBy] > a[sortBy])).map(([key, val]) => (
                        <tr key={val.id}>
                          <th scope="row">{val.name}</th>
                          <th scope="row">{val.lastName}</th>
                          <th scope="row">{val.age}</th>
                          <th scope="row">{val.university}</th>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={(e) => StudentInfo(e, val.id)}
                            >
                              Info
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    
                  </table>
                  <div className="page-buttons-container">
                    {Array.from({length: pages}, (_, i) => (
                    <button key={i} onClick={() => handlePageChange(i + 1)} disabled={i + 1 === number}>
                    {i + 1}
                    </button>
                    ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    
}

export default StudentList;