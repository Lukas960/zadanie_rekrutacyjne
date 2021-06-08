import React, { useEffect, useState } from 'react';
import Seat from './Seat';
import End from './End';

const Choose = ({ defSeats, compare }) => {

    const [places, setPlaces] = useState([]);
    const [next, setNext] = useState(false);

    const handleNext = () => {
        setNext(true);
    };

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/seats', true);
        xhr.onload = () => {
            console.log(xhr.status);
            if (xhr.status === 200) {
                const seats = JSON.parse(xhr.response);
                setPlaces(seats);
            }
        };
        xhr.send(null);
    }, []);

    // useEffect(() => {
    //     if (compare === true) {
    //         const found = places.find(element => element.reserved === false);
    //         console.log(found);

    //     }

    // }, [places]);

    const net = places.map(place => (
        <Seat key={place.id} reserved={place.reserved} id={place.id} cordX={place.cords.x} cordY={place.cords.y} />
    ));

    const style = {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '1150px',
            maxHeight: '80vh',
        },
        legend: {
            maxWidth: '1150px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '50px',
            alignItems: 'center',
            fontFamily: 'arial',
        },
        legendPart: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            orange: {
                width: '50px',
                height: '50px',
                margin: '10px',
                backgroundColor: 'orange',
                border: '2px solid black',
            }
        },
        button: {
            width: '200px',
            height: '50px',
            backgroundColor: 'white',
            border: '2px solid black',
            cursor: 'pointer',
        }
    }

    return (
        <>
            { next ? <End /> :
                <div style={style.mainContainer}>
                    <div style={style.container}>
                        {net}
                    </div>
                    <div style={style.legend}>
                        <div style={style.legendPart}>
                            <Seat reserved={false} />
                            <label>Miejsca dostępne</label>
                        </div>
                        <div style={style.legendPart}>
                            <Seat reserved={true} />
                            <label>Miejsca zarezerwowane</label>
                        </div>
                        <div style={style.legendPart}>
                            <div style={style.legendPart.orange}></div>
                            <label>Twój wybór</label>
                        </div>
                        <button style={style.button} onClick={handleNext}>Rezerwuj</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Choose;