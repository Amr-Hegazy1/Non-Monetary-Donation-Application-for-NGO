import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Row } from 'antd';
import ThemeProvider from './theme';
import AppTasks from './Views/app-tasks';
import AppNewsUpdate from './Views/app-news-update';
import AppOrderTimeline from './Views/app-order-timeline';
import AppCurrentVisits from './Views/app-current-visits';
import AppWebsiteVisits from './Views/app-website-visits';
import AppWidgetSummary from './Views/app-widget-summary';
import AppTrafficBySite from './Views/app-traffic-by-site';
import AppCurrentSubject from './Views/app-current-subject';
import AppConversionRates from './Views/app-conversion-rates';
import glassBagIcon from './icons/ic_glass_bag.png';
import glassUsersIcon from './icons/ic_glass_users.png';
import glassMessageIcon from './icons/ic_glass_message.png';
import glassBuyIcon from './icons/ic_glass_buy.png';
import glassTickIcon from './icons/ic-glass-tick.png';
import { Card, CardHeader, Box, Toolbar } from '@mui/material';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { InboxOutlined } from '@ant-design/icons';
import { useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Header from '../AdminHomePage/Navigations/header';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


// ----------------------------------------------------------------------

export default function Dashboard() {
    return (
        <ThemeProvider>
            
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5, color: '#602b37' }}>
                    Hi, Amr 👋
                </Typography>

                <Grid container spacing={3}>
                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Avg. Rating"
                            total={4.6}
                            color="success"
                            icon={<img alt="icon" src={glassTickIcon} />} />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Total Donations Delivered"
                            total={135255}
                            color="info"
                            icon={<img alt="icon" src={glassUsersIcon} />} />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Donation Requests"
                            total={1724}
                            color="warning"
                            icon={<img alt="icon" src={glassBuyIcon} />}
                        />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Bug Reports"
                            total={234}
                            color="error"
                            icon={<img alt="icon" src={glassMessageIcon} />}
                        />
                    </Grid>

                    <Grid xs={12} md={6} lg={8}>

                        <Card>
                            <CardHeader title={"Current Location"} subheader={<br />} />

                            <Box sx={{ mx: 3 }}>
                                <MapContainer center={[29.98693069424653, 31.44078789655661]} zoom={20} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }} >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker position={[29.98693069424653, 31.44078789655661]} />



                                </MapContainer>
                            </Box>
                            <br/>

                        </Card>



                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <AppTasks
                            title="Tasks"
                            list={[
                                { id: '1', name: 'View Bug reports' },
                                { id: '2', name: 'Meeting with Organisation A' },
                                { id: '3', name: 'View reported users' },
                                { id: '4', name: 'Meeting with developers' },
                                { id: '5', name: 'Accept/reject Requests' },
                            ]}
                        />
                    </Grid>

                    <Grid xs={12} md={8} lg={8}>
                        <AppConversionRates
                            title="New Users per Country"
                            subheader="(+43%) than last year"
                            chart={{
                                series: [
                                    { label: 'Italy', value: 400 },
                                    { label: 'Japan', value: 430 },
                                    { label: 'China', value: 448 },
                                    { label: 'Canada', value: 470 },
                                    { label: 'France', value: 540 },
                                    { label: 'Germany', value: 580 },
                                    { label: 'South Korea', value: 690 },
                                    { label: 'Netherlands', value: 1100 },
                                    { label: 'United States', value: 1200 },
                                    { label: 'United Kingdom', value: 1380 },
                                ],
                            }}
                        />
                    </Grid>

                    <Grid xs={12} md={6} lg={4}>
                        <AppCurrentSubject
                            title="Current Targets Achieved"
                            chart={{
                                categories: ['Clothes', 'Books', 'Medical Supplies', 'Blood donations', 'Teaching'],
                                series: [
                                    { name: 'Organization 1', data: [80, 50, 30, 40, 100, 20] },
                                    { name: 'Organization 2', data: [20, 30, 40, 80, 20, 80] },
                                    { name: 'Organization 3', data: [44, 76, 78, 13, 43, 10] },
                                ],
                            }}
                        />
                    </Grid>



                    <Grid xs={12} md={6} lg={8}>
                        <AppOrderTimeline
                            title="Requests Timeline"
                            list={[...Array(5)].map((_, index) => ({
                                id: faker.string.uuid(),
                                title: [
                                    '1983, Requests, books',
                                    '12 requested  by Organisation A',
                                    'Reuest #37745 from September',
                                    'New Request placed #XF-2356',
                                    'New Request placed #XF-2346',
                                ][index],
                                type: `request${index + 1}`,
                                time: faker.date.past(),
                            }))}
                        />
                    </Grid>


                    <Grid xs={12} md={6} lg={4}>
                        <AppTasks
                            title="Tasks"
                            list={[
                                { id: '1', name: 'View Bug reports' },
                                { id: '2', name: 'Meeting with Organisation A' },
                                { id: '3', name: 'View reported users' },
                                { id: '4', name: 'Meeting with developers' },
                                { id: '5', name: 'Accept/reject Requests' },
                            ]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
