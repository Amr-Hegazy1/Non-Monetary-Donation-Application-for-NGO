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
import glassStarIcon from './icons/icons8-star.png';
import glassProgressIcon from './icons/icons8-progress-48.png'
import glassDeliveryIcon from './icons/icons8-delivery-50.png'
import { Card, CardHeader, Box, Toolbar } from '@mui/material';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { InboxOutlined } from '@ant-design/icons';
import { useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { List } from 'antd';
import DeliveryDonations from './Views/deliveryDonations';
import Header from '../AdminHomePage/Navigations/header';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


// ----------------------------------------------------------------------
const locations = ["AUC", "Cairo Festival City", "Rehab", "Waterway", "Mivida"];
export default function Dashboard() {
    return (
        <ThemeProvider>
            <Header width="100%"/>
            <Container maxWidth="xl" style={{marginTop:"5%"}}>
                <Typography variant="h4" sx={{ mb: 5, color: '#602b37' }}>
                    Hi, Amr 👋
                </Typography>

                <Grid container spacing={3}>
                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Avg. Rating"
                            total={4.6}
                            color="success"
                            icon={<img alt="icon" src={glassStarIcon} />} />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Total Donations Delivered"
                            total={133}
                            color="info"
                            icon={<img alt="icon" src={glassUsersIcon} />} />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Delivery Target Achieved"
                            total={"50%"}
                            color="warning"
                            icon={<img alt="icon" src={glassProgressIcon} />}
                        />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Donations Remaining"
                            total={5}
                            color="error"
                            icon={<img alt="icon" src={glassDeliveryIcon} />}
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
                            <br />

                        </Card>



                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <DeliveryDonations />
                    </Grid>



                    

                    <Grid xs={20} md={13} lg={15}>
                        
                        <AppOrderTimeline
                            title="Route Plans"
                            list={[...Array(5)].map((_, index) => ({
                                id: faker.string.uuid(),
                                title: [
                                    "Ali Ahmed",
                                    "Ahmed Mohamed",
                                    "Mohamed Ahmed",
                                    "Ali Ahmed",
                                    "Amr Hegazy"
                                ][index],
                                type: `request${index + 1}`,
                                time: `@${locations[index]} by ${index + 3}:00 PM`,
                            }))}
                        />
                        
                        
                    </Grid>



                </Grid>
            </Container>
        </ThemeProvider>
    );
}
