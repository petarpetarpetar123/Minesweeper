import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Field from '../Field/Field';
import styles from './Game.Style';

const Game = () => {
    const fields = useSelector((state: RootState) => state.game.fields);
    const lost = useSelector((state: RootState) => state.game.lost);
    const win = useSelector((state: RootState) => state.game.win);
    const loading = useSelector((state: RootState) => state.game.loading);

    return (console.log(fields),
    
        loading ?
            <View style={styles.loader}>
                <ActivityIndicator size={'large'} color={"#000"} />
            </View>
            :
            <ScrollView style={styles.verticalScroll}>
                <ScrollView style={styles.horizontalScroll} horizontal>
                    <View style={styles.mainContainer}>
                        {fields && fields.map((row: any, indexRow: number) => {
                            return <View style={styles.row} key={indexRow}>
                                {row.map((element: any, indexElement: number) => <Field key={indexElement} element={element} indexRow={indexRow} indexElement={indexElement} />)}
                            </View>
                        })}
                        {lost && <Text>You lost. Choose new game level!</Text>}
                        {win && <Text>You win. Choose new game level!</Text>}
                    </View>
                </ScrollView>
            </ScrollView>
    );
}
export default Game;
