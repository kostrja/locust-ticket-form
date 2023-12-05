import React, { useState, setState } from "react";
import "./style.css";
import { addDoc, setDoc, doc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Form() {
  let date = useState(useState(""));
  const [name, setName] = useState("");
  const [empId, setEmpId] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "empId") {
      setEmpId(value);
    }
    if (id === "subject") {
      setSubject(value);
    }
    if (id === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let date = new Date();
    let formattedDate =
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0") +
      "_" +
      String(date.getHours()).padStart(2, "0") +
      "-" +
      String(date.getMinutes()).padStart(2, "0") +
      "-" +
      String(date.getSeconds()).padStart(2, "0");

    const title = subject + "_" + formattedDate;

    // format text file
    const text =
      "Timestamp: " +
      formattedDate +
      "\n" +
      "Employee Name: " +
      name +
      "\n" +
      "Employee ID: " +
      empId +
      "\n" +
      "Subject: " +
      subject +
      "\n" +
      "Description: " +
      "WARNING: EXTERNALLY GENERATED TICKET, VERIFY INTEGRITY BEFORE ACTION" +
      description +
      "\n" +
      "----------------------------------------";

    // Create a ticket object
    const ticket = {
      resolved: false,
      data: text,
    };

    // return text file containing name, empID, subject, description
    // const element = document.createElement("a");
    // const file = new Blob([text], { type: "text/plain" });
    // element.href = URL.createObjectURL(file);
    // element.download = title + ".txt";
    // document.body.appendChild(element); // Required for this to work in FireFox
    // element.click();

    // add ticket to firebase
    try {
      const docRef = await addDoc(collection(db, "tickets"), {
        ...ticket,
        title: title,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="name">
          <label className="form__label" htmlFor="name">
            Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={name}
            onChange={(e) => handleInputChange(e)}
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="empId">
          <label className="form__label" htmlFor="empId">
            Employee ID{" "}
          </label>
          <input
            type="text"
            name=""
            id="empId"
            value={empId}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="Employee ID"
          />
        </div>
        <div className="subject">
          <label className="form__label" htmlFor="subject">
            Subject{" "}
          </label>
          <input
            type="subject"
            id="subject"
            className="form__input"
            value={subject}
            onChange={(e) => handleInputChange(e)}
            placeholder="Subject"
          />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="description">
            Description{" "}
          </label>
          <input
            className="form__input"
            type="description"
            id="description"
            value={description}
            onChange={(e) => handleInputChange(e)}
            placeholder="Description"
          />
        </div>
      </div>
      <div className="footer">
        <button onClick={handleSubmit} type="submit" className="btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
