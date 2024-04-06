'use client'

import React from 'react';
import { LeftDrawerContainer, Overlay } from './LeftDrawer.styles'
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { selectLeftDrawerIsOpen, toggleLeftDrawer } from '@/lib/features/leftDrawer/leftDrawerSlice'


const LeftDrawer = () => {
  const currentLeftDrawer = useAppSelector(selectLeftDrawerIsOpen);
  const dispatch = useAppDispatch();
  
  return (
    <>
      <LeftDrawerContainer $isOpen={currentLeftDrawer} >
        LeftDrawer
      </LeftDrawerContainer>
      <Overlay $isOpen={currentLeftDrawer} onClick={() => dispatch(toggleLeftDrawer())} />
    </>
  )
}

export default LeftDrawer;
