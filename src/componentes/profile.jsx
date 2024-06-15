import React from "react";

function Profile({nome, idade, sobrenome}){
    return (

    <h1>
        <p>
        Olá, {nome}, de {idade}!
        </p>
        {sobrenome ? <p>O Sobrenome é {sobrenome}</p> : <p>O Sobrenome não foi informado.</p>}
    </h1>

    )
}

export default Profile