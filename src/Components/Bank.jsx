import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBank } from '../features/soundSlice';

const banks = ['Piano', 'Heater', 'Guitar', 'Drum']

const Bank = () => {

    const sound = useSelector(state => state.sound);

    const dispatch = useDispatch();
    
    return (
    <div className='text-center'>
        <strong>Bank</strong>
        <ul className='d-flex gap-1 list-unstyled mt-2'>{
            banks.map(bank=>(
                <button
                    style={{
                        height: '5rem'
                    }}
                    disabled={!sound.power}
                    className={`
                        btn btn-warning
                        ${sound.bank == bank 
                            ? '' 
                            : 'shad'
                        }`
                    }
                    key={bank}
                    onClick={()=> 
                        dispatch(setBank(bank))
                    }
                >
                    {bank}
                </button>
            ))
        }</ul>
    </div>
    )
}

export default Bank