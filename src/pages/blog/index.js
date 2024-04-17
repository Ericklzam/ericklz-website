import React, {useState, useEffect} from 'react';
import {Grid, Typography, Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import darkTheme from '../../theme';
import CustomAppBar from '../../components/layout/AppBar';
import ResumeDialog from '../../components/dialogs/ResumeDialog';
import CustomBottomBar from '../../components/layout/BottomBar';
import ExcelFile from '../../assets/img/ExcelFile.png';
import JellyFish from '../../assets/img/Jellyfish.jpg'
import Otgw from '../../assets/img/Otgw.jpg'
import BlogPost from '../../components/BlogPost';
import '../home/styles.css';

const IndexBlog = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    };

    const handleOpen = () => {
        setOpen(true);
    }

    const [showButton, setShowButton] = useState(false);

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

  const handleSelectPost = () => {
    navigate('/blog/excel_project');
  }

    return <>
    <ThemeProvider theme={darkTheme}>
    <Grid>
        <CustomAppBar title={'Home'}/>
        <div className='Body' style={{height: '100%', paddingLeft: '170px', paddingRight:'170px', paddingTop: '50px'}}>
        <Grid container direction='column'>
        {/*MENU */}
        <Grid container direction='row' alignItems={'start'} >
            <Grid item xs={1} container direction="column" spacing={7}>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/')}>Home</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" onClick={() => handleOpen()}>Resume</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" >Blog</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/contact')}>Contact</Typography>
                </Grid>
            </Grid>
            <Grid item xs={3}/>
            <Grid item container direction={'column'}  xs={8} alignContent={'center'} justifyContent={'center'}>
            <Grid item xs={8}><Typography fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginBottom: '30px'}}>
                Posts
            </Typography></Grid>
            <Grid item>
                <Typography fontWeight={'regular'} variant='body1' style={{color:'white'}}>
                    So i was thinking what could i possibly add to this website besides the regular home page and contact page, and 
                    i came up with the idea of showing you some of my personal projects that i have worked on, not the actual code thought... 
                    jk, some of them are on my github so you can steal my sh*t, so here it is...
                </Typography>
                <Box height={'20px'}/>
                <Typography fontWeight={'regular'} variant='body1' style={{color:'white'}}>
                Oh yeah, also i talk about other things besides my projects so this pages doesn't feel empty hahaha
                </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Box height={'80px'}/>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={3}><BlogPost text1="Control de Herramienta (Excel)" text2="Un archivo de excel para empresas constructoras" 
          text3="Erick Lopez" text4="| Apr 21 2024" imageUrl={ExcelFile} sizew="340px" sizeh="300px"
          onClick={()=>{handleSelectPost('/blog/excel_project')}}/></Grid>

          <Grid item xs={3}><BlogPost text1="MasterMind Game (Python)" text2="The classic not so classic game coded on python" 
          text3="Erick Lopez" text4="| Apr 21 2024" imageUrl={JellyFish} sizew="340px" sizeh="300px"
          onClick={()=>{navigate('/blog/mm_project')}}/></Grid>

          <Grid item xs={3}><BlogPost text1="Over the Garden Wall" text2="An analysis of this masterpiece" 
          text3="Erick Lopez" text4="| Apr 21 2024" imageUrl={Otgw} sizew="340px" sizeh="300px"
          onClick={()=>{navigate('/blog/over_the_garden_wall')}}/></Grid>
        </Grid>
        <Box height={'80px'}/>
        </Grid>
        </div>
        <CustomBottomBar scrollToTop={scrollToTop} setOpen={setOpen}/>
    </Grid>
    </ThemeProvider>
    <ResumeDialog open={open} setOpen={setOpen}/>
    {showButton && (
        <button className="scroll-to-top-btn" onClick={()=>{scrollToTop()}}>
          <KeyboardArrowUp/>
        </button>)}
    </>
}
export default IndexBlog