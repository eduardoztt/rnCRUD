import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import UsersContext from "../context/UsersContext";
import { useTranslation }  from 'react-i18next'
import "../utils/i18n"


export default props => {

    const{t, i18n} = useTranslation();


    const { state, dispatch } = useContext(UsersContext)


    function confirmUserDeletion(user) {
        Alert.alert(t("Excluir Usuário"),t("Deseja Excluir Usuário?"), [
            {
                text: t("Sim"),
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: t("Não"),
            },
        ])
    }


    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name="edit" size={30} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={30} color="red" />}
                />
            </>
        )
    }



    const getUserItem = ({ item: user }) => (
        <ListItem
            key={user.id}
            bottomDivider
            onPress={() => props.navigation.navigate("UserForm", user)}
        >
            <Avatar source={{ uri: user.avatarUrl }} />
            <ListItem.Content>
                <ListItem.Title>{user.name || 'nome'}</ListItem.Title>
                <ListItem.Subtitle>{user.email || 'email'}</ListItem.Subtitle>
            </ListItem.Content>
            {getActions(user)}
        </ListItem>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(user) => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}