import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LinearProgress } from "@mui/material";
import { getStudentsData } from "../utils/api";

export default function StudentsTable() {
  const [loading, setLoading] = useState(true);
  const [studentsData, setStudentsData] = useState([]);
  useEffect(() => {
    // getStudentsData()
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     const keysList = Object.keys(data);
    //     const dataList = [];
    //     keysList.map((key) => {
    //       dataList.push(data[key]);
    //     });
    //     console.log(dataList);
    //     setStudentsData(dataList)
    //     setLoading(false)
    //   });

    getStudentsData().then((res) => {
      const data = res.data;
      console.log(data);
      const keysList = Object.keys(data);
      const dataList = [];
      keysList.map((key) => {
        dataList.push(data[key]);
      });
      console.log(dataList);
      setStudentsData(dataList);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ marginTop: "300px" }}>
          <LinearProgress color="success" />
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsData.map((row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell /* align="right" */>{row.firstName}</TableCell>
                  <TableCell /* align="right" */>{row.lastName}</TableCell>
                  <TableCell /* align="right" */>{row.gender}</TableCell>
                  <TableCell /* align="right" */>{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

// const list = [1, 2, 3, 4, 5, 6, 7];
// list[3];
// const example = { key: "value" };
// example[key]

//useEffect
// On Mount
// On Update []
