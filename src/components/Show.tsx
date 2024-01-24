import React from 'react';
import "../styles.scss";

interface IShowProps {
    venue: string;
    city: string;
    country: string;
    date: string;
    note: string;
    ticket_link: string;
}

const Show: React.FC<IShowProps> = ({ venue, city, country, date, note, ticket_link }) => {
  return (
    <div className='show'>
        {venue}, {city}, {country} | {note} | {date} | <a className='ticket' rel="noreferrer" target='_blank' href={ticket_link}>Tickets</a>
    </div>
  )
}

export default Show;