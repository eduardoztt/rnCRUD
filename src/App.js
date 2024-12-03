import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { Button, Icon } from "react-native-elements";
import { UsersProvider } from "./context/UsersContext";
import Principal from "./views/Principal";
import { useTranslation }  from 'react-i18next'
import "./utils/i18n"



const Stack = createNativeStackNavigator()

export default props => {

    const{t, i18n} = useTranslation();

    
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Principal"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: t('Lista de Usuários'),
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: t("Formulário de Usuários")
                        }}
                    />
                    <Stack.Screen
                        name="Principal"
                        component={Principal}
                        options={{
                            title: t("Tela Inicial")
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}