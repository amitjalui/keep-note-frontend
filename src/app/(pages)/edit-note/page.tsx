'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Test from '@/components/Test/Test'

const DynamicEditNote = dynamic(() => import('@/components/EditNote/EditNote'), {
  loading: () => <p>LOADING EditNote</p>
})

const page = () => {
  return (
    <>
      <Test />
      <DynamicEditNote />
    </>
  )
}

export default page