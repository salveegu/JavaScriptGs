
// lembrar de dar npm start no console


import React from 'react'






// //Aula 34 Aplicando Class component
// //import React, {Component} from 'react';


//     class Equipe extends Component{

//         render(){
//             return(
//                 <div>
//                     <Sobre nome ={this.props.nome} cargo = {this.props.cargo} 
//                     idade= {this.props.idade}/>
//                 </div>
//             )
//         }
//     }

//     class Sobre extends Component{
//         render(){

//             return(
//             <div>
               
//                 <h2>Olá sou o(a) {this.props.nome}</h2>
//                     <a>Cargo: {this.props.cargo}</a>
//                     <a> idade: {this.props.idade}</a>
//                     <hr/>
//             </div>
//             )}
//     }

//     function App() {

//         return(
//             <div>
//                 <h1>Conheça nossa equipe:</h1>
//                 <Equipe nome="Matheus" cargo="programador" idade="24" />
//                 <Equipe nome="Gustavo" cargo="Front end" idade="14" />

//             </div>
//         )
        
//     }

// //Aula 34 Aplicando class Component



// //Aula 33 props e componet

// const Equipe = (props) => {
//     return (
//         <div>
//             < Sobre username={props.nome} cargo={props.cargo}
//                 idade={props.idade} />

//              <Social fb={props.facebook} lk={props.linkedin}/>    
//                 <hr/>
//         </div>
//     )
// }

//     const Sobre = (props) => {
  
//             return  (
//                 <div>
//                     <h2>Olá sou o(a) {props.username}</h2>
//                     <h3>Cargo: {props.cargo}</h3>
//                     <h3>Idade: {props.idade} anos</h3>
//                 </div>
//             )

        
//     }


//     const Social = (props) =>{
//         return (
//             <div>
//                 <a href={props.fb}>Facebook </a>
//                 <a href={props.lk}>Linkedin </a>
//                 <a>Instagram </a>
//             </div>
//         )
//     } 

// function App(props) {

//     return (

//         <div>
//             <h1>Conheça nossa equipe:</h1>
//             <Equipe nome="Lucas" cargo="Programador" idade="21" 
//              facebook ="http://google.com" linkedin="http://linkedin.com.br"/>
//             <Equipe nome="Gustavo" cargo="Programador" idade="11" 
//             facebook="http://facebook.com.br"/>
//             <Equipe nome="Joao" cargo="Programador" idade="01" />
//         </div>
//     )

// }

//Aula 33 props e componet



// // Aula 32 entendendo component

// const Bemvindo = (props) => {
//     return (

//         <div>
//         <h2>Bem-vindo(a) {props.nome}</h2>
//         <h2>Sua idade é: {props.idade} anos</h2>
//         </div>
//     )
// };

// function App() {

//     return (
//         <div>
//             <h1>Curso de React</h1>
//             <Bemvindo nome="Gustavo" idade ="27"/>
//             <Bemvindo nome="Rafaela" idade ="17"/>
//             <Bemvindo nome="Julia"   idade ="07"/>

//         </div>
//     )

// }

// // Aula 32 Entendendo component

export default App;