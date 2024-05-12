import { React, useState, useEffect } from 'react';
import { Card, CardHeader, Box, Toolbar } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { List } from 'antd';



export default function DeliveryDonations() {

    const data = [
        {
            name: {
                first: "Amr",
                last: "Mohamed"
            },
            quantity: 5,
            checked: true
        },
        {
            name: {
                first: "Ali",
                last: "Ahmed"
            },
            quantity: 3,
            checked: false
        },
        {
            name: {
                first: "Mohamed",
                last: "Ali"
            },
            quantity: 2,
            checked: true
        },
        {
            name: {
                first: "Ahmed",
                last: "Mohamed"
            },
            quantity: 1,
            checked: false
        },
        {
            name: {
                first: "Ali",
                last: "Mohamed"
            },
            quantity: 4,
            checked: true
        },
        {
            name: {
                first: "Mohamed",
                last: "Ahmed"
            },
            quantity: 6,
            checked: false
        },
        {
            name: {
                first: "Ahmed",
                last: "Ali"
            },
            quantity: 7,
            checked: true
        },
        {
            name: {
                first: "Ali",
                last: "Ahmed"
            },
            quantity: 3,
            checked: false
        },
        {
            name: {
                first: "Mohamed",
                last: "Ali"
            },
            quantity: 2,
            checked: true
        },
        {
            name: {
                first: "Ahmed",
                last: "Mohamed"
            },
            quantity: 1,
            checked: false
        },
        {
            name: {
                first: "Ali",
                last: "Mohamed"
            },
            quantity: 4,
            checked: true
        },
        {
            name: {
                first: "Mohamed",
                last: "Ahmed"
            },
            quantity: 6,
            checked: false
        },
        {
            name: {
                first: "Ahmed",
                last: "Ali"
            },
            quantity: 7,
            checked: true
        },
    ]

    const [donationDeliveries, setDonationDeliveries] = useState(data);

    const handleCheckboxChange = (item) => {
        const updatedData = donationDeliveries.map((delivery) => {
            if (delivery.name.first === item.name.first && delivery.name.last === item.name.last) {
                return {
                    ...delivery,
                    checked: !delivery.checked
                }
            }
            return delivery;
        });
        setDonationDeliveries(updatedData);
    }

    return (
        <>
            <Card>
                <CardHeader title={"Deliveries"} subheader={<br />} />
                <List
                style={{marginLeft: "5%", overflow: "auto", height: "53.5vh"}}
                dataSource={donationDeliveries}
                    renderItem={(item, index) => (
                        <List.Item key={index} style={{backgroundColor: (item.checked) ? "#f0f0f0" : "#ffffff"}}>
                            <Checkbox checked={item.checked} onChange={() => {handleCheckboxChange(item)}} />
                            <List.Item.Meta
                                title={(item.checked) ? <a style={{textDecoration: 'line-through'}}>{item.name.first + " " + item.name.last}</a> : <a href="https://ant.design">{item.name.first + " " + item.name.last}</a>}
                                description={(item.checked) ? <p style={{textDecoration: 'line-through'}}>Number of items: {item.quantity}</p> : <p>Number of items: {item.quantity}</p>}
                            />
                            <a href={"/deliveryDonationDetails?fulfilled=" + item.checked}>View Details</a>
                        </List.Item>
                    )}
                />
            </Card>
        </>
    )
}
