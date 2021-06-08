import React from 'react';
import { connect } from 'react-redux';
import Element from './Element';

const End = ({ places }) => {

    const reservedPlaces = places.map(place => (
        <Element key={place.id} id={place.id} cordX={place.cords.cordX} cordY={place.cords.cordY} />
    ));

    const style = {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'arial',
        },
    }

    return (
        <div style={style.mainContainer}>
            <h1>Twoja realizacja przebiegła pomyślnie!</h1>
            <label>Wybrałeś miejsca:</label>
            <ul>
                {reservedPlaces}
            </ul>
            <h2>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h2>
        </div>
    );
}

const connectReduxStateToProps = store => ({
    places: store,
})

export default connect(connectReduxStateToProps)(End);
