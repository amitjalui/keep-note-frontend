import { useState } from 'react'
import Link  from 'next/link'; 
import Card, {LinkedCard} from '../Card/Card'
import { GridContainer } from './Grid.styles'
import EditNote from '../EditNote/EditNote';

const Grid = () => {

  const data1 = "";

  const data2 = [1, 1000, 562, 413, 200, 100, 50, 2,];

  return (
    <>
      <GridContainer>
        {
          data2.map((s, i) => (
              <Card key={s} data={data1} he={s} id={i} />
          ))
        }
      </GridContainer>
    </>
  )
}

export default Grid