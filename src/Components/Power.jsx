import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPower, setSound } from '../features/soundSlice';


const Power = () => {
    const sound = useSelector(state => state.sound);
    const dispatch = useDispatch();
    return (
        <div>
            <div className='form-switch'>
                <label htmlFor='power' className='me-2'>
                    <strong>Power</strong>
                </label>
                <input 
                    id="power"
                    checked={sound.power}
                    role='button' 
                    type='checkbox' 
                    className={`form-check-input mx-2 border-dark ${sound.power ? 'bg-warning' : ''}`}
                    onChange={()=>{
                        dispatch(setPower())
                        dispatch(setSound(''));
                    }}
                />
            </div>
        </div>
    )
}

export default Power