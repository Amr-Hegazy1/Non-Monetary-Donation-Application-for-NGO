import React,{useEffect, useState} from 'react';
import { Button,Flex, Progress } from 'antd';
import DeliveryPerson from './DeliveryPerson.jpg'
import { COLORS } from '../values/colors';


function ViewEstimatedTime(){
    const [hovered, setHovered] = useState(false);
    const [showProgress, setShowProgress] = useState(false);

    const [percent, setPercent] = useState(0);

    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };

    const handleClick = () => {
        setShowProgress(true);
  };

    useEffect(()=>{

      setTimeout(() => {
        setPercent(percent+10);
      }, 1000);

    });

    return(
        <>
        <h2 style={{color:'#620B37' , position:'absolute', top:200, left:580}}>Estimated Time Of Arrival</h2>
       
        <div style={{ position:'absolute',top:300, right:650}}>
        <Flex gap="small" wrap="wrap" >
        <Progress type="circle" percent={percent} strokeColor={{'0%': '#620B37','100%': '#620B37'}} format={(percent) => <div style={{fontSize:20}}> 15 minutes left</div>} />
        </Flex>
        </div>
        
        </>

    );
}

export default ViewEstimatedTime;