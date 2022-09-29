import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../redux/filter/filter";

const Tag = ({ tags }) => {
    const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector((state) => state.filter);


    // const isSelected = selectedTags.includes(title) ? true : false;

    // console.log(tags);

    // const style = "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";

    const handleSelect = (e) => {
        dispatch(tagSelected(e.target.value));
        console.log(e.target.value);
    };

    return (
        <>
            {/* <div onClick={handleSelect}>
                {tags.map(tag => (
                    tag.title
                ))}
            </div> */}

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