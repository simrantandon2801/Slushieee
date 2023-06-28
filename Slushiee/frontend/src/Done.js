import React from 'react'
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import Image from 'mui-image'
const Done = () => {
    const handleSubmit = async (e) => {

        e.preventDefault();
    }

  return (
    <div>
     <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundImage:'url(https://drive.google.com/uc?export=view&id=14GrzuLdhJEJmdoiwuB55rexlYG1bXN62)',height:'100vh'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: '432px', height: '595px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={12} justifyContent="center" alignItems="center">
        
      <Grid item lg={12} sx={{textAlign:'center',marginTop:'26px'}}>
        <Typography sx={{fontSize:'32px',fontFmaily:'Inter',fontWeight:'800',color:'#4CA591'}}>LOGO</Typography>
      </Grid>
      <Grid item lg={12} sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:'26px',fontFmaily:'Inter',fontWeight:'600',color:'#1E1E1E',marginTop:'11px'}}>All Done !</Typography>
      </Grid>
      <Grid item lg={12} sx={{textAlign:'center',}}>
        <Typography sx={{fontSize:'16px',fontFmaily:'Inter',fontWeight:'500',color:'#1E1E1E',}}>Lorem ipsum amet, dipi
</Typography>
      </Grid>
<Grid item lg={10}>
<Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1f41qJO2k4yH2cPzKGP3ffwzNaptAHago"
        style={{ width: '291px', height: '291px', transitionDuration: '0', animation: '0',   }}
      />
</Grid>
      <Grid item lg={7} sx={{marginTop:'26px'}}>

<Button onClick={handleSubmit}
  type="submit"
  variant="contained"
  sx={{
    mt: 0,
    mb: 0,
    background: '#007F85',
    borderRadius: '8px',
    textTransform: 'none',
    width: '253px',
    height: '48px',
    fontSize: '16px',
    fontFamily: 'Inter',
    fontWeight: '500'
  }}
>
Start exploring
</Button>

</Grid>

      </Grid>
    </Paper>
    </Grid>
</Grid>
    </div>
  )
}

export default Done
