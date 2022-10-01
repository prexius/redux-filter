import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typeRemoved, typeSelected } from '../../redux/filter';

const Type = ({ title, id }) => {
    const dispatch = useDispatch();
    const { types } = useSelector((state) => state.filter);
    const isSelected = types.includes(title) ? true : false;


    const handleSelect = () => {
        if (isSelected) {
            dispatch(typeRemoved(title));
        } else {
            dispatch(typeSelected(title));
        }
    };
    return (
        <>
            <input type="checkbox" id={id} onChange={handleSelect} value={title} />
            <label htmlFor={id}>{title}</label>
        </>
    );
};

export default Type;