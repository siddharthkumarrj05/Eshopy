import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import Logo from '../Media/logo.svg';

export default function Footer(){
    return(
        <>
            <Box
    sx={{
      background: '#596775',
      color: '#fff',
      fontFamily: 'sans-serif',
      padding: '60px 0px',
      textAlign: 'center',
      borderTop: '1px solid #ddd',
      marginTop: '50px',
      p: {
        color: '#fff',
        fontSize: '20px',
        fontWeight:'300',
        letterSpacing:'1px',
      },
      'p:last-of-type': {
        color: '#aaaaaa',
        fontSize: '14px',
      }
      
    }}
  >
    <Link to={"/"} style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              textDecoration:'none',
              color:'#fff',
              }}>
              <img src={Logo} alt="Logo" style={{ height: '50px', }} />
              <h1 style={{
                fontFamily: 'fantasy',
                marginTop: '10px',
                marginLeft: '5px',
              }}>Eshopy</h1>
            </Link>
    <br />
    <p>Contact us, track orders, and explore policies and customer support.</p>
    <Box
      sx={{
        paddingTop:'10px',
        paddingBottom:'20px',
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        cursor:'pointer',
        svg: {
          transition: 'color 0.3s ease, transform 0.3s ease',
        },
        'svg:hover': {
          color: '#ebeaea', 
          borderRadius:'50px',
          transform: 'scale(1.1)',
        }
      }}
    >
      <InstagramIcon />
      <YouTubeIcon />
      <FacebookIcon />
    </Box>
    <p>© 2024 Clay Doe. All rights reserved.</p>
  </Box>
        </>
    );
}