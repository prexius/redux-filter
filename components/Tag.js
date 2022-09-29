import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../redux/filter/filter";

const Tag = ({ tags }) => {
    const dispatch = useDispatch();

    const handleSelect = (e) => {
        dispatch(tagSelected(e.target.value));
    };

    return (
        <>

            <select onChange={handleSelect}>
                <option value=''>All types</option>
                {tags.map((type, i) => (
                    <option key={i} value={type.title}>
                        {type.title}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Tag;