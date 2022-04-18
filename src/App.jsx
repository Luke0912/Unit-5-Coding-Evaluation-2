import { useState, useEffect } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [student, setStudent] = useState([]);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch("http://localhost:8080/students").then((d) =>
      d.json()
    );
    console.log(data);
    setStudent(data);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setAdd(!add);
  };
  const handleFilter = (sortBy, orderBy) => {
    let nstudent = [...student];
    if (orderBy === "asc") {
      nstudent.sort((a, b) => {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      });
    } else {
      nstudent.sort((a, b) => {
        return b[sortBy] > a[sortBy] ? 1 : -1;
      });
    }
    setStudent(nstudent);
    console.log(nstudent);
  };
  return (
    <div className="App">
      <button className="togglebtn" onClick={handleAdd}>
        {add ? "Go to Student list" : "Add a new Student"}
      </button>
      {!add && <ShowStudents student={student} handleFilter={handleFilter} />}
      {add && <AddStudent getData={getData} />}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
