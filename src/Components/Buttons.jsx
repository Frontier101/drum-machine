import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSound } from '../features/soundSlice'
import { sounds } from '../assets/soundsSrc';


const Buttons = () => {
    // useStates
    const [activePad, setActivePad] = useState(null);
    // useRefs
    const pads = {
        Q: useRef(null),
        W: useRef(null),
        E: useRef(null),
        A: useRef(null),
        S: useRef(null),
        D: useRef(null),
        Z: useRef(null),
        X: useRef(null),
        C: useRef(null),
    }
    

    const dispatch = useDispatch();
    const sound = useSelector(state => state.sound);

    // Functions
    // function that stop all playing audios
    function stopAll(){
        Object.values(pads).forEach(pad=> {
            if(pad.current){
                pad.current.pause();
                pad.current.currentTime = 0;
            }
        })
    }
    // function that extracts the sound name
    function extractName(src, key){
        const fileName = src.replace(key+'/', '');
        const soundName = fileName.replace('.mp3', '');
        const text = soundName.replaceAll(/\-/g, ' ');
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    // event handlers
    function handleClick(key){
        if(sound.power){
            const src = sounds[sound.bank][key];
            const text = extractName(src, sound.bank);
            dispatch(setSound(text));
            stopAll();
            if(pads[key].current){
                pads[key].current.play();
            }
            setActivePad(key);
        }
    }

    // useEffects
    // trigger a button click using a keyboard key
    useEffect(()=>{
        if(sound.power){
            function handleKeyDown(e){
                const key = e.key.toUpperCase();
                if(pads.hasOwnProperty(key)){
                    handleClick(key);
                }
            }
            function handleKeyUp(e){
                const key = e.key.toUpperCase();
                if(pads.hasOwnProperty(key)){
                    setActivePad(null);
                }
            }
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            
            return ()=> {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            }
        }
    },[activePad, sound]);

    // adjust volume of audio
    useEffect(()=>{
        Object.keys(pads).forEach(key=>{
            if(pads[key].current){
                pads[key].current.volume = sound.volume / 100;
            }
        })
    }, [sound.volume])

    return (
        <div>
            <ul 
                id="drum-pads-container"
                className='list-unstyled'
            >{
                Object.keys(pads).map((key) => (
                    <li key={key}>
                        <button
                            id={sounds[sound.bank][key]}
                            disabled={!sound.power}
                            className ={`
                                drum-pad btn  
                                ${activePad == key 
                                    ? 'btn-warning' 
                                    : 'btn-secondary shad'
                                }
                            `}
                            style={{
                                width:'4rem',
                                height:'4rem',
                            }}
                            onClick={()=>handleClick(key)}
                            onPointerUp={()=>setActivePad(null)}
                            onPointerLeave={()=>setActivePad(null)}
                        >
                            <audio
                                id={key}
                                src={`
                                    ${import.meta.env.BASE_URL}sounds/${sounds[sound.bank][key]}
                                `}  
                                ref={pads[key]}
                                className='clip'
                            >
                            </audio>
                            {key}
                        </button>
                    </li>
                ))
            }</ul>
        </div>
    )
}


export default Buttons