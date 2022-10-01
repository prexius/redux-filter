import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes } from "../../redux/types";
import { typeSelected } from "../../redux/filter";
import Type from './Type';

const Types = () => {
    const { types } = useSelector((state) => state.types)
    
    const dispatch = useDispatch()


    

    useEffect(() => {
        dispatch(fetchTypes())
    }, [dispatch])



    return (
        <>
            {/* <select onChange={handleSelect}>
                <option value=''>All Types</option>
                {types.map((tag, i) => (
                    <option key={i} value={tag.title}>
                        {tag.title}
                    </option>
                ))}
            </select> */}

            {types.map((type, i) => (<Type  key={type._id} id={type._id} title={type.title}/>))}

        </>
    );
};

export default Types;