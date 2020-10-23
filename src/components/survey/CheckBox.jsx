import React from 'react'

export const CheckBox = props => {
    return (
        <li className="CheckBox">
            <input key={props.id} onChange={props.handleChange} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
        </li>
    )
}

export default CheckBox