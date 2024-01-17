import Show from './../Show';
import { useEffect, useState } from 'react';
import { readCsvFile } from './../helpers.js'

export default function Shows() {
    // useEffect(() => {
    //     /*
    //     const GetShows = async () => {
    //         var showsList = await readCsvFile();
    //         setShows([...shows, showsList]);
    //     }

    //     GetShows();
    //     */
    // }, [])

    return(
        <>
            {/* {shows.map((show) => {
                <Show venue={show.venue} city={show.city} country={show.country} date={show.date} />
            })} */}
        </>
    )
}