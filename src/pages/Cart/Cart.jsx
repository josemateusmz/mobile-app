import React, { useState } from "react";
import { getItem, setItem } from "../../services/LocalStorageFuncs"
import { BsFillCartDashFill } from "react-icons/bs"
import { ProductsArea, Title, Price } from "./styles";

export const Cart = () => {
    const [data, setData] = useState(getItem('carrinhoYt') || [])
    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id != obj.id)
        setData(arrFilter)
        setItem('carrinhoYt', arrFilter)
    }

    const subTotal = data.reduce((acc,cur) => acc + cur.price, 0)

    return (
        <div>
            <Title>Meus produtos</Title>
                <Price>{`Total: R$ ${subTotal}`}</Price>
            <ProductsArea>
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt="" />
                            <h4>{`R$ ${e.price}`}</h4>
                            <button onClick={() => removeItem(e)}> <BsFillCartDashFill /> </button>
                        </div>
                    ))
                }
            </ProductsArea>
        </div>
    )
}