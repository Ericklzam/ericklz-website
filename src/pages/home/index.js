import React, {useState, useEffect} from 'react';
import {Grid, Typography, IconButton, Button, TextField} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from '../../theme';
import CustomAppBar from '../../components/layout/AppBar';
import CustomBottomBar from '../../components/layout/BottomBar';
import PatterIcon from '../../assets/svg/PatternIcon';
import PortraitPhoto from '../../assets/img/PortraitPhoto.jpg';
import Wero from '../../assets/img/Wero.jpg';
import Austin from '../../assets/img/Austin.jpg';
import Church from '../../assets/img/Church.jpg';
import CDMX from '../../assets/img/CDMX.jpg';
import Jellyfish from '../../assets/img/Jellyfish.jpg'
import { LinkedIn, GitHub } from '@mui/icons-material';
import ItemButton from '../../components/buttons/itemButton'
import './styles.css';
import ResumeDialog from '../../components/dialogs/ResumeDialog';
import InDialog from '../../components/dialogs/SignLogInDialog';

const IndexHome = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    };

    const handleOpen = () => {
        setOpen(true);
    }

    return <>
    <ThemeProvider theme={darkTheme}>
            <Grid>
                <CustomAppBar title={'Home'}/>
                <div className='Body' style={{height: '100%', paddingLeft: '170px', paddingRight:'170px', paddingTop: '50px'}}>
                <Grid container direction='column' alignItems={'space-between'}>
                    {/*FIRST SECTION */}
                    <Grid container direction='row' alignItems={'space-between'} >
                        <Grid item container direction="column" spacing={7} xs={1}>
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
                        </Grid>
                        <Grid item xs={10} justifyContent={'center'} textAlign={'center'}>
                            <PatterIcon/> 
                        </Grid>
                        <Grid item container direction="column" spacing={1} xs={1} alignContent={'end'}>
                        <Grid item alignSelf={'center'} marginBottom={'20px'}>
                            <div className="vertical-line"/>
                        </Grid>
                        <Grid item alignSelf={'center'} marginBottom={'20px'}>
                            <a href="https://github.com/Ericklzam" target="_blank" rel="noopener noreferrer">
                            <GitHub style={{ color: 'white' }}/>
                            </a>    
                        </Grid>
                        <Grid item alignSelf={'center'} marginBottom={'20px'}>
                            <a href="https://www.linkedin.com/in/erickm-lopezzu/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn style={{ color: 'white' }}/>
                            </a>
                        </Grid>
                        </Grid>
                    </Grid>
                    {/*SECOND SECTION */}
                    <Typography xs={12} fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginTop: '100px', marginBottom: '40px'}}>
                        Hi!
                    </Typography>
                    <Grid container direction="row">
                        <Grid item xs={6}>
                        <img src={PortraitPhoto} alt="Preview" style={{height: '350px',width: '550px',borderRadius: '5%',}}/>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography fontWeight={'regular'} variant='body1' style={{color:'white', marginLeft: '40px', marginTop:'200px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor enim non luctus maximus. 
                        Suspendisse pellentesque dui id rhoncus porttitor. Quisque tortor nisl, aliquet eget diam sed, finibus consectetur turpis. 
                        Praesent a accumsan felis. Quisque et porta augue. Maecenas commodo auctor leo eget tempor. 
                        Proin in augue dapibus elit condimentum mollis.
                        </Typography>
                        </Grid>
                    </Grid>
                    {/*THIRD SECTION */}
                    <Grid container direction="row" justifyContent={'space-around'} marginTop={'100px'}>
                        <Grid item container direction="column" xs={5}>
                            <Typography fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginBottom: '40px'}}>
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
                        <Grid item container xs={2} justifyContent={'center'} alignContent={'center'} marginTop={'40px'}>
                            <div className="vertical-line2"></div>
                        </Grid>
                        <Grid item container direction="column" xs={5}>
                            <Typography fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginBottom: '40px'}}>
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
                    <Typography xs={12} fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginTop: '80px'}}>
                        Some Multimedia Content
                    </Typography>
                    <Grid style={{marginBottom:'50px', marginTop:'50px'}}>
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
                <CustomBottomBar>

                </CustomBottomBar>
            </Grid>
        </ThemeProvider>
        <ResumeDialog open={open} setOpen={setOpen}/>
        <InDialog/>
    </>
}
export default IndexHome