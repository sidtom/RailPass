import React from 'react'
import './title.css';

export default function Title(props:any) {
  return (
    <h1 className='titleCard'>{props.title}</h1>
  )
}
