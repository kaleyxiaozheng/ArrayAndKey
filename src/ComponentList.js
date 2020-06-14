import React from 'react';
import { ListItems } from './ListItems';
import './ComponentList.css'
import './Label.css';

export const ComponentList = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItems key={number.toString()} value={number} />
    );

    return(
    <ul>{listItems}</ul>
    );

}