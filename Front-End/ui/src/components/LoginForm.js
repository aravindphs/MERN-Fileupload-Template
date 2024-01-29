import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    course: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/tutorials/", formData)
      .then(function (response) {
        console.log(response);
      })
      .then(() => {
        setFormData({
          name: "",
          place: "",
          course: "",
          phone: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //using Fetch
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:8080/api/tutorials/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     console.log(await response.json());

  //     setFormData({
  //       name: "",
  //       place: "",
  //       course: "",
  //       phone: "",
  //     });
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // };

  return (
    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      ></input>
      <label>Place</label>
      <input
        type="text"
        name="place"
        value={formData.place}
        onChange={handleInputChange}
      ></input>
      <label>Course</label>
      <input
        type="text"
        name="course"
        value={formData.course}
        onChange={handleInputChange}
      ></input>
      <label>Phone</label>
      <input
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      ></input>
      <input type="file" name="uploaded_file"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
