import { useState } from 'react'
import Link  from 'next/link'; 
import Card from '../Card/Card'
import { GridContainer } from './GridStyle'
import EditNote from '../EditNote/EditNote';

const Grid = () => {

  const data1 = "";

  const data2 = [1, 1000, 562, 413, 200, 100, 50, 2,];

  return (
    <>
      <GridContainer>
        {
          data2.map(s => (
            <Card key={s} data={data1} he={s} />
          ))
        }
      </GridContainer>
    </>
  )
}

export default Grid