import React from 'react'
import { useParams } from 'react-router-dom';

const Timing = () => {
  const { stationName } = useParams();
  return (
    <div>{stationName}</div>
  )
}
export default Timing;