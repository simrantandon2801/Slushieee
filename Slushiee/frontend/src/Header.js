import React from 'react'
import { Button, Grid, Popper, Typography,Box } from '@mui/material'
import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material'
import Image from 'mui-image'
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Popover from '@mui/material/Popover';
import {Paper} from '@mui/material';
import { styled } from '@mui/system';
 
const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '26px',
    width:'500px',height:'241px',
  },
}));

const Header = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
const handlepopup = (e) => {
setOpen1(true)
console.log('yes ')
}
const handlepopup1 = (e) => {
  setOpen1(false)
  console.log('yes ')
  }
  const handleClose = () => {
    setAnchorEl(null);
   
  };
const handleClosepopup =() =>{
  setOpen(false)
  console.log('yess')
}

  const id = open ? 'popover' : undefined;

  const handleSearch = () => {
    
    console.log('Performing search...');
  };
    
  return (
    <Grid container lg={12}>
        <Grid container lg={10} sx={{margin:'auto',marginTop:'25px'}}>
<Grid container lg={8}>
<Grid item lg={2}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}}  >
<Typography sx={{fontFamily: 'Inter',
fontstyle: 'normal',
fontWeight: 800,
fontSize: 32,
lineHeight: '39px',
color: "#4CA591"}}>LOGO</Typography>
</Grid>
<Grid item lg={1.5}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
{/* <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter'}}>Genres</Typography> */}


<Button
  onClick={handlepopup}
  aria-describedby={id}
  endIcon={<ArrowDropDownIcon style={{ color: 'black' }} />}
><Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter',color:'black',textTransform:'none',textDecoration:'none'}}>Genres</Typography>
</Button>
     
<StyledPopover
        id={id}
        open={open1}
        anchorEl={anchorEl}
        onClose={handlepopup1}
       style={{top:'60px',left:'23%'}}

        
      >
     <Box sx={{ bgcolor: 'background.paper'}}>
        <Grid item lg={12}>
        <Typography sx={{ p: 2,fontSize:'26px',fontWeight:'600',fontFamily:'Inter' }}>Genres</Typography>
        </Grid>
        <Grid container  lg={12}>
          <Grid container lg={12}>
            <Grid container lg={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Adventure</Typography>
</Grid>
<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Horror</Typography>
</Grid>

<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Fantasy</Typography>
</Grid>
<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Fanfiction</Typography>
</Grid>
</Grid>
<Grid container lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Teen fiction</Typography>
</Grid>
<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Paranormal</Typography>
</Grid>

<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Mystery</Typography>
</Grid>
<Grid item lg={11}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Science fiction</Typography>
</Grid>
</Grid>
<Grid container lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Non fiction</Typography>
</Grid>
<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Poetry</Typography>
</Grid>

<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Humor</Typography>
</Grid>
<Grid item lg={10}>
  <Typography sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e'}}>Thriller</Typography>
</Grid>
</Grid>
          </Grid>
         
        </Grid>
        </Box>
        </StyledPopover>
      
</Grid>
<Grid item lg={1.5} sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
<Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter'}}>Lorem</Typography>
</Grid>
<Grid item lg={7}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
<TextField
        placeholder="Search..."
        onChange={handleSearch}
        variant="outlined"
        sx={{
          width: '500px',
          background: '#DAFDF6',
          borderRadius: '25px',
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      </Grid>
</Grid>
<Grid container lg={4}>
    <Grid item lg={12}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
    <Typography onClick={()=>setOpen(true)} sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter'}}>Login</Typography>
    <Dialog open={open} PaperProps={{
										style: {
										  display: "flex",
										  justifyContent: "flex-end",
                      width: "382px", 
      height: "455px",borderRadius:'26px'
										  
										}
									  }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
								>
							
        
              <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' , fontSize: '26px',fontWeight:'700',fontFamily:'Inter', color: '#333333',marginTop: '20px' }}>
      {"Join Slushie"}
      <IconButton onClick={handleClosepopup} color="primary" style={{ position: 'absolute', right: 20, top: 20 }}>
        <CloseIcon style={{ color: '#1e1e1e' }} />
      </IconButton>
    </DialogTitle>
    <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' ,fontSize: '12px',fontWeight:'500',fontFamily:'Inter',marginTop: '-25px'  }}>
      Choose your next  bestseller <br /> with just one click
    </DialogTitle>
          <DialogContent>
          <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FacebookIcon />}
        style={{ borderRadius: '36px', backgroundColor: '#3D5A98',textTransform: 'none' }}
      >
        Sign up with Facebook
      </Button>
    </Grid>
  
    <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' ,marginTop:'12px'}}>
        <Button
    
      color="primary"
      startIcon={<GoogleIcon style={{ color: 'brightred' }} />}
      style={{ borderRadius: '36px', color: '#000000', border: '2px solid #000000',textTransform: 'none' }}
    >
      Sign up with Google
    </Button>

        </Grid>
        <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333' }}>
        OR
      </Typography>
    </Grid>
        <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
        <Button
      variant="contained"
      color="primary"
      
      style={{ borderRadius: '36px', backgroundColor: '#000000',textTransform: 'none',width:'270px',height:'46px' }}
    >
      Sign up with Email
    </Button>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'12px'}}>
       
          <Typography sx={{fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500',color:'#5B5A5A'}}> Already have an account? <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Login</span></Typography>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'26px'}}>
          <Typography style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500' }}>By continuing, you agree to our <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Terms of <br/> Service</span>   and <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Privacy Policy.</span></Typography>
        </Grid>
      </DialogContent>
          <DialogActions style={{ justifyContent: "space-between"}}>
										
          
			
						
          </DialogActions>
          </Dialog>
    </Grid>
    
</Grid>
        </Grid>
    </Grid>
  )
}

export default Header