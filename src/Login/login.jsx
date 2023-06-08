import React, { useState } from "react";
import { setItem, getItem } from "../services/LocalStorageFuncs";
import { LoginContainer, Title, Label, Input, Button } from "./styles";

export const Login = (props) => {
    const user = getItem('usuario')

    const [name, setName] = useState(user.name || '')
    const [pass, setPass] = useState(user.pass || '')
    const [passIncorrect, setPassIncorrect] = useState(false)

    const cond = (name.length > 3 && pass.length > 5)

    const saveUser = (name, pass) => {
        const { history } = props;
        if (name === user.name && pass === user.pass) {
            history.push('/Store')
            return;
        } else if (name === user.name && pass != user.pass) {
            setPassIncorrect(true)
            return;
        }
        setItem('usuario', { name, pass })
        history.push('/Store')
    }

    return (
            <LoginContainer>
                <Title>Seja bem vindo(a)!</Title>
                <Label>Nome</Label>
                <Input type="text"
                    placeholder="Digite seu nome"
                    onChange={({ target: { value } }) => setName(value)}
                    value={name}
                />
                <Label>Senha</Label>
                <Input type="password"
                    placeholder="Digite sua senha"
                    onChange={({ target: { value } }) => setPass(value)}
                    value={pass}
                />

                {
                    passIncorrect && <p>Senha incorreta</p>
                }
                <br />
                <Button
                    type="button"
                    disabled={!cond}
                    onClick={() => saveUser(name, pass)}

                >
                    Entrar</Button>

            </LoginContainer>
    )
}