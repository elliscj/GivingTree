import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(
  id,
  date,
  organization,
  city,
  state,
  paymentMethod,
  amount
) {
  return { id, date, organization, city, state, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "UNICEF",
    "Denver",
    "CO",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "WHO",
    "Denver",
    "CO",
    "VISA ⠀•••• 3719",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "PLACEHOLDER",
    "Denver",
    "CO",
    "VISA ⠀•••• 3719",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "PLACEHOLDER",
    "Denver",
    "CO",
    "VISA ⠀•••• 3719",
    654.39
  ),
  createData(
    4,
    "16 Mar, 2019",
    "PLACEHOLDER",
    "Denver",
    "CO",
    "VISA ⠀•••• 3719",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Donations() {
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Organization</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>

            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Donation Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.organization}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  );
}
