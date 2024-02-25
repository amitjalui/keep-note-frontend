import { useState } from 'react'
import Link from 'next/link'
import Card from '../Card/Card'
import { GridContainer } from './GridStyle'
import EditNote from '../EditNote/EditNote';

const Grid = () => {

  const data1 = <>
    CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
      CardContainer<br/>
  </>
    
  return (
    <>
      <GridContainer>
        <Link href="/edit-note">
          <Card />
        </Link>
        <Link href="/edit-note">
          <Card />
        </Link>
        <Link href="/edit-note">
          <Card />
        </Link>
        <Link href="/edit-note">
          <Card />
        </Link>
        <Link href="/edit-note">
          <Card />
        </Link>
        <Link href="/edit-note">
          <Card />
        </Link>
        <Link href="/edit-note">
          <Card />
        </Link>
      </GridContainer>
    </>
  )
}

export default Grid