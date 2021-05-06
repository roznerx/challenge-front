import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";


// Generate Operations Data
function createData(order, id, date, ammount, category, concept) {
  return {order, id, date, ammount, category, concept};
}

const rows = [
  createData(
    "01"
  ),
  createData(
    "02"
  ),
  createData(
    "03"
  ),
  createData(
    "04"
  ),
  createData(
    "05"
  ),
  createData(
    "06"
  ),
  createData(
    "07"
  ),
  createData(
    "08"
  ),
  createData(
    "09"
  ),
  createData(
    "10"
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function RecentOperations() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Operations</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Ammount</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Concept</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.order}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.ammount}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.concept}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more operations
        </Link>
      </div>
    </React.Fragment>
  );
}
