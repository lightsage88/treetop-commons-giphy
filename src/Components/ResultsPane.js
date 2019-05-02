import React from 'react'
import './ResultsPane.scss';
export default function ResultsPane(props){
    const gifs = props.gifs.map((gifObject, index)=>
        <div className='gridGif' key={index}>
            <h5>{gifObject.title}</h5>
            <img src={gifObject.images.preview_gif.url} alt={gifObject.title}/>
        </div>

       );

    return (
        <div className='resultsPaneDiv'>
            <h2 className='resultsPaneH2'>RESULTS PANE</h2>
            <section className='resultsPanelGrid'>
                {gifs}
            </section>
        </div>
    )

}