import React, { useEffect, useState } from 'react'
import Papa from "papaparse"
import TourData from "../assets/shows.csv";
import Show from './Show';

interface ShowData {
    venue: string,
    city: string;
    country: string;
    date: string;
    note: string;
    ticket_link: string;
}

const Tour: React.FC = () => {

    const [csvData, setCsvData] = useState<ShowData[]>([]);
    const [bodyText, setBodyText] = useState<string>('')
    
    useEffect(() => {
        fetchCsvData()
    }, []);

    const fetchCsvData = async () => {
        Papa.parse(TourData, {
            header: true,
            download: true,
            skipEmptyLines: true,
            delimiter: ",",
            complete: (results: any) => {
                const showData: ShowData[] = results.data;
                setCsvData(showData);
                if (showData.length === 0)
                    setBodyText('No shows currently announced.');
            },
          })
    }

    return (
        <div className='tour'>
            {csvData.length === 0 ?
                bodyText
            :csvData.map((show) => {
                return <Show {...show} />
                })
            }
        </div>
    )
}

export default Tour
