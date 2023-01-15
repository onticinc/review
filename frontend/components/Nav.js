import React from 'react';
import { IconButton, AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight:theme.spacing(2),
    },
    title: {
      flexGros: 1,  
    }
}))

const Nav = (props) => {
    const classes = useStyles()
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Local Reviews
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav;
