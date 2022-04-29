import React from 'react';
import { connect } from 'react-redux';
import styles from './Game.Style';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { ws } from '../Helpers/webSocket';

const Game = (props: any) => {

    const open = (row: number, column: number) => {
        ws.send(`open ${column} ${row}`);
    }

    return (
        <ScrollView style={styles.verticalScroll}>
            <ScrollView style={styles.horizontalScroll} horizontal>
                <View style={styles.mainContainer}>
                    {props && props.fields && props.fields.map((row: any, indexRow: number) => {
                        return <View style={styles.row} key={indexRow}>
                            {row.map((element: any, indexElement: number) => {
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
                            })}
                        </View>
                    })}
                    {props.lost && <Text>You lost</Text>}
                    {props.win && <Text>You win</Text>}
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const mapStateToProps = (state: { game: any; }) => ({
    fields: state.game.fields,
    lost: state.game.lost,
    win: state.game.win
});

export default connect(mapStateToProps, null)(Game)
