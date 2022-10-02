import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from "../../redux/tags";
import { tagSelected } from "../../redux/filter";
import Tag from './Tag';

const Tags = () => {
    const { tags } = useSelector((state) => state.tags)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    const handleSelect = (e) => {
        dispatch(tagSelected(e.target.value));
    };

    return (
        <>
             {tags?.length > 0 ? <section>
                <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                    {tags.map(tag => <Tag key={tag.id} id={tag.id} title={tag.title} />)}
                </div>
            </section> : null}
        </>
    );
};

export default Tags;