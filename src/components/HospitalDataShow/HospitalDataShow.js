import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';

import { database } from "../../firebase";
import {
  onSnapshot,
  collection,
  where,
  query,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const HospitalDataShow = ({ option1, option2, option3, option4 }) => {
  const [HospitalData, SetHospitalData] = useState([]);

  function getData() {
    let q;
    if (option1 == "All" || option1 === null) {
      q = collection(database, "Hospitals");
    } else {
      q = query(
        collection(database, "Hospitals"),
        where("Locality", "==", option1)
      );
    }

    onSnapshot(q, (snapshot) =>
      SetHospitalData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    );
  }

  useEffect(() => {
    getData();
  }, [option1, option2]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left"> Name</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Locality</StyledTableCell>
              <StyledTableCell align="right">Vacant Normal Beds</StyledTableCell>
              <StyledTableCell align="right">Vacant ICU Beds</StyledTableCell>
              <StyledTableCell align="right">Vacant COVID Beds</StyledTableCell>
              <StyledTableCell align="right">Vacant Ventilators</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(HospitalData)}
            {HospitalData.map((data) => (            
                <StyledTableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                <Link to={`hospital/${data.id}`} >{data.Name} </Link>
                </StyledTableCell>
                <StyledTableCell align="right">{data["Phone Number"]}</StyledTableCell>
                <StyledTableCell align="right">{data.Locality}</StyledTableCell>
                <StyledTableCell align="right">
                  {data["Available Beds"]["Normal Beds"]}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data["Available Beds"]["ICU Beds"]}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data["Available Beds"]["COVID Beds"]}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data["Available Beds"]["Ventilators"]}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HospitalDataShow;
