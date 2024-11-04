import React from 'react'
import { useParams, useLocation } from 'react-router-dom';


const Timing = () => {
  const { stationCode } = useParams();  
  console.log(stationCode);  
  const location = useLocation();
  const trainData = location.state?.data;
console.log(trainData);
  return (
    <div>{stationCode}</div>
  )
}
export default Timing;