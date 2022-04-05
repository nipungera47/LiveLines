import React from 'react'
import { AppBar, Toolbar,FormControl, InputLabel, state, handleChange,  createTheme , IconButton , MenuItem , MenuIcon, Typography, Button, Container, Select, ThemeProvider,makeStyles, NativeSelect,} from '@material-ui/core'
const Header = () => {

    const darkTheme = createTheme({
        
        palette: { 
            
            primary:{
                main:"#fff",
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
        // <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              {/* <MenuIcon />       */}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              LiveLines
            </Typography>
           
            <Select 
                variant = "outlined"
                style={{
                    width:100,
                    height:40,
                    marginRight: 15,     
                }}
                >
                    <MenuItem value = {'USD'}> USD</MenuItem>
                    <MenuItem value = {'INR'}> INR</MenuItem>

                </Select>

          </Toolbar>
        </AppBar>
      </div>
// </ThemeProvider>

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
    //             }}
    //             >
    //                 <MenuItem value = {'USD'}> USD</MenuItem>
    //                 <MenuItem value = {'INR'}> INR</MenuItem>

    //             </Select>

    //         </Toolbar>
    //     </Container>
    // </AppBar>
    // </ThemeProvider>


  )
}

export default Header