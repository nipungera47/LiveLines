import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles'
import Carousel from './Carousel';
import React from 'react'


const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./bn1.jpg)",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    },

    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "row",
        paddingTop: 25,
        justifyContent: "space-around",
        textAlign:"center",

    },

   
}))


const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography variant="h2"
                        style={{
                            marginBottom: 15,
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                            textAlign: 'center',
                        }}
                    >

                        LiveLines
                    </Typography>

                    <Typography

                        style={{
                            textAlign: 'center',
                        }}

                    >
                        Get all the info regarding cryptography.
                    </Typography>

                    {/* <Carousel/> */}

                </div>
            </Container>
        </div>

    )
}

export default Banner;