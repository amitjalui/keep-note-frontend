import { useState } from 'react'
import Link from 'next/link'
import Card from '../Card/Card'
import { GridContainer } from './GridStyle'
import EditNote from '../EditNote/EditNote';

const Grid = () => {
    
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