import React from 'react'
import { useGetFilterJobsQuery } from '@redux/features/jobs/jobsApi'
export default function RelatedJobs({country}) {
    const {data} = useGetFilterJobsQuery({country})
    console.log(data);
  return (
    <>
        
    </>
  )
}
