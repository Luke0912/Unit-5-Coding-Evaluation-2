import { useState } from "react";

export const ShowStudents = ({ student, handleFilter }) => {
  const [sort, setSort] = useState("first_name");
  const [order, setOrder] = useState("asc");
  const handleSort = (e) => {
    e.preventDefault();
    handleFilter(sort, order);
  };
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{sort}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:{order}
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={handleSort}>
          sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {student.map((e) => (
            <tr className="row" key={e.id}>
              <td className="first_name">{e.first_name}</td>
              <td className="last_name">{e.last_name}</td>
              <td className="email">{e.email}</td>
              <td className="gender">{e.gender}</td>
              <td className="age">{e.age}</td>
              <td className="tenth_score">{e.tenth_score}</td>
              <td className="twelth_score">{e.twelth_score}</td>
              <td className="preferred_branch">{e.preferred_branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
