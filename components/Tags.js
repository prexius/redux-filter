import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from "../redux/tags/tags";
import { tagSelected } from "../redux/filter/filter";

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
            <select onChange={handleSelect}>
                <option value=''>All Tags</option>
                {tags.map((tag, i) => (
                    <option key={i} value={tag.title}>
                        {tag.title}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Tags;