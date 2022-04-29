import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ws } from '../app/webSocket';
import styles from './Field.Style';

const Field = ({ element, indexRow, indexElement }) => {

    const open = (row: number, column: number) => {
        ws.send(`open ${column} ${row}`);
    }
    if (element === '□') {
        return <TouchableOpacity onPress={() => open(indexRow, indexElement)} style={styles.field} key={indexElement}></TouchableOpacity>
    } else if (element === '*') {
        return <View style={styles.field} key={indexElement}>
            <Text style={styles.centerText}>*</Text>
        </View>
    } else {
        return <View style={styles.field} key={indexElement}>
            <Text style={styles.centerText}>{element}</Text>
        </View>
    }
}
export default React.memo(Field);
