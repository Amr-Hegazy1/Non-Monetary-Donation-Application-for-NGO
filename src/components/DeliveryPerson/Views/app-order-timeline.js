import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { Row } from 'react-bootstrap';
import { Box } from '@mui/system';
import { fDateTime } from '../Numbers/format-time';
var polyline = require('@mapbox/polyline');

// ----------------------------------------------------------------------

export default function AnalyticsOrderTimeline({ title, subheader, list, ...other }) {

  const [positions, setPositions] = useState([[29.98693069424653, 31.44078789655661], [30.019142726584697, 31.502848351844857], [30.027877723579238, 31.40780920991184], [30.055021659612787, 31.491413814417502], [30.041725104801962, 31.47559474203223], [30.008379942499616, 31.53564169689593]]);

  useEffect(() => {
    // get the positions using GET request from OSRM API
    let retrievedPositions = [];

    let positionString = '';
    positions.forEach((item) => {
      positionString += `${item[1]},${item[0]};`;
    });

    positionString = positionString.slice(0, -1);

    fetch(`http://router.project-osrm.org/route/v1/bike/${positionString}?overview=full`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          retrievedPositions = polyline.decode(data.routes[0].geometry);
          retrievedPositions = retrievedPositions.map((item) => [item[0], item[1]]);
          setPositions(retrievedPositions);
        });
  }, []);

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Row wrap="false">

        <Timeline
          sx={{
            m: 0,
            p: 3,
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
              width: '3%'
            },
            width: '3%',
          }}
        >
          {list.map((item, index) => (
            <OrderItem  key={item.id} item={item} lastTimeline={index === list.length - 1} />
          ))}
        </Timeline>
        
          <MapContainer center={[30.02901194439996, 31.474848982936095]} zoom={12} scrollWheelZoom={false} style={{ height: '50vh', width: '80vh' }} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {[[29.98693069424653, 31.44078789655661], [30.019142726584697, 31.502848351844857], [30.027877723579238, 31.40780920991184], [30.055021659612787, 31.491413814417502], [30.041725104801962, 31.47559474203223], [30.008379942499616, 31.53564169689593]].map((position, index) => (
              <Marker key={index} position={position} />
            ))}
            
            <Polyline positions={positions} />

          </MapContainer>
        
      </Row>
    </Card>
  );
}

AnalyticsOrderTimeline.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function OrderItem({ item, lastTimeline }) {
  const { type, title, time } = item;
  return (
    <TimelineItem style={{width:"30vh"}}>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        {lastTimeline ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent style={{width:"30vh"}}>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {(typeof time === 'number') ? fDateTime(time) : time}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
  lastTimeline: PropTypes.bool,
};
