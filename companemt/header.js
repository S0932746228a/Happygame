import localFont from '@next/font/local'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Bettle from './bettle'
import { Button, Link } from '@mui/material';


const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#fff",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#FFC05F',
        },
    },
});


const Top = () => {
    return (
        <Stack alignItems="center">



            <Box
                sx={{
                    maxWidth: "100%",
                    height: "340px",
                    width: '100%',
                    position: 'relative',
                    

                }}>
                    <Box sx={{
                        position: 'absolute',
                        zIndex: 'tooltip',
                        height: "340px",
                       
                      
                    }}>
                       <img src="/image/bar_bg.png" />
                    </Box>
                

                <Box maxWidth="100%" sx={{
                    position: 'relative ',
                    zIndex: 'modal',
                }}>
                    <ThemeProvider theme={theme}>
                        <Stack direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={0}>
                            <Box>
                                <Stack direction="row" sx={{ pl: 1, fontSize: 30 }} >
                                    <img src="/image/taket.svg" />
                                    <Typography className={myFont.className} sx={{ pl: 1, fontSize: 30 }} color={"secondary"} >500</Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" sx={{ pr: 1, fontSize: 30 }}>

                                    <Typography className={myFont.className} sx={{ pr: 1, fontSize: 30 }} color={"secondary"} >HELP</Typography>
                                    <img src="/image/book.svg" />
                                </Stack>
                            </Box>
                        </Stack>
                    </ThemeProvider>

                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 'tooltip',
                        width: '100%',

                    }}>

                    <Stack justifyContent="center"
                        alignItems="center" sx={{ mt: 2 }}>
                        <img src='/image/PF1.png' />
                    </Stack>
                    <Stack justifyContent="center"
                        alignItems="center"
                        sx={{ height: 18 }}>
                        <Typography className={myFont.className} variant='h4' >CHRISTOPHER NOLAN</Typography>
                    </Stack>
                    <Stack justifyContent="center"
                        direction="row"
                        alignItems="center"
                    >

                        

                        <Box sx={{
                            pt: 3,
                            position: 'absolute ',
                            zIndex: 'modal',
                        }}>
                            <Typography className={myFont.className} fontSize={"27px"} sx={{ mb: 0 }} >BOBIX</Typography>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            zIndex: 'tooltip',
                            pt: 7,
                        }}>
                            <  img src='/image/flower-bg.svg' />
                        </Box >




                    </Stack>

                    <Stack justifyContent="center"
                        alignItems="center">
                        <Box sx={{
                            position: 'absolute',
                            zIndex: 'modal',
                            pt: 18.6

                        }}>
                            <img src='/image/wall_bar.png' />
                        </Box >

                    </Stack>
                    <Bettle />


                </Box>

            </Box >


        </Stack>

    );
}

export default Top;
