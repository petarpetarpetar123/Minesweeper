import React from 'react';
import { Button, View } from 'react-native';
import { ws } from '../app/webSocket';
import styles from './HeaderMenu.Style';

const HeaderMenu = () => {

    const startGame = (level: String) => {
        ws.send(`new ${level}`);
    }

    return (
        <View style={styles.mainContainer}>
            <Button title='Level 1' onPress={() => startGame('1')} />
            <Button title='Level 2' onPress={() => startGame('2')} />
            <Button title='Level 3' onPress={() => startGame('3')} />
            <Button title='Level 4' onPress={() => startGame('4')} />
        </View>
    );
}

export default HeaderMenu;
