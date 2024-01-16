import './styling.css';
import { useEffect } from 'react';


export default function Show(props) {

    useEffect(() => {
        readCsvFile();
    }, []);

    var readCsvFile = () => {
        var fileReader = new FileReader();

        fileReader.onload = function(e) {
            const text = e.target.result;
            console.log(text)
        }

        fileReader.readAsText(new File([''], './shows.csv'));
    }

    return (
        <div>
            {props.venue},{props.city},{props.country},{props.date}
        </div>);
}