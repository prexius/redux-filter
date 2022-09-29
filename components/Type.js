import { useDispatch } from 'react-redux';
import { getTypes } from "../redux/filter/filter";


const Types = ({ types }) => {

    const dispatch = useDispatch();

    const handleSelect = (e) => {
        dispatch(getTypes(e.target.value));
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