import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const WorkList = ({works}) => {

  return (
    <div>
    {works.map((obj) => (
      <div key={obj.id}>
        <p>{obj.name}</p>
        <p>{obj.overview}</p>
        <Link to={`/work/${obj.id}`}>{obj.name} link </Link>
      </div>
    ))}
  </div>
  )
}

export default WorkList