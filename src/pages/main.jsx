import Header from "../componentes/header";
import Footer from "../componentes/footer";
import Pessoas from "../componentes/pessoas";
import React, {useEffect, useContext} from 'react'
import {UserContext} from "../context/userContext";


// function Main(){
//     return(
//         <div>

//         <Header/>

//         <h1>
//             Olá!
//         </h1>

//         <Footer/>

//         </div>
//         // tudo que se escreve aqui dentro é html
//     )
// }

// export default Main


function Main() {

    const {pessoas, setPessoas} = useContext(UserContext)

    useEffect(() => { 
		const fetchUsers = async () => {
			const response = await fetch('/pessoas.json');
				const data = await response.json();
				console.log(data)
			  	setPessoas(data);
		  };
		fetchUsers();
		}, [])

    return (
        <div>

            <Header/>

            <Pessoas pessoas={pessoas}/>

            <Footer/>

        </div>
    );
}

export default Main;
