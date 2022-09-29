import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from "../redux/tags/tags";
import { resetFilter } from '../redux/filter/filter';
import Tag from './Tag';

const Tags = () => {

    const { tags } = useSelector((state) => state.tags)
    // console.log(tags);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTags())

    }, [dispatch])

    const handleReset = () => {
        dispatch(resetFilter());

    };

    return (
        <>

            {tags?.length > 0 ? <section>
                <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                    {tags.map(tag => <Tag key={tag._id} title={tag.title} />)}

                </div>
            </section> : null}

            <button onClick={handleReset}>Reset</button>


        </>
    );
};

export default Tags;

{/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
    redux
</div> */}