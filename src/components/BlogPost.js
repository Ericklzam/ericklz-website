import React, {useState, useEffect} from 'react';
import {Grid, Typography, Box} from '@mui/material';

const BlogPost = ({ text1, text2, text3, text4, imageUrl, sizeh, sizew }) => {
    return <>
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        width: sizew,
        height: sizeh,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'start',
        backdropFilter: 'blur(30px)',
        borderRadius: '10px',
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
        },
      }}>
        <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50%',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%)',
        borderRadius: '10px'
      }}></div>
      <Box sx={{ position: 'absolute', padding: '25px'}}>
        <Typography variant="h6" fontWeight={'bold'} color={'white'}>{text1}</Typography>
        <Typography variant="caption" color={'white'}>{text2}</Typography>
        <Grid container direction={'row'}>
            <Typography variant="caption" fontWeight={'bold'} color={'white'}>{text3}</Typography>
            <Typography variant="caption" fontWeight={'bold'} color={'white'}>{text4}</Typography>
        </Grid>
      </Box>
    </Box>
    </>
}

export default BlogPost;