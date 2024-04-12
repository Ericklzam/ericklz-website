import React, {useState, useEffect} from 'react';
import {Grid} from '@mui/material';

const Menu = () => {
    const smallScreenBreakpoint = '(max-width: 768px)'; // Adjust the breakpoint as needed

    // Check if the current screen size matches the small screen breakpoint
    const isSmallScreen = useMediaQuery(smallScreenBreakpoint);
    return <>
    <Grid container>
        {isSmallScreen ? null :
        <Grid item>

        </Grid>}
    </Grid>
    </>
}
export default Menu;