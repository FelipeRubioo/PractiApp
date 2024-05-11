import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ScrollView } from "react-native-gesture-handler";

import { useUserData } from "../context/userContext";
import UserId from "../hooks/UserId";

const MiPerfil = () => {
    const { userData, uid } = useUserData();

    const userRef = doc(db, "Usuarios", uid);

    const [isEditable, setIsEditable] = useState(false);
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        if (isEditable) {
            setEditedData(userData);
        }
    }, [isEditable, userData]);



    const handleSave = async () => {
        try {
            await updateDoc(userRef, editedData )
            console.log("Datos guardados", editedData);
            setIsEditable(false);
        } catch (error) {

            console.error("Error updating document: ", error);
        }
    };

    const handleCancel = () => {
        console.log("Cancelado");
        setIsEditable(false);
    };

    return (
        <ScrollView>
            <View>
                <Text>Mi Perfil</Text>
                <Text>Nombres</Text>
                <TextInput
                    value={isEditable ? editedData.name : userData.name}
                    onChangeText={(text) => setEditedData({ ...editedData, name: text })}
                    editable={isEditable}
                />
                <Text>Apellidos</Text>
                <TextInput
                    value={isEditable ? editedData.lname : userData.lname}
                    onChangeText={(text) => setEditedData({ ...editedData, lname: text })}
                    editable={isEditable}
                />
                <Text>Campus</Text>
                <RNPickerSelect
                    items={[
                        { label: "Hermosillo", value: "Hermosillo" },
                        { label: "Cajeme", value: "Cajeme" },
                        { label: "Caborca", value: "Caborca" },
                        { label: "Nogales", value: "Nogales" },
                        { label: "Santa Ana", value: "Santa Ana" },
                        { label: "Navojoa", value: "Navojoa" },
                    ]}
                    value={isEditable ? editedData.campus : userData.campus}
                    onValueChange={(value) => setEditedData({ ...editedData, campus: value })}
                    disabled={!isEditable}
                />
                <Text>Carrera</Text>
                <RNPickerSelect
                    items={[
                        { label: "Ingeniería en Sistemas", value: "Ingeniería en Sistemas" }
                    ]}
                    value={isEditable ? editedData.carrera : userData.carrera}
                    onValueChange={(value) => setEditedData({ ...editedData, carrera: value })}
                    disabled={!isEditable}
                />
                <Text>Descripción</Text>
                <TextInput
                    value={
                        userData.desc === ""
                            ? "No has agregado una descripción"
                            : userData.desc
                    }
                    onChangeText={(text) => setEditedData({ ...editedData, desc: text })}
                    editable={isEditable}
                />
                <Text>Habilidades</Text>
                <TextInput
                    value={
                        userData.hab === ""
                            ? "No has agregado tus habilidades"
                            : userData.hab
                    }
                    onChangeText={(text) => setEditedData({ ...editedData, hab: text })}
                    editable={isEditable}
                />
                {!isEditable && (
                    <TouchableOpacity onPress={() => setIsEditable(true)}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                )}
                {isEditable && (
                    <View>
                        <TouchableOpacity onPress={handleSave}>
                            <Text>Guardar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCancel}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default MiPerfil;
