import './styling.css';
import { useEffect } from 'react';


export default function ShowLine(props) {
    return (
        <div className="show-line">
            {props.venue}, {props.country} | {props.date}
        </div>);
}