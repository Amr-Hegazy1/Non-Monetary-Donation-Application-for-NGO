import {React, useState, useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./FulfilledDonation.css";
import { Modal, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import "./FulfilledDonation.css";


const { confirm } = Modal;

const FulfilledDonations = () => {
  
    const [donations, setDonations] = useState(15);
    const [accordionItems, setAccordionItems] = useState([]);

    const deleteDonation = (title) => {
        let items = [];
        for (let i = 0; i < donations; i++) {
            if ("Donation " + (i+1) !== title) {
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
                        </AccordionActions>
                    </Accordion>
                );
            }
        }
        setAccordionItems(items);
    }
    const [hoveredAccordion, setHoveredAccordion] = useState(null);

    const handleAccordionHover = (index) => {
        setHoveredAccordion(index);
    };

    const handleAccordionLeave = () => {
        setHoveredAccordion(null);
    };

    useEffect(() => {
        let items = [];
        for (let i = 0; i < donations; i++) {
            items.push(
                <Accordion key={i} className='shadow' onMouseEnter={() => handleAccordionHover(i)} onMouseLeave={() => handleAccordionLeave(i)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className={`accordion-summary-text ${hoveredAccordion === i ? 'hovered' : ''}`}
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
                    </AccordionActions>
                </Accordion>
            );
        }
        setAccordionItems(items);
    }, [donations]);



    return (
        <>
            <Container component="main" maxWidth="md">
                <Box
                    sx={{
                        marginTop: 8,
                        marginBottom: 8,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >   
                    <Typography className="center" component="h1" variant="h4" style={{color:'#620b37'}}>
                        View Donation Requests
                    </Typography>
                    
                    {accordionItems}
                </Box>
            </Container>
        </>
    );
};
export default FulfilledDonations;
