import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styles";
import { getItem } from "../services/LocalStorageFuncs";

export const Header = () => {
    const user = getItem('usuario')
    const name = user.name.split(' ')
    return (
        <HeaderArea>
            <Link to="/Store">Produtos</Link>
            <Link to="/Cart">Carrinho</Link>
            <Link to="/profile">Meu Perfil</Link>
        </HeaderArea>
    )
}