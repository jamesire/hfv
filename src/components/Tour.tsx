import React, { useEffect, useState } from 'react'
import Papa from "papaparse"
import TourData from "../assets/shows.csv";
import Show from './Show';

interface ShowData {
    venue: string,
    city: string;
    country: string;
    date: string;
    ticket_link: string;
}

const Tour: React.FC = () => {

    const [csvData, setCsvData] = useState<ShowData[]>([]);
    
    useEffect(() => {
        fetchCsvData();
    }, []);

    const fetchCsvData = async () => {
        Papa.parse(TourData, {
            header: true,
            download: true,
            skipEmptyLines: true,
            delimiter: ",",
            complete: (results: any) => {
                const showData: ShowData[] = results.data;
                console.log(showData)
                setCsvData(showData);
            },
          })
    }

    return (
        <div className='tour'>
            {csvData.map((show) => {
                return <Show {...show} />
                })
            }
        </div>
    )
}

export default Tour
