import React, { useState, setState } from "react";
import "./style.css";
function Form() {
  let date = useState(useState(null));
  const [name, setName] = useState(null);
  const [empId, setEmpId] = useState(null);
  const [subject, setSubject] = useState(null);
  const [description, setDescription] = useState(null);

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

  const handleSubmit = () => {
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

    console.log(formattedDate, name, empId, subject, description);
    // set name, empID, subject, description text boxes to empty
    setName("");
    setEmpId("");
    setSubject("");
    setDescription("");

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
      "\n" +
      "WARNING: EXTERNALLY GENERATED TICKET, VERIFY INTEGRITY BEFORE ACTION" +
      "\n" +
      description +
      "\n" +
      "----------------------------------------";

    // return text file containing name, empID, subject, description
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = subject + "_" + formattedDate + ".txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="name">
          <label className="form__label" for="name">
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
          <label className="form__label" for="empId">
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
          <label className="form__label" for="subject">
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
          <label className="form__label" for="description">
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
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
