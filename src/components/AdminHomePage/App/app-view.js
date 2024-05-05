import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from '../../iconify';

import AppTasks from '../Views/app-tasks';
import AppNewsUpdate from '../Views/app-news-update';
import AppOrderTimeline from '../Views/app-order-timeline';
import AppCurrentVisits from '../Views/app-current-visits';
import AppWebsiteVisits from '../Views/app-website-visits';
import AppWidgetSummary from '../Views/app-widget-summary';
import AppTrafficBySite from '../Views/app-traffic-by-site';
import AppCurrentSubject from '../Views/app-current-subject';
import AppConversionRates from '../Views/app-conversion-rates';
import glassBagIcon from '../icons/ic_glass_bag.png';
import glassUsersIcon from '../icons/ic_glass_users.png';
import glassMessageIcon from '../icons/ic_glass_message.png';
import glassBuyIcon from '../icons/ic_glass_buy.png';
import glassTickIcon from '../icons/ic-glass-tick.png';


// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back Admin 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Donations"
            total={7140}
            color="success"
            icon={<img alt="icon" src={glassTickIcon} />}          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={135255}
            color="info"
            icon={<img alt="icon" src={glassUsersIcon} />}            />
        </Grid>
      
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Donation Requests"
            total={1724}
            color="warning"
            icon={<img alt="icon" src={glassBuyIcon}/>}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src={glassMessageIcon}/>}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Fullfilled Donations"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Organisation A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Organsiation B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Organisation C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Donations Contributions"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
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
                { name: 'Organisation 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Organisation 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Organisation 3', data: [44, 76, 78, 13, 43, 10] },
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
  );
}
