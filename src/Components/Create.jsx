import axios from "axios";
import React, { useState } from "react";
const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      name,
      age,
    };
    axios
      .post("https://second-server.vercel.app/create", values, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Success:", response.data);
        setName("");
        setAge("");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-10">
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="border"
          />
        </div>
        <div className="my-2">
          <label htmlFor="age">Age : </label>
          <input
            type="text"
            name="age"
            id="age"
            onChange={(e) => setAge(e.target.value)}
            className="border"
          />
        </div>
        <button className="bg-green-700">Submit</button>
      </form>
    </div>
  );
};

export default Create;
