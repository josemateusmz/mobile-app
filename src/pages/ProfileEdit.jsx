import React, {useState} from "react";
import { setItem, getItem } from "../services/LocalStorageFuncs";

export const ProfileEdit = (props) => {
    const user = getItem('usuário')
    const [name, setName] = useState(user.name || '')
    const [cpf, setCpf] = useState(user.cpf || '')
    const [email, setEmail] = useState(user.email || '')
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '')
    const [pass, setPass] = useState(user.pass || '')

    const cond = (
        name.length > 3 && (email.includes('@') && email.length > 10) && pass.length > 8 && cpf.length === 11 & phoneNumber.length > 10
    )

    const saveChanges = () => {
        setItem('usuario', {name,cpf,email,phoneNumber, pass})
        const {history} = props;
        history.push("/profile")
    }
    return (
        <div>
            {/* inserir validação */}
            <p>Nome</p>
            <input type="text"
            placeholder="Ex. Francisco Vieira"
            value={name}
            onChange={({target:{value}}) => setName(value)}
            />

            <p>CPF</p>
            <input type="number"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={({target:{value}}) => setCpf(value)}
            />

            <p>Email</p>
            <input type="email"
            placeholder="Ex. nome@dominio.com"
            value={email}
            onChange={({target:{value}}) => setEmail(value)}
            />

            <p>Celular</p>
            <input type="number"
            placeholder="Ex. (81) 99823-2308"
            value={phoneNumber}
            onChange={({target:{value}}) => setPhoneNumber(value)}
            />

            <p>Senha</p>
            <input type="password"
            placeholder="********"
            value={pass}
            onChange={({target:{value}}) => setPass(value)}
            />
            <br/>
            <br/>
            <button
            disabled={!cond}
            onClick={saveChanges}
            >Salvar Alterações</button>
        </div>
    )
}