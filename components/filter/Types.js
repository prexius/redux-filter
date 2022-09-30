import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes } from "../../redux/types";
import { typeSelected } from "../../redux/filter";

const Types = () => {
    const { types } = useSelector((state) => state.types)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTypes())
    }, [dispatch])

    const handleSelect = (e) => {
        dispatch(typeSelected(e.target.value));
    };

    return (
        <>
            <select onChange={handleSelect}>
                <option value=''>All Types</option>
                {types.map((tag, i) => (
                    <option key={i} value={tag.title}>
                        {tag.title}
                    </option>
                ))}
            </select>

            {/* {types.map((tag, i) => (
                <>
                    <input type="checkbox" id={tag._id} value={tag.title} onChange={handleSelect} />
                    <label htmlFor={tag._id}>{tag.title}</label>
                </>
            ))} */}

        </>
    );
};

export default Types;