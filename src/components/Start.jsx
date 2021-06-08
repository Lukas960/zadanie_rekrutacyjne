import React, { useState } from 'react';
import Choose from './Choose';

const Start = () => {

    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const [together, setTogether] = useState(false);
    const [next, setNext] = useState(false);

    const handleChange = (e) => {
        setNumberOfSeats(e.target.value);
    };

    const handleChecked = (e) => {
        setTogether(!together);
    };

    const handleNext = () => {
        setNext(true);
    };

    const style = {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px'
        },
        text: {
            fontFamily: 'arial',
            margin: '0 10px 0 10px',
        },
        input: {
            width: '80px',
            height: '30px',
        },
        button: {
            width: '100%',
            height: '50px',
            backgroundColor: 'white',
            border: '2px solid black',
            cursor: 'pointer',
        }
    }

    return (
        <>
            { next ? <Choose defSeats={numberOfSeats} compare={together} /> :
                <div style={style.mainContainer}>
                    <div style={style.container}>
                        <label style={style.text}>Liczba miejsc:</label>
                        <input type='number' min='1' style={style.input} onChange={handleChange} value={numberOfSeats} />
                    </div>
                    <div style={style.container}>
                        <input type='checkbox' onChange={handleChecked} checked={together} />
                        <label style={style.text}>Czy miejsca mają być obok siebie?</label>
                    </div>
                    <button style={style.button} onClick={handleNext}>Wybierz miejsca</button>
                </div>
            }
        </>
    );
}

export default Start;
