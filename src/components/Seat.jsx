import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addSeat, deleteSeat } from './Redux/appActions';

const Seat = ({ reserved, id, cordX, cordY, addSeat, deleteSeat }) => {

    const [color, setColor] = useState('white');

    useEffect(() => {
        if (reserved === true) {
            setColor('gray');
        } else if (reserved === 'orange') {
            setColor('orange');
        }
    }, []);

    const click = () => {
        if (reserved === false && color === 'white') {
            setColor('orange');
            addSeat({
                id,
                cords: {
                    cordX,
                    cordY,
                },
                reserved: true,
            });
        } else if (reserved === false && color === 'orange') {
            setColor('white');
            deleteSeat({
                id,
            });
        }
    };

    const style = {
        mainContainer: {
            width: '50px',
            height: '50px',
            margin: '10px',
            backgroundColor: color,
            border: '2px solid black',
        },
    }

    return (
        <div style={style.mainContainer} onClick={click}>

        </div>
    );
}

const connectActionsToProps = ({
    addSeat,
    deleteSeat,
});

export default connect(null, connectActionsToProps)(Seat);