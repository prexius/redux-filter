import { useDispatch, useSelector } from 'react-redux';
import { getTypes, tagSelected } from "../redux/filter/filter";


const Types = ({ types }) => {

    const dispatch = useDispatch();
    const { types: selectedTypes } = useSelector((state) => state.filter);

   
    

    const handleSelect = () => {
            dispatch(getTypes());
    };


    return (
        <>
            <select onChange={handleSelect}>
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