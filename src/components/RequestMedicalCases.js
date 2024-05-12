import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { ReactTags } from 'react-tag-autocomplete'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Image,message } from 'antd';
import book from './book.png'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import { Upload, Divider } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'animate.css';
import RequestDoc from './RequestDoc.png';
import NavBar from './NavBar';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          ZOMA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  const defaultTheme = createTheme();
  export default function RequestMedicalCases() {
    const [specialty, setSpecialty] = React.useState('');
    const [area, setArea] = React.useState('');
    const [governorate, setGovernorate] = React.useState('');

    const success = () => {
       message
         .loading('Sending request to admin..', 1.5)
         .then(() => {
          message.success('Request sent to Admin, wait for approval :)', 1.5).then(() => {
            window.location.href = '/';
          
          });
        })
     };

     const handleSubmit = (event) => {
       event.preventDefault();
       if (!specialty ) {
         message.error('Please enter Speciality.');
       } else if (!area) {
          message.error('Please enter Area.');
       }
       else if (!governorate) {
         message.error('Please enter Governorate.');
       } else {
        success();
       }
     };

     return(
                
       
      <>        
      <NavBar/>
       <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
           sx={{
             marginTop: 2,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
           }}
         >
<Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 2,
              width: '100%', 
            }}
          >
            <Box
              sx={{
                width: 400,
                height: 300,
                backgroundImage: `url(${RequestDoc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Box>
   <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
         <Grid container spacing={2}>
           <Grid item xs>
               <TextField
                   margin="normal"
                   required
                   fullWidth
                   
                   label="Specialty"
                   autoFocus
                   value={specialty}
                   onChange={(event)=>setSpecialty(event.target.value)}
                   />
           </Grid>
           <Grid item>
                   <TextField
                   margin="normal"
                   required
                   fullWidth
                   
                   label="Area"
                   
                   value={area}
                   onChange={(event)=>setArea(event.target.value)}
                   />
           </Grid>
           </Grid>
           <TextField
             margin="normal"
             required
             fullWidth
             label="Governorate"
             
             value={governorate}
             onChange={(event)=>setGovernorate(event.target.value)}
             
           />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             className="btn"
             sx={{ mt: 3, mb: 2 }}
             style={{ backgroundColor: '#620b37', borderColor: '#620b37' }}
           >
             Submit
           </Button>
         </Box>
       </Box>
       <Copyright sx={{ mt: 8, mb: 4 }} />
     </Container>
   </>
 );
}