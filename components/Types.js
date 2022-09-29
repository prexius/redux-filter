import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChosenType } from '../redux/types/typesApi';
import { fetchTypes } from './../redux/types/types';

const Types = () => {
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();

    const [selectType, setSelectedType] = useState("")
    // console.log(selectType);

    useEffect(() => {
        dispatch(fetchTypes())
    }, [dispatch])

    const changeTypeHandler = (e) => {
        dispatch(setSelectedType(e.target.value))
    };



    return (
        <>
            <select onChange={changeTypeHandler}>
                <option value=''>All types</option>
                {types.map((type, i) => (
                    <option key={i} value={type.title}>
                        {type.title}
                    </option>
                ))}
            </select>

        </>
    );
};

export default Types;