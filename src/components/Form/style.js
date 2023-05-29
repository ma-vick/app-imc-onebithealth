import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#e9e9e9',
        height: 60,
        margin: 12,
        paddingLeft: 20,
        fontSize: 16,
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#FF0043',
        paddingTop: 14,
        paddingBottom: 14,
        margin: 30,
        marginLeft: 14,
    },

    textButtonCalculator: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default styles;