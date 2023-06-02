import { useGetAlljobsQuery } from "@redux/features/jobs/jobsApi"
import Link from "next/link"
function Home() {
    const { data, error, isLoading } = useGetAlljobsQuery()
    // console.log(data)
    return (
        <>
            {data?.products.map((d, i) => (
                <h2 key={i}>
                    <Link href={`/jobs/${d._id}`}>
                        {d.jobTitle}
                    </Link>
                </h2>)
            )}

        </>
    )
}

export default Home;


