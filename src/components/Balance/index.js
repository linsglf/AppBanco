import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from "react-native";

import { MotiView } from 'moti'

export default function Balance({ balance, expenses }) {
    return (
        <MotiView 
            style={styles.container}
            from={{
                rotateX: '-90deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                duration: 800,
                delay: 300,
            }}
            >
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimbol}>R$</Text>
                    <Text style={styles.balance}>{ balance }</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimbol}>R$</Text>
                    <Text style={styles.expenses}>{ expenses }</Text>
                </View>
            </View>
            

        </MotiView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop:-24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle: {
        fontSize: 20,
        color: '#969CB2',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySimbol: {
        color: '#363F5F',
        marginRight: 4,
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71',
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c',
    }

});