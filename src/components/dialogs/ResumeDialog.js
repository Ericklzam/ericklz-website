import React from 'react';
import { Dialog, DialogTitle, DialogActions, DialogContent, Typography, Button, useMediaQuery } from '@mui/material';
import '../styles.css';
import Eng from '../../assets/svg/Eng';
import Esp from '../../assets/svg/Esp';

const ResumeDialog = ({ open, onClose, setOpen, children }) => {
    const handleClose = () => setOpen(false);
    const enString = '[\u02C8\u026A\u014B\u0261l\u026A\u0283]';
    const esString = '\u02CCespa\u0272\u02C8ol';
    const smallScreenBreakpoint = '(max-width: 768px)';
    const xsmallScreenBreakpoint = '(max-width: 425px)'; // Adjust the breakpoint as needed

    // Check if the current screen size matches the small screen breakpoint
    const isSmallScreen = useMediaQuery(smallScreenBreakpoint);
    const isXSmallScreen = useMediaQuery(xsmallScreenBreakpoint);

    const downloadEsp = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Resume Esp.pdf';
        link.download = 'ResumeEsp.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    const downloadEng = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Resume Eng.pdf';
        link.download = 'ResumeEng.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
      };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <div style={{
                display: 'grid', placeItems: 'center', position: 'fixed', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.8)', width: '35%',
                height: '40%', padding: '20px', borderRadius: '8px', border: '1px solid white',
            }}>
                <DialogTitle> <Typography fontWeight={'bold'} fontSize={24} align="center">Resume</Typography> </DialogTitle>
                <DialogContent style={{ minWidth: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
                        <HoverContainer onClick={downloadEng}>
                            <Eng/>
                            <Typography color={'white'} variant='h4' textAlign={'center'}>English</Typography>
                            <Typography color={'white'} textAlign={'center'}>{enString}</Typography>
                        </HoverContainer>
                        <HoverContainer onClick={downloadEsp}>
                            <Esp/>
                            <Typography color={'white'} variant='h4' textAlign={'center'}>Español</Typography>
                            <Typography color={'white'} textAlign={'center'}>{esString}</Typography>
                        </HoverContainer>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button fullWidth variant="contained" color={'error'}
                        sx={{
                            height: '42px', backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '8px',
                            border: '1px solid white', marginTop: '80px', textTransform: 'none',
                        }}
                        onClick={() => { handleClose() }}>
                        <Typography fontSize={14}>Cancelar</Typography>
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
}
const HoverContainer = ({ children, onClick }) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            transition: 'background-color 0.3s',
            cursor: 'pointer',
        }} onClick={onClick}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0)' }}>
            {children}
        </div>
    );
}

export default ResumeDialog;
