import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSound, setVolume } from '../features/soundSlice';

const Volume = () => {
    const sound = useSelector(state => state.sound);
    const dispatch = useDispatch();

    // event handler
    // on change set volume, display it
    // then hide after a delay
    function handleChange(e){
        if(!sound.power) return;
        const currVol = Number(e.target.value);
        dispatch(
            setVolume(currVol)
        );
        dispatch(setSound('Volume : ' + currVol));
        const timer = setTimeout(()=>{
            dispatch(setSound(''));
        }, 1200);
        return () => clearTimeout(timer); 
    }
    return (
        <div>
            <input
                id="volume"
                role='button' 
                type='range' 
                min='0' 
                max='100'
                step='1'
                value={sound.volume}
                onChange={handleChange}
            />
        </div>
    )
}

export default Volume