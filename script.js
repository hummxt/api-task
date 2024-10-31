const endpoint = "http://localhost:3000/users";
const heading = document.getElementById("h1");
const employeeTable = document.getElementById("table");
const employeeName = document.getElementById("employeeName");
const employeeSalary = document.getElementById("employeeSalary");
const employeeHeading = document.getElementById("tableHeading")
const employeeRow = document.getElementById("tableRow")

fetch(endpoint)
  .then((response) => {
    if (!response.ok) {
      throw new Error("xeta!" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const employeeRows = employeeTable.querySelectorAll("tr");
    data.forEach((user) => {
      const newRow = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.innerText = `${user.name} ${user.surname}`;
      nameCell.style.border = "3px solid #000000";
      nameCell.style.textAlign = "center";
      nameCell.style.padding = "8px";
      const salaryCell = document.createElement("td");
      salaryCell.innerText = `${user.salary}$`;
      salaryCell.style.border = "3px solid #000000";
      salaryCell.style.textAlign = "center";
      salaryCell.style.padding = "8px";
      newRow.appendChild(nameCell);
      newRow.appendChild(salaryCell);
      employeeTable.appendChild(newRow);
    });

    employeeTable.style.borderCollapse = "collapse";
    employeeTable.style.width = "100%";
    heading.style.fontSize = "3rem";
    heading.style.textAlign = "center";
  })
  .catch((error) => console.error("error:", error));





// axios.get(endpoint)
//   .then((response) => {
//     const data = response.data;
//     data.forEach((user) => {
//       const newRow = document.createElement("tr");
//       const nameCell = document.createElement("td");
//       nameCell.innerText = `${user.name} ${user.surname}`;
//       nameCell.style.border = "3px solid #000000";
//       nameCell.style.textAlign = "center";
//       nameCell.style.padding = "8px";
//       const salaryCell = document.createElement("td");
//       salaryCell.innerText = `${user.salary}$`;
//       salaryCell.style.border = "3px solid #000000";
//       salaryCell.style.textAlign = "center";
//       salaryCell.style.padding = "8px";
//       newRow.appendChild(nameCell);
//       newRow.appendChild(salaryCell);
//       employeeTable.appendChild(newRow);
//     });

//     employeeTable.style.borderCollapse = "collapse";
//     employeeTable.style.width = "100%";
//     heading.style.fontSize = "3rem";
//     heading.style.textAlign = "center";
//   })
// .catch((error) => console.error("error:", error));