import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Grid, Paper } from "@mui/material";
import { padding } from "@mui/system";

// Generate Order Data
function createData(
  id,
  date,
  organization,

  amount
) {
  return { id, date, organization, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "UNICEF",

    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "WHO",

    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "PLACEHOLDER",

    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "PLACEHOLDER",

    654.39
  ),
  createData(
    4,
    "16 Mar, 2019",
    "PLACEHOLDER",

    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Donations() {
  return (
    <>
      <Grid xs={12} md={9} lg={9}>
        <Paper sx={{ justifyContent: "center", m: "20px" }}>
          <Title>Recent Donations</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Organization</TableCell>

                <TableCell align="right">Donation Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.organization}</TableCell>

                  <TableCell align="right">{`$${row.amount}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <Link
              color="primary"
              href="#"
              onClick={preventDefault}
              sx={{ mt: 3 }}
            >
              See more Donations
            </Link>
          </Table>
        </Paper>
      </Grid>
    </>
  );
}
