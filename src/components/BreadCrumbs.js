import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const BreadCrumbs = (props) => {
  return (
    <section className='bg2 first-section' style={{color:"#606060"}}>
    <h1 style={{marginBottom:'4px'}}>{props.name}</h1>
    <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" style={{textDecoration:'none',color:"#606060"}}>
          Home
        </Link>
        <Typography>{props.name}</Typography>
      </Breadcrumbs>
    </section>
  )
}

export default BreadCrumbs
