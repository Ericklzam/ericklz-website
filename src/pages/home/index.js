import React, {useState, useEffect} from 'react';
import {Grid, Typography, IconButton, Button, TextField} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import darkTheme from '../../theme';
import CustomAppBar from '../../components/layout/AppBar';
import CustomBottomBar from '../../components/layout/BottomBar';
import PatternIcon from '../../assets/svg/PatternIcon';
import PortraitPhoto from '../../assets/img/PortraitPhoto.jpg';
import Wero from '../../assets/img/Wero.jpg';
import Austin from '../../assets/img/Austin.jpg';
import Church from '../../assets/img/Church.jpg';
import CDMX from '../../assets/img/CDMX.jpg';
import Jellyfish from '../../assets/img/Jellyfish.jpg'
import { LinkedIn, GitHub, KeyboardArrowUp } from '@mui/icons-material';
import ItemButton from '../../components/buttons/itemButton'
import './styles.css';
import ResumeDialog from '../../components/dialogs/ResumeDialog';

const IndexHome = () => {
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

  const smallScreenBreakpoint = '(max-width: 768px)'; // Adjust the breakpoint as needed

  // Check if the current screen size matches the small screen breakpoint
  const isSmallScreen = useMediaQuery(smallScreenBreakpoint);

    return <>
    <ThemeProvider theme={darkTheme}>
            <Grid style={{width: "100%"}}>
                <CustomAppBar title={'Home'}/>
                <div className='Body' style={{height: "100%", paddingTop: 50}}>
                <Grid container direction='column'>
                    {/*FIRST SECTION */}
                    <Grid container direction='row' alignItems={'start'} >
                        {isSmallScreen ? null : <Grid item container direction="column" spacing={8} xs={false} sm={1} md={1}>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item">Home</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item" onClick={() => handleOpen()}>Resume</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/blog')}>Blog</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/contact')}>Contact</Typography>
                            </Grid>
                        </Grid>}
                        <Grid item xs={12} sm={isSmallScreen ? 12 : 10} md={10} justifyContent={'center'} textAlign={'center'}>
                            <div className="pattern-icon-container">
                            <PatternIcon/>
                            </div>
                        </Grid>
                        {isSmallScreen ? null : <Grid item container direction="column" spacing={1} xs={false} sm={1} md={1} alignContent={'end'}>
                        <Grid item alignSelf={'center'} marginBottom={5}>
                            <div className="vertical-line"/>
                        </Grid>
                        <Grid item alignSelf={'center'} marginBottom={5}>
                            <a href="https://github.com/Ericklzam" target="_blank" rel="noopener noreferrer">
                            <GitHub style={{ color: 'white' }}/>
                            </a>    
                        </Grid>
                        <Grid item alignSelf={'center'} marginBottom={5}>
                            <a href="https://www.linkedin.com/in/erickm-lopezzu/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn style={{ color: 'white' }}/>
                            </a>
                        </Grid>
                        </Grid>}
                    </Grid>
                    {/*SECOND SECTION */}
                    <Typography xs={12} fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginTop: isSmallScreen ? 50 : 100, marginBottom: 40}}>
                        Hi!
                    </Typography>
                    <Grid container direction="row" justifyContent="center" spacing={2}>

                    <Grid item xs={12} sm={12} md={6} textAlign={'center'}>
                        <img src={PortraitPhoto} alt="Preview" style={{ width: '100%', maxWidth: 550, height: 'auto', borderRadius: '5%' }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography fontWeight="regular" variant="body1" style={{ color: 'white', marginLeft: isSmallScreen ? 0 : 40, marginTop: 20,
                    textAlign: isSmallScreen ? 'center' : 'start'}}>
                        My name is Erick and I am a Software Developer, currently studying Computer Science at EPCC. Born and raised in 
                        Ciudad Juarez, Chihuahua, Mexico. Currently what i am most focus on is in the field of 
                        Front-End and Web-App Development, but in the future i want to specialize in the field of Data Analysis. If you want to
                        check more about me, check out my social networks or blog posts.
                        <br/><br/>
                        I believe in people's pontential and hidden talents, sometimes we encase people's skills on what we thought they should
                        have inside their jobs, associations, communities, not realizing that each person has a unique ability that has not fully
                        develop yet, and we as colleagues is our job to help them to know their true pontential.
                        </Typography>
                    </Grid>
                    </Grid>
                    {/*THIRD SECTION */}
                    <Grid container direction={isSmallScreen ? "column" : "row"} justifyContent={'space-around'} marginTop={isSmallScreen ? 10 : 20} marginBottom={isSmallScreen ? 10 : 20}>
                        <Grid item container direction="column" xs={5}>
                            <Typography fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginBottom: 10}}>
                            Skills
                            </Typography>
                            <Grid item container direction="row" justifyContent={'center'}>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'JavaScript'}/>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'Java'}/>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'C#'}/>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'C++'}/>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'Phyton'}/>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'Swift'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'VBA'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'VB.NET'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'PHP'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'MySQL'}/>

                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'Agile Development & SCRUM'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'User-first Design'}/>

                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'React.js'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'Angular.js'}/>

                                <ItemButton buttonColor={'#2A014B'} buttonHover={'#230039'} text={'MEAN'}/>
                                <ItemButton buttonColor={'#35014B'} buttonHover={'#2A013C'} text={'LAMP'}/>

                                <ItemButton buttonColor={'#35014B'} buttonHover={'#2A013C'} text={'Command Line'}/>
                                <ItemButton buttonColor={'#41014B'} buttonHover={'#300038'} text={'GIT & TFS'}/>
                            </Grid>
                        </Grid>
                        {isSmallScreen ? null : <Grid item container xs={2} justifyContent={'center'} alignContent={'center'} marginTop={'40px'}>
                            <div className="vertical-line2"></div>
                        </Grid>}
                        <Grid item container direction="column" xs={5}  marginTop={isSmallScreen ? 10 : 0}>
                            <Typography fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginBottom: isSmallScreen ? 10 : 20}}>
                            Interests / Hobbies
                            </Typography>
                            <Grid item container direction="row" justifyContent={'center'}>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'Music Production'}/>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'Bass Guitar'}/>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'Guitar'}/>
                                <ItemButton buttonColor={'#110231'} buttonHover={'#09011C'} text={'Ukulele'}/>
                                
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'Deftones'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'Sketching / Drawing'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'Batman'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'One Piece'}/>

                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'BLAME! Manga'}/>
                                
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'Coffee'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'Mojitos'}/>
                                <ItemButton buttonColor={'#22014A'} buttonHover={'#190135'} text={'Clamatos'}/>

                                <ItemButton buttonColor={'#2A014B'} buttonHover={'#230039'} text={'H.P. Lovecraft'}/>
                                <ItemButton buttonColor={'#35014B'} buttonHover={'#2A013C'} text={'義 - 勇 - 仁 - 礼 - 誠 - 名誉 - 忠義'}/>

                                <ItemButton buttonColor={'#35014B'} buttonHover={'#2A013C'} text={'Philosophy'}/>
                                <ItemButton buttonColor={'#41014B'} buttonHover={'#300038'} text={'Theology'}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    {/*FOURTH SECTION */}
                    <Typography xs={12} fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center'}}>
                        Some Cool Photos I've Captured
                    </Typography>
                    <Grid style={{marginBottom:50, marginTop:50}}>
                    <div className="gallery">
                    <div className="gallery-item item1">
                    <img src={Austin} alt="Austin" />
                    </div>
                    <div className="gallery-item item2">
                    <img src={Wero} alt="Wero" />
                    </div>
                    <div className="gallery-item item3">
                    <img src={CDMX} alt="CDMX" />
                    </div>
                    <div className="gallery-item item4">
                    <img src={Church} alt="Church" />
                    </div>
                    <div className="gallery-item item5">
                    <img src={Jellyfish} alt="JellyFish" />
                    </div>
                    {/* Add more gallery items as needed */}
                    </div>
                    </Grid>
                </Grid>
                </div>
                {/*LAST SECTION */}
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
export default IndexHome