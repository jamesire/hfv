import './styling.css';
import { useEffect } from 'react';


export default function ShowList(props) {

    return (
        <div>
            {props.venue},{props.city},{props.country},{props.date}
        </div>);
}