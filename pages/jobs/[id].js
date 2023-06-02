import RelatedJobs from '@components/RelatedJobs'
import { useGetJobByIdQuery } from '@redux/features/jobs/jobsApi'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function JobDetails() {
    const router = useRouter()
    const { id } = router.query
    const { data, error, isLoading } = useGetJobByIdQuery(id)
    // console.log(data?.data.country)
    return (
        <>

            <h2>
                <Link href={`/jobs/${data?.data._id}`}>
                    {data?.data.jobTitle}
                </Link>
                <RelatedJobs country={data?.data.country}/>
            </h2>
        </>
    )
}
