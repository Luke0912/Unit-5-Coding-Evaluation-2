import { useState } from "react";

export const AddStudent = ({ getData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [tenthscore, setTenthScore] = useState("");
  const [twelthscore, setTwelthScore] = useState("");
  const [preferredbranch, setPreferredBranch] = useState("law");
  const [errorMessage, setErrorMessage] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (firstName.trim() === "") {
      setErrorMessage("First Name Missing");
      return;
    }
    if (lastName.trim() === "") {
      setErrorMessage("Last Name Missing");
      return;
    }
    if (age === null||age>100 ||age<=0) {
      setErrorMessage("Please check age range between 0-100");
      return;
    }
    if (email.trim() === "") {
      setErrorMessage("Please provie valid email");
      return;
    }
    if (gender.trim() === "") {
      setErrorMessage("Please select gender");
      return;
    }
    if (tenthscore === null || tenthscore.trim()==="") {
      setErrorMessage("Please check 10th Score range between 0-100");
      return;
    }
    if (twelthscore === null || twelthscore.trim()==="") {
      setErrorMessage("Please check 12th Score range between 0-100");
      return;
    }
    const payLoad = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      age: age,
      tenth_score: tenthscore,
      twelth_score: twelthscore,
      preferred_branch: preferredbranch,
    };
    await fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payLoad),
    }).then(() => {
      setErrorMessage(" ")
      getData();
    });
  };
  return (
    <form className="addstudent">
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={(e) => setTenthScore(e.target.value)}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={(e) => setTwelthScore(e.target.value)}
        />{" "}
      </div>
      <div>
        <select
          value={preferredbranch} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={(e) => setPreferredBranch(e.target.value)}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input
        className="submit"
        type="submit"
        value="Submit"
        onClick={handleFormSubmit}
      />
      {
        <div className="error">{errorMessage}</div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
