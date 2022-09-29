import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from "../redux/tags/tags";
import Tag from './Tag';

const Tags = () => {
    const { tags } = useSelector((state) => state.tags)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    return (
        <>
            <Tag tags={tags} />
        </>
    );
};

export default Tags;