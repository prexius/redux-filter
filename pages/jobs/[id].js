import { useGetJobByIdQuery } from '@redux/features/jobs/jobsApi'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function JobDetails() {
    const router = useRouter()
    const { id } = router.query
    const { data, error, isLoading } = useGetJobByIdQuery(id)
    console.log(data)
    return (
        <>
            
                <h2>
                    <Link href={`/jobs/${data?.data._id}`}>
                        {data?.data.jobTitle}
                    </Link>
                </h2>
        </>
    )
}
