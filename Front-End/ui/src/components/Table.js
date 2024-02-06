import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { LoginForm } from "./LoginForm";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = axios.get("http://localhost:8080/api/tutorials/");
      setData((await response).data);
    };
    fetchData();
  }, []);

  console.log(data);

  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/");
  };

  const HandleUpdate = () => {
    const { id } = useParams();
    console.log(id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Place</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.place}</td>
              <td>{item.course}</td>
              <td>{item.phone}</td>
              <td>
                <button className="tdButton" onClick={handleCreate}>
                  C
                </button>
                <button
                  className="tdButton"
                  onClick={(id) => {
                    HandleUpdate();
                  }}
                >
                  E
                </button>
                <button className="tdButton">D</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
