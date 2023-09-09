import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink } from 'react-router-dom';
const BreadCrumbs = (props) => {
  return (
    <section className='bg2 first-section' style={{color:"#606060"}}>
    <h1 style={{marginBottom:'4px'}}>{props.name}</h1>
    <Breadcrumbs aria-label="breadcrumb">
        <NavLink to='/' style={{ textDecoration: 'none',color:"#606060" }}>Home</NavLink>
        <Typography>{props.name}</Typography>

      </Breadcrumbs>
    </section>
  )
}

export default BreadCrumbs
