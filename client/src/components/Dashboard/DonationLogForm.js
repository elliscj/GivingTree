import * as React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Auth from "../../utils/auth";
import Donations from "./Dashboard";
import { ADD_DONATION } from "../../utils/mutations/donationMutations";
import { Paper } from "@mui/material";

const theme = createTheme();

const DonationLog = () => {
  const [formState, setFormState] = useState({
    charity_name: "",
    amount: "",
  });
  const [donation, { error, data }] = useMutation(ADD_DONATION);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await donation({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      charity_name: "",
      amount: "",
    });

    Donations();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper style={{ padding: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Donation Log
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Charity_name"
                label="Charity Name"
                name="charity_name"
                autoFocus
                value={formState.charity_name}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="donation_amount"
                label="Donation amount"
                type="donation_amount"
                id="donation_amount"
                value={formState.amount}
                onChange={handleChange}
              />

              <Button
                style={{ backgroundColor: "#5d6d47" }}
                className="signUp-In-btn"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log Your Donation
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default DonationLog;
