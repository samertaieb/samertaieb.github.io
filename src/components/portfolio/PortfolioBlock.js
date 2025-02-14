import React from 'react';
import IconLink from "./IconLink";
import { Box, Typography } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, environment, title } = props;

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} />
         <Typography variant="h4" style={{ marginTop: '1rem', fontWeight: 'bold' }}>{title}</Typography>
         
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'1rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            {/* Live Demo Link */}
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
            
            {/* Environment & Technologies */}
            <Box p={2} border={'2px solid black'} borderRadius={'25px'} width={'80%'} textAlign={'center'}>
               <Typography variant="h6" fontWeight={'bold'}>🛠️ Environment & Technologies</Typography>
               <Typography variant="body1">{environment}</Typography>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
