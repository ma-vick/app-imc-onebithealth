import { React, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";

import ResultImc from "./ResultImc/";

import styles from './style';

export default function Form(){
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [resultTable, setResultTable] = useState(null);
    const [textButton, setTextButton] = useState("calcular IMC");

    function imcCalculator(){
        if (weight && height) {
            const heightValue = parseFloat(height);
            const weightValue = parseFloat(weight);
      
            if (!isNaN(heightValue) && !isNaN(weightValue) && heightValue > 0 && weightValue > 0) {
                const calculatedImc = (weightValue / (heightValue * heightValue)).toFixed(2);
                setImc(calculatedImc);
                return;
            }
        }
    }

    function validationImc(){
        if (weight && height) {
            imcCalculator();
            imcTable();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual a:");
            setTextButton("Calcular novamente"); 
        } else {
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura corretamente");
        }   
    }

    function imcTable(){
        let resultTableImc;

        if (imc < 18.5) resultTableImc = 'abaixo do peso normal';
        else if (imc < 24.9) resultTableImc = 'peso normal';
        else if (imc < 29.9) resultTableImc = 'excesso de peso';
        else if (imc < 34.9) resultTableImc = 'obesidade classe 1';
        else if (imc < 39.9) resultTableImc = 'obesidade classe 2';
        else resultTableImc = 'obesidade classe 3';

        setResultTable(resultTableImc);
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput
                    style={styles.input} 
                    onChangeText={setHeight}
                    value={height}
                    placeholder="1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight} 
                    placeholder="60"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                    onPressOut={() => Keyboard.dismiss()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc
                messageResultImc={messageImc}
                resultImc={imc}
                tableResultImc={resultTable}
            />
        </View>
    );
}