// File: src/app/(pages)/edit-note/page.tsx

'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Test from '@/components/Test/Test';

// Dynamically import the EditNote component with a loading indicator
const DynamicEditNote = dynamic(() => import('@/components/EditNote/EditNote'), {
  loading: () => <p>Loading Edit Note...</p>,
});

// Fetch the data on the server side as part of the Server Component
const Page = () => {
  // Replace with your data-fetching logic
  // const noteData = fetchNoteData(); 

  return (
    <>
      <Test />
      <DynamicEditNote />
    </>
  );
};

export default Page;
