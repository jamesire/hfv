import React, { useEffect, useState } from 'react'
import MerchDataCsv from '../assets/merch.csv';
import Papa from "papaparse"
import MerchItem from './MerchItem';

interface MerchData {
    name: string;
    img: string;
    link: string;
}

const Shop: React.FC = () => {
    const [csvData, setCsvData] = useState<MerchData[]>([]);
    
    useEffect(() => {
        fetchCsvData();
    }, []);

    const fetchCsvData = async () => {
        Papa.parse(MerchDataCsv, {
            header: true,
            download: true,
            skipEmptyLines: true,
            delimiter: ",",
            complete: (results: any) => {
                const showData: MerchData[] = results.data;
                console.log(showData)
                setCsvData(showData);
            },
          })
    }

  return (
    <div className='shop'>
      {csvData.map((item, key) => {
        return <MerchItem {...item} />
      })}
    </div>
  )
};

export default Shop;