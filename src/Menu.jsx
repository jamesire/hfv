import './styling.css';

import {Shows, Contact, Links, Merch, Music, Photos, Videos} from './pages/Pages';

export default function Menu({setPage}) {
    return (
        <>
            <hr className='line' />
            <div className='menu'>
            <span className='clickable' onClick={() => setPage(Shows)}>Shows </span> 
            | <span className='clickable' onClick={() => setPage(Merch)}>Merch </span> 
            | <span className='clickable' onClick={() => setPage(Videos)}>Videos </span> 
            | <span className='clickable' onClick={() => setPage(Music)}>Music </span> 
            | <span className='clickable' onClick={() => setPage(Links)}>Links </span> 
            | <span className='clickable' onClick={() => setPage(Photos)}>Photos </span> 
            | <span className='clickable' onClick={() => setPage(Contact)}>Contact</span> 
            </div>
            <hr className='line' />
        </>);
}