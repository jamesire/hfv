import './styling.css';

import {Shows, Contact, Links, Merch, Music, Photos, Videos} from './pages/Pages';

export default function Menu({setPage}) {
    return (
        <>
            <hr className='line' />
            <div className='menu'>
            <span className='clickable' onClick={() => setPage(Shows)}>Shows</span> 
            &nbsp;| <span className='clickable' onClick={() => setPage(Merch)}>Merch</span> 
            &nbsp;| <span className='clickable' onClick={() => setPage(Videos)}>Videos</span> 
            &nbsp;| <span className='clickable' onClick={() => setPage(Contact)}>Contact</span> 
            </div>
            <hr className='line' />
        </>);
}