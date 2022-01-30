import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Menu, ChevronLeft } from "@mui/icons-material";
import {
  Badge,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Icon,
  IconButton,
  List,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";

import { mainListItems, secondaryListItems } from "./listItems";

import Chart from "./Chart";
import Donations from "./Donations";
import Root from "../../assets/images/root.png";
import Branch from "./RootsBranchCard";
import Flowers from "./RootsFlowerCard";
import Leafs from "./RootsLeafCard";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: "65px",

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "24px",
                  ...(open && { display: "none" }),
                }}
              >
                <Menu />
              </IconButton>
              <img src={Root} height={50} width={50} />
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Your Roots - Donation Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeft />
              </IconButton>
            </Toolbar>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            {/* <List>{secondaryListItems}</List> */}
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={4}>
                {/* Donation Amounts Chart */}
                <Grid item xs={12} md={12} lg={10}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "row",
                      height: 240,
                    }}
                  >
                    <Chart />
                  </Paper>
                </Grid>
                {/* Leafs - Recent Donations */}
                <Grid item xs={12} md={12} lg={10}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Donations />
                  </Paper>
                </Grid>
                {/* Branches - Favorite Organizations */}
                <Grid item xs={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "row",
                      height: "240",
                    }}
                  >
                    <Flowers />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "row",
                      height: "240",
                    }}
                  >
                    <Leafs />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "row",
                      height: "240",
                    }}
                  >
                    <Branch />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
