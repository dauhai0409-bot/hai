import { useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
function Contact () {
      console.log("abc");
      console.log(16);
      console.log("hn");
      console.log("abc@gmail.com");
}
Contact();
Contact();
Contact();
function ContactParam(nam: string, age: number, address: string, email: string){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Address: ${address}`);
    console.log(`Email: ${email}`);

}
function Max(a: number, b: number, c: number) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

export default function Lesson2() {
    const [counter, setCounter] = useState(0);
    function handClickIncreament (){
        setCounter(counter + 1);
    }
    function handClickDecreament (){
        setCounter(counter -1 );
    }

    function handleClickIncreament(){
        Alert.alert("Increament button clicked");

    }
     function handleClickDecreament(){
        Alert.alert("Decreament button clicked");
        
    }
    function handleChangeText(text: string){
        Alert.alert("Text changed", text);
    }
    return (
        <View style = {styles.container}>
            <Button title ="+" onPress= {handleClickIncreament}/>

            <Button title ="-" onPress={handleClickDecreament}/>
        </View> 

    )
  }
    
    const arr = [1,2,3,4,5,6,8,9,10];
    let i = 0
    while(i <= 10){
        console.log(i);
        i++;
    }
    return (
        <View style={styles.container}>
            <View style={styles.formLogin}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="Username"/>
                <TextInput style={styles.input} placeholder="Password"/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text>Forgotten password?</Text>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
            {
                arr.map(item =>(
                    <text> {item}</text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
        flex: 1, // full element chứa nó
        backgroundColor: "#1E90FF",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
   },
   formLogin: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20
   },
   title: {
        fontSize: 40,
        color: "black",
        fontWeight: "600",
   },
   input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        width: "100%",
        padding: 10,
   },
   button: {
        width: "100%",
        backgroundColor: "#1E90FF",
        padding: 10,
        borderRadius: 5,
   },
   buttonText: {
       color: "white",
       textAlign: "center",
       fontWeight: "600"
   },
   line: {
        width: "100%",
        height: 1,
        backgroundColor: "grey",
   }
});