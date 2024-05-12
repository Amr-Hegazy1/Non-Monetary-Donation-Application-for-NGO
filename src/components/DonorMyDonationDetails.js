import React from 'react';
import { Avatar, List, } from 'antd';
import { Flex } from 'antd';
import { Divider } from 'antd';
import { useSearchParams } from 'react-router-dom';
import NavBar from './NavBar';
import Container from '@mui/material/Container';
import { FaChair } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsBookshelf } from "react-icons/bs";
import ViewEstimatedTime from './ViewEstimatedArrival';


export default function DonorMyDonationDetails() {
    const [searchParams] = useSearchParams();
    const fulfilled = searchParams.get('fulfilled');

    const donationItems = [
        {
            title: 'Chair',
            quantity: 1,
            icon: <FaChair />,
        },
        {
            title: 'Table',
            quantity: 1,
            icon: <MdTableRestaurant />,
        },
        {
            title: 'Book',
            quantity: 1,
            icon: <FaBook />,

        },
        {
            title: 'Shelf',
            quantity: 1,
            icon: <BsBookshelf />,
        },
    ];

    const data = Array.from({
        length: 1,
    }).map((_, i) => ({
        description: 'Donation Details',
        content: (
            <ul style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px', listStyleType: 'disc' }}>
                <li><p style={{ fontWeight: 'bold' }}>Donation Type:</p>School Supplies</li>
                <p></p>
                <li><p style={{ fontWeight: 'bold' }}>Organization:</p>GUC</li>
                <p></p>
                <li><p style={{ fontWeight: 'bold' }}>Status:</p>{fulfilled === 'true' ? 'Fulfilled' : 'Pending'}</li>
                <p></p>
                <li><p style={{ fontWeight: 'bold' }}>Number of donated items:</p>5</li>
                <p></p>
                <li><p style={{ fontWeight: 'bold' }}>Donated Items:</p>
                    <List
                        style={{ marginLeft: '-2%'}}
                        itemLayout="horizontal"
                        size='small'
                        dataSource={donationItems}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                style={{ marginBlockEnd: '0%'}}
                                    avatar={<Avatar icon={item.icon} />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={`Quantity: ${item.quantity}`}
                                />
                            
                            </List.Item>
                            
                            
                        )}
                    
                    />
                </li>

            </ul>
        ),
    }));
    return (<>
        <NavBar />
        <Container component="main" maxWidth="md">
            
            <List
                itemLayout="vertical"
                size="large"
                marginCentre='35px'
                dataSource={data}
                renderItem={(item) => (
                    <>
                        <List.Item
                            key={item.title}
                        >
                            <List.Item.Meta

                                title={<a href={item.href} style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', color: '#620b37', fontWeight: 'bold', textDecoration: 'none' }}>{item.title}</a>}
                                description={<span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', color: '#666', fontStyle: 'italic', marginLeft: "4%" }}>{<>{(fulfilled === 'false') ?  <ViewEstimatedTime /> : null}<br/>{item.description}</>}</span>} />

                            {<span style={{ fontSize: '20px', fontFamily: 'Times New Roman, sans-serif', color: '#333', lineHeight: '1.6' }}>{item.content}</span>}
                        </List.Item>

                    </>
                )}
            />
        </Container>
    </>
    );
}
