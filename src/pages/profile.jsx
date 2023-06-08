import React from "react";
import {getItem} from "../services/LocalStorageFuncs"

export const Profile = (props) => {
    const user = getItem('usuario')
    const toProfileEdit = () => {
        const {history} = props;
        history.push("/profile/edit");
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{`Email: ${user.email}`}</p>
            <p>{`CPF: ${user.cpf}`}</p>
            <p>{`Telefone: ${user.phoneNumber}`}</p>
            <p>{`Email: ${user.email}`}</p>
            <button
            onClick={ toProfileEdit }
            >Editar Perfil</button>
        </div>
    )
}