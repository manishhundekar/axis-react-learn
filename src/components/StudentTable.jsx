function StudentTable(props) {
  const students = props.data;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SL NO</th>
            <th>NAME</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr style={{border: '2px solid black'}}>
            <td>1</td>
            <td>Ramesh Kumar</td>
            <td>Male</td>
          </tr> */}
          {students.map((student) => {
            return (
              <tr style={{ border: "2px solid black" }} key={student.slno}>
                <td>{student.slno}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
