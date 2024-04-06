import { useState } from 'react'
import { Card } from '@/components'
import { GridContainer } from './Grid.styles'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { selectNotesData, notesData } from '@/lib/features/notes/noteDataSlice'

const Grid = () => {

  const currentNoteData = useAppSelector(selectNotesData)


  const data2 = [1, 1000, 562, 413, 200, 100, 50, 2,];


  return (
    <>
      <GridContainer>
        {
          currentNoteData.map((data) => (
            <Card key={data.id} data={data} />
          ))
        }
      </GridContainer>
    </>
  )
}

export default Grid