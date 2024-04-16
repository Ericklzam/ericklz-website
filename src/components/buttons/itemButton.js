import * as React from 'react';
import { Button } from '@mui/material';

const ItemButton = ({ buttonColor, buttonHover, text }) => { // Destructure props properly
    return (
        <Button 
            variant="contained" 
            sx={{
                color: 'white',
                backgroundColor: buttonColor,
                '&:hover': {
                    backgroundColor: buttonHover,
                },
                textTransform: 'none',
                height: '40px',
                margin: '5px'
            }}>{text}</Button>
    );
}

export default ItemButton;
