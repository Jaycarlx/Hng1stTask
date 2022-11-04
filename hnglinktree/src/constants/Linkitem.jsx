import React from 'react'
import { Link } from 'react-router-dom'


const Linkitem = (props) => {
  return (
    <Link to={props.linkTo} key={props.key} id={props.linkID}> {props.linkText} </Link>
  )
}

export default Linkitem