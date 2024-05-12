import { React, useState, useEffect } from 'react';
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
import { Modal, Space, Select } from 'antd';
import { Row } from 'antd';

const { confirm } = Modal;


export default function DonorMyDonations() {

    const [donations, setDonations] = useState(15);

    const [accordionItems, setAccordionItems] = useState([]);

    const [deletedDonations, setDeletedDonations] = useState([]);

    const [filter, setFilter] = useState('All');



    

    


    useEffect(() => {
        let items = [];
        for (let i = 0; i < donations; i++) {
            if (filter === 'Pending' && i % 2 === 1) continue;
            if (filter === 'Fullfilled' && i % 2 === 0) continue;

            items.push(
                <Accordion key={i} className='shadow'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className="accordion-summary-text"
                    >
                        Donation {i + 1}
                    </AccordionSummary>
                    <AccordionDetails>
                        Donation Type: School Supplies <br />
                        Organization: GUC <br />
                        Status: {i % 2 === 0 ? "Pending" : "Fulfilled"} <br />
                        Number of donated items: 5 <br />
                    </AccordionDetails>
                    <AccordionActions>
                        <Button onClick={() => window.location.href = '/donorMyDonationDetails?fulfilled=' + (i % 2 === 0 ? "false" : "true")}>View Details</Button>
                    </AccordionActions>
                </Accordion>
            );
        }

        setAccordionItems(items);


    }, [donations, filter]);


    const fetchData = () => {
        setDonations(donations + 5);
    }




    return (
        <>

            <NavBar />
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
                        My Donations
                    </Typography>
                    <Row wrap={false} style={{ justifyContent: 'center', margin: "2%" }}>
                    <h6 style={{marginTop:"0.5%"}}>Filter Status:</h6>
                    <Select
                        defaultValue="All"
                        style={{
                            width: "80%",
                            marginLeft: "2%",
                           
                        }}
                        onChange={(value) => setFilter(value)}
                        options={[
                            {
                                value: 'All',
                                label: 'All',
                            },
                            {
                                value: 'Pending',
                                label: 'Pending',
                            },
                            {
                                value: 'Fullfilled',
                                label: 'Fullfilled',
                            },
                           
                        ]}
                    />
                
                </Row>
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


}