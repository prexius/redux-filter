import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes } from './../redux/types/types';

const AllTypes = () => {
    const { types } = useSelector((state) => state.types);
    const dispatch = useDispatch();
    console.log(types);

    useEffect(() => {
        dispatch(fetchTypes())

    }, [dispatch])



    return (
        <>


        </>
    );
};

export default AllTypes;