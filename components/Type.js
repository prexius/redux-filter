import { useDispatch } from 'react-redux';
import { typeSelected } from "../redux/filter/filter";

const Type = ({ types }) => {
    const dispatch = useDispatch();
    const handleSelect = (e) => {
        dispatch(typeSelected(e.target.value));
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

export default Type;