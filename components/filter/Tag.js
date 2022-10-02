import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../redux/filter';

const Tag = ({ title, id }) => {
    const dispatch = useDispatch();
    const { tags } = useSelector((state) => state.filter);
    const isSelected = tags.includes(title) ? true : false;


    const handleSelect = () => {
        if (isSelected) {
            dispatch(tagRemoved(title));
        } else {
            dispatch(tagSelected(title));
        }
    };
    return (
        <>
            <input type="checkbox" id={id} onChange={handleSelect} value={title} />
            <label htmlFor={id}>{title}</label>
        </>
    );
};

export default Tag;