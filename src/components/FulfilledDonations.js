import {React, useState, useEffect} from 'react';
import NavBar from './NavBar';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';
import "../styles/FulfilledDonation.css";
import { Modal, Space } from 'antd';
import { Popconfirm } from 'antd';

const { confirm } = Modal;






const FulfilledDonations = () => {
  

    
    

    const [donations, setDonations] = useState(15);

    const [accordionItems, setAccordionItems] = useState([]);

    const [deletedDonations, setDeletedDonations] = useState([]);



    const deleteDonation = (title) => {
        
        
        let items = [];
        for (let i = 0; i < donations; i++) {
            if ("Donation " + (i+1) !== title && !deletedDonations.includes("Donation " + (i+1))) {
                items.push(
                    <Accordion key={i} className='shadow'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className="accordion-summary-text"
                        >
                        Donation {i+1}
                        </AccordionSummary>
                        <AccordionDetails>
                        Name: Selena Adams <br/>
                        Email: selena.adams@gmail.com <br/>
                        Phone: 123-456-7890 <br/>
                        Address: 1234 Elm Street <br/>
                        Donation Type: Winter Clothes <br/>
                        Occupation: Teacher
                        </AccordionDetails>
                        <AccordionActions>
                        
                        <Popconfirm
                            title="Delete the donation"
                            description="Are you sure to delete this donation?"
                            onConfirm={() => deleteDonation("Donation " + (i+1)) }
                            okText="Yes"
                            cancelText="No"
                            okButtonProps={{ style: {width: "auto"}}}
                            cancelButtonProps={{ style: {width: "auto"}}}
                        >
                            <Button style={{width: "100%"}} color='warning'>Delete</Button>
                        </Popconfirm>
                        <Button style={{width: "100%"}} color='success'>Acknowledge</Button>
                        <Button style={{width: "100%"}} onClick={() => window.location.href = '/fulfilledPostDetails'}>View Details</Button>
                        </AccordionActions>
                </Accordion>
                );
            }

        }
        setAccordionItems(items);
        
        setDeletedDonations([...deletedDonations, title]);
        setDonations(donations - 1);

    }

    

    
    useEffect(() => {
        let items = [];
        for (let i = 0; i < donations; i++) {
            if (deletedDonations.includes("Donation " + (i+1))) {
                continue;
            }
            items.push(
                <Accordion key={i} className='shadow'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className="accordion-summary-text"
                        >
                        Donation {i+1}
                        </AccordionSummary>
                        <AccordionDetails>
                        Name: Selena Adams <br/>
                        Email: selena.adams@gmail.com <br/>
                        Phone: 123-456-7890 <br/>
                        Address: 1234 Elm Street <br/>
                        Donation Type: Winter Clothes <br/>
                        Occupation: Teacher
                        </AccordionDetails>
                        <AccordionActions>
                        <Popconfirm
                            title="Delete the donation"
                            description="Are you sure to delete this donation?"
                            onConfirm={() => deleteDonation("Donation " + (i+1)) }
                            okText="Yes"
                            cancelText="No"
                            okButtonProps={{ style: {width: "auto"}}}
                            cancelButtonProps={{ style: {width: "auto"}}}
                        >
                            <Button style={{width: "100%"}} color='warning'>Delete</Button>
                        </Popconfirm>
                        <Button style={{width: "100%"}} color='success'>Acknowledge</Button>
                        <Button style={{width: "100%"}} onClick={() => window.location.href = '/fulfilledPostDetails'}>View Details</Button>
                        </AccordionActions>
                </Accordion>
            );
        }

        setAccordionItems(items);


    }, [donations]);
    

    const fetchData = () => {
        setDonations(donations + 5);
    }
    
    

    
    return (
    <>
        
        <NavBar/>
        <Container component="main" maxWidth="md" disableGutters>
            <Box
            sx={{
                marginTop: 8,
                marginBottom: 8,
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >   
                <Typography className="center h" component="h1" variant="h4">
                    Fulfilled Donations
                </Typography>
                
                <InfiniteScroll
                dataLength={accordionItems.length}
                next={fetchData}
                hasMore={true}
                loader={""}
               
                endMessage={
                    <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
                >
                {accordionItems}
                </InfiniteScroll>
            </Box>
      </Container>
    </>
    );
};
export default FulfilledDonations;