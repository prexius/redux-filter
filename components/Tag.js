import { useDispatch } from "react-redux";
import { tagSelected } from "../redux/filter/filter";

const Tag = ({ tags }) => {
    const dispatch = useDispatch();
    const handleSelect = (e) => {
        dispatch(tagSelected(e.target.value));
    };

    return (
        <>
            <select onChange={handleSelect}>
                <option value=''>All Tags</option>
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