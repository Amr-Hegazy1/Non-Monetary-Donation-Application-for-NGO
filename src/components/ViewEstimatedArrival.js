import React,{useEffect, useState} from 'react';
import { Button,Flex, Progress } from 'antd';
import DeliveryPerson from './DeliveryPerson.jpg'
import { COLORS } from '../values/colors';


function ViewEstimatedTime(){
  

    const [percent, setPercent] = useState(0);


    useEffect(()=>{

      setTimeout(() => {
        setPercent(percent+5);
      }, 1000);

    });

    return(
        <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:20}}>
          <Progress 
          type="circle" 
          percent={percent} 
          strokeColor={{'0%': '#620B37','100%': '#620B37'}} 
          format={(percent) => <div style={{fontSize:20}}> {90 - Math.floor(percent*90/100)} Minutes Remaining</div>}
          />
        </div>
        
        </>

    );
}

export default ViewEstimatedTime;