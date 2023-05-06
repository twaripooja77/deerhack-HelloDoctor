import React from 'react';
import './Header.css';
import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import hdlogo from'./images/hdlogo.png';
import { Link } from 'react-router-dom';

// import LoginIcon from '@mui/icons-material/Login';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F2F5F7",
  '&:hover': {
    backgroundColor: '#E8ECEE',
  },
  borderRadius:'30px',
  marginLeft: 0,
  width: '100%',
 
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
   
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));




export default function Header() {
  return (
    
    <div className='header'>
        <div className='header_left'>
          <img src={hdlogo}/>
        <Typography variant="h1"  sx={{color:"#0B0132", fontSize:'30px', fontWeight:600, mt:'7px'}}>Hello Doctor</Typography>

        </div>
            <div className='header_middle'>
              

            <Typography variant="h3"  sx={{color:"#0B0132", fontSize:'22px', fontWeight:400, mt:'7px', mr:'30px'}} component={Link} to="/doctors">Doctors</Typography>
            
            <Typography variant="h3"  sx={{color:"#0B0132", fontSize:'22px', fontWeight:400, mt:'7px', mr:'30px'}} component={Link} to="/medicines">Medicines</Typography>
            <Typography variant="h3"  sx={{color:"#0B0132", fontSize:'22px', fontWeight:400, mt:'7px', mr:'30px'}} component={Link} to="/labtests">Lab Tests</Typography>
            <Typography variant="h3"  sx={{color:"#0B0132", fontSize:'22px', fontWeight:400, mt:'7px', mr:'30px'}}>About Us</Typography>
            <Typography variant="h3"  sx={{color:"#0B0132", fontSize:'22px', fontWeight:400, mt:'7px', mr:'30px'}}>About Us</Typography>

            </div>
                <div className='header_right'>
                   <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                </div>

            
      

      
    </div>
  )
}
