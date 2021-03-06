import React from "react";
import {
  AppBar,
  Toolbar,
  FormControl,
  InputLabel,
  state,
  handleChange,
  createTheme,
  IconButton,
  MenuItem,
  MenuIcon,
  Typography,
  Button,
  Container,
  Select,
  ThemeProvider,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";
import { CryptoState } from "../cryptoContext";
const Header = () => {


  const { currency, setCurrency } = CryptoState();
  console.log(currency);


  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      type: "dark",
    },
  });



  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon />       */}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              LiveLines
            </Typography>

            {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}> */}

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >


              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>

            </Select>
            {/* </FormControl> */}
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>

    //   <ThemeProvider theme={darkTheme}>

    // <AppBar color = "transparent" position='static'>
    //     <Container>
    //         <Toolbar>
    //             <Typography>Livelines</Typography>

    //             <Select
    //             variant = "outlined"
    //             style={{
    //                 width:100,
    //                 height:40,
    //                 marginRight: 15,
    //            
    //             }}
    // value = {currency}
    // onChange = {(e) => setCurrency(e.target.value)}    
    //             >
    //                 <MenuItem value = {'USD'}> USD</MenuItem>
    //                 <MenuItem value = {'INR'}> INR</MenuItem>

    //             </Select>

    //         </Toolbar>
    //     </Container>
    // </AppBar>
    // </ThemeProvider>
  );
};

export default Header;
