import { useGetAlljobsQuery } from "@redux/features/jobs/jobsApi"
import Link from "next/link"
function Home() {
    const { data, error, isLoading } = useGetAlljobsQuery()
    console.log(data)
    return (
        <>
            {/* {data?.map((d, i) => (
                <h2 key={i}>
                    <Link href={`/post/${d.id}`}>
                        {d.title}
                    </Link>
                </h2>)
            )} */}

        </>
    )
}

export default Home;


