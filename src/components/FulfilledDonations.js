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
import { ExclamationCircleFilled } from '@ant-design/icons';

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
                        Name: John Doe <br/>
                        Email: mail@example.com <br/>
                        Phone: 123-456-7890 <br/>
                        Address: 1234 Elm Street <br/>
                        Occupation: Doctor
                        </AccordionDetails>
                        <AccordionActions>
                        <Button color='warning' onClick={() => showDeleteConfirm("Donation " + (i+1))}>Delete</Button>
                        <Button color='success'>Acknowledge</Button>
                        </AccordionActions>
                </Accordion>
                );
            }

        }
        setAccordionItems(items);
        
        setDeletedDonations([...deletedDonations, title]);
        setDonations(donations - 1);

    }

    const showDeleteConfirm = (title) => {
        confirm({
          title: 'Are you sure delete this donation?',
          icon: <ExclamationCircleFilled />,
          content: '',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            deleteDonation(title);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };

    
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
                        Name: John Doe <br/>
                        Email: mail@example.com <br/>
                        Phone: 123-456-7890 <br/>
                        Address: 1234 Elm Street <br/>
                        Occupation: Doctor
                        </AccordionDetails>
                        <AccordionActions>
                        <Button color='warning' onClick={() => showDeleteConfirm("Donation " + (i+1))}>Delete</Button>
                        <Button color='success'>Acknowledge</Button>
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
        <Container component="main" maxWidth="md">
            <Box
            sx={{
                marginTop: 8,
                marginBottom: 8,
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >   
                <Typography className="center" component="h1" variant="h4">
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