import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import '../utils/i18n'
import { useTranslation }  from 'react-i18next'

export default props => {

    const [currentLanguage,setCurrentLanguage] = useState("ptbr")

    const{t, i18n} = useTranslation();

    const changeLanguage = value =>{
        i18n.changeLanguage(value)
        .then(() =>{
            setCurrentLanguage(value)
            console.log("LINGUAGEM ALTERADA")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <TouchableOpacity
                    style={{ paddingHorizontal: 4 }}
                    onPress={() => {
                        changeLanguage("ptbr")
                     }}>
                    <Text style={{  
                        borderColor: currentLanguage === "ptbr" ? '#000' : "transparent" , 
                        borderWidth: 1, 
                        padding: 10 }}>Português Brasil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ paddingHorizontal: 4 }}
                    onPress={() => {
                        changeLanguage("ing")

                     }}>
                    <Text style={{ borderColor:currentLanguage === "ing" ?  '#000' : "transparent" , borderWidth: 1, padding: 10 }}>Inglês</Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ marginTop: 50 , fontSize: 30}}>
                    {t('Bem-vindo!')}
                </Text>
                <Text style={{ marginTop: 10 }}>
                    {t('Ao Projeto sobre CRUD feito em react Native')}
                </Text>
                <View style={style.Button}>
                    <Button title={t("Ver Lista de Usuarios")} onPress={() => props.navigation.navigate("UserList")} />
                </View>
                <View style={style.Button}>
                    <Button style={style.Button} title={t('Adicionar Usuario')} onPress={() => props.navigation.navigate("UserForm")} />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Button: {
        marginTop: 20,
    }
})