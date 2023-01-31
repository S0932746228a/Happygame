import { Button, Typography } from '@mui/material'
import { Box, height, Stack } from '@mui/system'
import React from 'react'
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { purple, red } from '@mui/material/colors';
import Link from 'next/link';


const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })




const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#0ACD7A",
        },
        palette: {
            // This is green.A700 as hex.
            main: '',
        },

    },
});



function infectmain() {
    return (
        <Box width={"100%"} sx={{ pt: "40px" }}>
            <Stack alignItems={"center"}>
                <Box height={10}>
                    <img src='/image/recover/win.svg' />
                </Box>
                <Box width={"420px"}>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start">
                        <Box position={"relative"} sx={{ height: 120, pl: 30 }} zIndex={'tooltip'} >
                            <img src='/image/recover/clounds-1.svg' />
                        </Box>
                    </Stack>
                </Box>
                <ThemeProvider theme={theme}>
                    <Typography position={'relative'} className={myFont.className} sx={{ pt: 0, fontSize: "40px", height: "60px" }} color={'primary'}>
                        +10 POINTS
                    </Typography>
                </ThemeProvider>
                <Box width={"650px"}>
                    <Stack direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-end">
                        <Box position={"relative"} sx={{ height: 20 }} zIndex={'tooltip'} >
                            <img src='/image/recover/clounds-2.svg' />
                        </Box>
                    </Stack>
                </Box>

                <Box width={"300px"}>
                    <Stack direction="row"
                        justifyContent="center"
                        alignItems="flex-end">
                        <Box position={"relative"} sx={{ height: 40 }} zIndex={'tooltip'} >
                            <img src='/image/Infect/profile.svg' />
                        </Box>
                    </Stack>
                </Box>

                <Box width={"350px"}>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start">
                        <Box position={"relative"} sx={{ height: 110, }} zIndex={'tooltip'} >
                            <img src='/image/recover/clounds-3.svg' />
                        </Box>
                    </Stack>
                </Box>
                <Typography className={myFont.className} sx={{ pt: 0, fontSize: "40px", height: "30px" }} >
                    YOU HAS BEEN INFECTED
                </Typography>
                <Typography className={myFont.className} sx={{ pt: 0, fontSize: "40px" }} >
                    BY CHAISTIAN BALE
                </Typography>
                <Link href={"/Home"}>
                    <Button variant="contained" sx={{ height: "54px", width: '186px', mt: 5, boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)" }}>
                        <Typography className={myFont.className} sx={{ p: 0, fontSize: "25px", height: "45px" }} >
                            CONTINUE
                        </Typography>
                    </Button>
                </Link>


            </Stack>


        </Box>

    )
}

export default infectmain