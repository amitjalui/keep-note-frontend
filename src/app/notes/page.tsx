import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div>page</div>
      <Link href="/home"> Go to home page </Link>
    </>
  )
}

export default page