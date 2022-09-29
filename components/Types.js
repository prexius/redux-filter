import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes } from './../redux/types/types';
import Type from './Type';

const Types = () => {
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();
    // console.log(types);

    useEffect(() => {
        dispatch(fetchTypes())
    }, [dispatch])





    return (
        <>

            <Type types={types} />

        </>
    );
};

export default Types;