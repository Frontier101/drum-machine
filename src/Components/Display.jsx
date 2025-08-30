import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
    const sound = useSelector(state => state.sound);

    return (
        <div
            id='display'
            style={{
                height:'2.5rem',
                width:'100%',
                border:'1px solid #000'
            }}
            className='
                text-center 
                align-content-center
                bg-light
            '
        >
            {sound.text}
        </div>
    )
}

export default Display