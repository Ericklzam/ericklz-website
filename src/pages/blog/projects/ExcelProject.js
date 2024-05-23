import React, {useState, useEffect} from 'react';
import {Grid, Typography, Box, Avatar} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import darkTheme from '../../../theme';
import ResumeDialog from '../../../components/dialogs/ResumeDialog';
import CustomAppBar from '../../../components/layout/AppBar';
import CustomBottomBar from '../../../components/layout/BottomBar';
import ExcelFile from '../../../assets/img/ExcelFile.png'
import ExcelPreview2 from '../../../assets/img/ExcelPreview2.png'
import PortraitPhoto from '../../../assets/img/PortraitPhoto.jpg';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../../home/styles.css'

const ExcelProject = () => {
    const navigate = useNavigate();

    const [showButton, setShowButton] = useState(false);
    const [open, setOpen] = useState(false);

    const codeStyles = {
      container: {
        borderRadius: '10px',
        width: '70%',
        overflow: 'auto',
      }
    }; 

    const edaCode = `'GENERATES A NEW VALE
Private Sub CommandButton3_Click()
    '...
    '...Variables and operators
    '..
    Historial ListBox2.List(j, 2), Me.ComboBox1.Value, value11, value12
    For j = 0 To numRows
    '...
    Next j
    AddColumn
    Actualizar
    UpdateConsFormula
    UpdateFormula
    ColorRow
    result = MsgBox("El vale se genero con éxito, ¿Deseas imprimirlo?", vbYesNo)
    Select Case result
        Case vbYes:
            imprimir
            Unload Me
        Case vbNo:
            Unload Me
    End Select
End Sub`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    };
    return <>
    <ThemeProvider theme={darkTheme}>
    <Grid>
        <CustomAppBar title={'Home'}/>
        <div className='Body'>
        <Grid container direction='column'>
          <Grid item xs={12}>
          <Box sx={{
            backgroundImage: `url(${ExcelFile})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '50vh',
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
            },}}>
          </Box>
          </Grid>
          <Box height={40}/>
          <Grid item xs={12}>
            <Typography fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginBottom: 10}}>
                Control de Herramienta VBA
            </Typography>
            <Grid container direction={'row'} justifyContent={'center'} marginBottom={5}>
              <Avatar style={{height: 25, width: 25}} src={PortraitPhoto} sx={{marginRight: 2}}/>
              <Typography variant="caption" fontWeight={'bold'} color={'white'} alignSelf={'center'}>Erick Lopez | Apr 21 2024</Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
          <Typography style={{color: 'white', marginBottom: 20, textAlign: 'center'}}>A pesar de mi escepticismo, tengo que admitir que este proyecto resultó ser algo verdaderamente útil, 
              en un principio este sistema iba a atender un solo problema dentro de las <span style={{ color: '#06FEE5' }}>empresas constructoras</span> 
              , el control sobre la herramienta y/o material con el que cuentan, sus entradas y salidas. Y conforme lo fui desarrollando 
              mientras recibía retroalimentación por parte de estas empresas, vimos que no solo podría encargarse de ese 
              problema que mencioné antes, sino que se podrían incorporar todos los demás procesos que aparecen en conjunto, 
              cómo lo son los expedientes de cada trabajo que hacen, fechas y órdenes de compra, etc.</Typography>
              <Typography style={{color: 'white', textAlign: 'center', marginBottom: 15}} fontWeight={'bold'}>¿Qué ofrece?</Typography>
            <Grid container direction={'row'} marginBottom={3}>
            <Grid item xs={12} md={6}>
              
                <Typography component="div" style={{color:'white'}}>
                <ul>
                  <li>Generación de vales de herramienta solicitada con información detallada cómo quién lo solicitó, 
                    fecha de entrega, devolución, cantidades exactas…</li>
                  <li>Reduce en gran medida el uso de hojas de papel</li>
                  <li>Reduce la probabilidad de problemas al tener toda la información en un solo archivo</li>
                  <li>Control estructurado de entradas y salidas de la herramienta y equipo </li>
                  <li>Visualización rápida y control de cantidad de la herramienta y equipo</li>
                  <li>Expediente de obras / proyectos con herramienta que se ha utilizado</li>
                  <li>Al ser creado en Excel, ofrece una familiaridad a los usuarios con un entorno en el que ya han trabajado.</li>
                </ul>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} padding={2}>
              <Box sx={{
                backgroundImage: `url(${ExcelPreview2})`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%'}}/>
              </Grid>
            </Grid>
            <Typography style={{color: 'white', marginBottom:'20px', textAlign: 'center'}}>A pesar de mi escepticismo, tengo que admitir que este proyecto resultó ser algo verdaderamente útil, 
              en un principio este sistema iba a atender un solo problema dentro de las <span style={{ color: '#06FEE5' }}>empresas constructoras</span> 
              , el control sobre la herramienta y/o material con el que cuentan, sus entradas y salidas. Y conforme lo fui desarrollando 
              mientras recibía retroalimentación por parte de estas empresas, vimos que no solo podría encargarse de ese 
              problema que mencioné antes, sino que se podrían incorporar todos los demás procesos que aparecen en conjunto, 
              cómo lo son los expedientes de cada trabajo que hacen, fechas y órdenes de compra, etc.</Typography>
            </Grid>
            <Grid item container justifyContent={'center'}>
            <SyntaxHighlighter language="visual-basic" style={irBlack} customStyle={codeStyles.container}>
              {edaCode}
            </SyntaxHighlighter>
            </Grid>            
        </Grid>
        </div>
    </Grid>
    </ThemeProvider>
    <CustomBottomBar scrollToTop={scrollToTop} setOpen={setOpen}/>
    <ResumeDialog open={open} setOpen={setOpen}/>
    {showButton && (
        <button className="scroll-to-top-btn" onClick={()=>{scrollToTop()}}>
          <KeyboardArrowUp/>
        </button>)}    
    </>
}

export default ExcelProject;