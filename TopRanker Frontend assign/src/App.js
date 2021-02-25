import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  let [selectedArr, setSelectedArr] = useState([]);

  let [singleRowData, setSingleRowData] = useState({});
  let [rowData, setRowData] = useState([]);

  const [showResultTable, setShowResultTable] = useState(false);

  const addRow = () => {
    const entry = {
      Id: id,
      Name: name,
      Email: email,
      Gender: gender,
      DOB: dob,
      Country: country,
      City: city,
    };
    singleRowData = entry;
    setSingleRowData(singleRowData);

    // rowData.push(entry);
    // console.log(rowData);
    rowData.push(singleRowData);
    // await console.log(singleRowData);
    setRowData([...rowData]);
    // console.log(rowData);
    setId("");
    setName("");
    setEmail("");
    setGender("");
    setDob("");
    setCountry("");
    setCity("");
  };

  const deleteSelectedRows = () => {
    rowData = rowData.filter(function (value, index) {
      return selectedArr.indexOf(index) == -1;
    });
    setRowData([...rowData]);
    // console.log(rowData);
    selectedArr = [];
    setSelectedArr(selectedArr);
    // console.log(selectedArr);
  };

  const deleteNonSelectedRows = () => {
    rowData = rowData.filter(function (value, index) {
      return selectedArr.indexOf(index) != -1;
    });
    setRowData([...rowData]);
    // console.log(rowData);
    selectedArr = [];
    setSelectedArr(selectedArr);
    // console.log(selectedArr);
  };

  const printTable = () => {
    setShowResultTable(true);
  };

  return (
    <div className="App">
      <div className="button-div">
        {/* <button className="btn">Add Row</button> */}
        <button
          className="btn"
          onClick={deleteSelectedRows}
          disabled={rowData.length === 0}
        >
          Delete Selected Rows
        </button>
        <button
          className="btn"
          disabled={rowData.length === 0}
          onClick={deleteNonSelectedRows}
        >
          Delete Non Selected Rows
        </button>
        <button
          className="btn"
          disabled={rowData.length === 0}
          onClick={printTable}
        >
          Submit
        </button>
      </div>
      <div className="input-div">
        <input
          className="input"
          placeholder="Id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          className="input"
          placeholder="DOB"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          className="input"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          className="input"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="input"
          onClick={addRow}
          disabled={
            showResultTable ||
            id === "" ||
            name === "" ||
            email === "" ||
            gender === "" ||
            dob === "" ||
            country === "" ||
            city === ""
          }
        >
          Add Row
        </button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Country</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, idx) => {
              return (
                <tr>
                  {Object.keys(row).map(function (value, idx) {
                    return <td>{row[value]}</td>;
                  })}
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        selectedArr.push(idx);
                        setSelectedArr([...selectedArr]);
                        console.log(selectedArr);
                      } else {
                        const indexToRemove = selectedArr.findIndex(
                          (i) => i === idx
                        );
                        selectedArr.splice(indexToRemove, 1);
                        setSelectedArr([...selectedArr]);
                        console.log(selectedArr);
                      }
                    }}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      {showResultTable ? (
        <div className="table">
          <h1>Submitted Table</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Country</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, idx) => {
                return (
                  <tr>
                    {Object.keys(row).map(function (value, idx) {
                      return <td>{row[value]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default App;
