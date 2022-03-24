import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { database } from "../../firebase";
import { onSnapshot, collection, where, query } from "firebase/firestore";

const HospitalDataShow = ({ option1, option2, option3, option4 }) => {
  const [HospitalData, SetHospitalData] = useState([]);

  function getData() {
    let q;
    if (option1) {
      q = query(
        collection(database, "Hospitals"),
        where("Locality", "==", option1)
      );
    } else {
      q = collection(database, "Hospitals");
    }
    console.log(q.docs);
    onSnapshot(q, (snapshot) =>
      SetHospitalData(snapshot.docs.map((doc) => doc.data()))
    );
  }

  useEffect(() => {
    getData();
  }, [option1, option2]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right"> Name</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Locality</TableCell>
              <TableCell align="right">Vacant Normal Beds</TableCell>
              <TableCell align="right">Vacant ICU Beds</TableCell>
              <TableCell align="right">Vacant COVID Beds</TableCell>
              <TableCell align="right">Vacant Ventilators</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {HospitalData.map((data) => (
              <TableRow
                key={data.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.Name}
                </TableCell>
                <TableCell align="right">{data["Phone Number"]}</TableCell>
                <TableCell align="right">{data.Locality}</TableCell>
                <TableCell align="right">
                  {data["Available Beds"]["Normal Beds"]}
                </TableCell>
                <TableCell align="right">
                  {data["Available Beds"]["ICU Beds"]}
                </TableCell>
                <TableCell align="right">
                  {data["Available Beds"]["COVID Beds"]}
                </TableCell>
                <TableCell align="right">
                  {data["Available Beds"]["Ventilators"]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HospitalDataShow;
