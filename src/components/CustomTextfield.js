import React from 'react';
import { TextField, Grid, Typography } from '@mui/material';

const CustomTextField = ({ text, rows, xs, sm, md, lg, xl, ...rest }) => {

  return (
    <Grid container direction="column" xs={xs} sm={sm} md={md} lg={lg} xl={xl} marginBottom={'15px'}>
      <Grid item>
        <Typography variant="subtitle1" color={'white'}>{text}</Typography>
      </Grid>
      <Grid item>
      <TextField size="small" fullWidth variant="outlined" InputProps={{
        style: {borderRadius: 10, backgroundColor: 'white',},}}
        multiline={rows ? true : false}
        rows={rows}
        {...rest}/>
      </Grid>
    </Grid>
  );
}

export default CustomTextField;
