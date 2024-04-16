import React from 'react';
import { Dialog, DialogTitle, DialogActions, DialogContent, Typography, TextField , Button, Box, Grid} from '@mui/material';
import '../styles.css'

const InDialog = ({ open, onClose, setOpen, children }) => {
    const handleClose = () => setOpen(false);

    return <>
    <Dialog open={open} onClose={handleClose} fullWidth> 
        <div style={{display: 'grid', placeItems: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', width: '35%', height: '30%', padding: '20px', borderRadius: '8px', border: '1px solid white',}} >
            <DialogTitle> <Typography fontWeight={'bold'} fontSize={24} align="center">Sign In</Typography> </DialogTitle>
            <DialogContent style={{minWidth:'100%'}}>
                <Grid container direction={'row'} justifyContent={'space-around'}>
                    <Grid direction={'column'}>
                        <Grid item><Typography color={'white'} variant='h4' textAlign={'center'}>English</Typography></Grid>
                    </Grid>
                    <Grid item><div className="vertical-line"/></Grid>
                    <Grid direction={'column'}>
                        <Grid item><Typography color={'white'} variant='h4' textAlign={'center'}>Español</Typography></Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Grid display={'flex'} flexDirection={'row'} width={'100%'} p={2}>
                    <Button fullWidth variant="contained" color={'error'} 
                    sx={{height: '42px', backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '8px', 
                    border: '1px solid white', marginTop:'40px', textTransform: 'none',}} 
                    onClick={() => {handleClose()}}>
                        <Typography fontSize={14}>
                            Cancelar
                        </Typography>
                    </Button>
                </Grid>
            </DialogActions>
            </div>
        </Dialog>
    </>
}

export default InDialog;