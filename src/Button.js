import React from 'react';

export const Button = (props)=> {

        return (
            <div >
                <button onClick={props.onClick} disabled={props.checkValue}>{props.label}</button>
            </div>
        );
}