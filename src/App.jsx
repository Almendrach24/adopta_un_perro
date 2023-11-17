import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cabecera from "./components/Header"
import Foot from "./components/Footer"
import Card from "./components/MyCard"


const perritos =[
    {
      id:1,
      img:"https://images.pexels.com/photos/19047947/pexels-photo-19047947/free-photo-of-campo-mono-perros-rural.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      nombre:"Sam y Toño",
      descripcion:"Hermanos, lleno de energia y muy cariñosos. !Van juntos a todos lados, adóptalos juntos!",
      bg:"success",
      tx:"Mestizo"
    },
    {
      id:2,
      img:"https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      nombre:"Peter",
      descripcion:"Es jugueton, amigable, se lleva bien con niños y otros animales,¡Haz de Peter parte de tu familia!",
      bg:"primary",
      tx:"Mestizo"
    },
    {
      id:3,
      img:"https://images.pexels.com/photos/6291572/pexels-photo-6291572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      nombre:"Mani",
      descripcion:"Perro de raza mediano con un corazon gigante. ¡Hazte amigo de Mani y experimenta un amor incondicional!",
      bg:"danger",
      tx:"Mestizo"
    },
    {
      id:4,
      img:"https://images.pexels.com/photos/2571190/pexels-photo-2571190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      nombre:"Princesa",
      descripcion:"Es una compañera leal y cariñosa que adora los mimos y abrazos. ¡Ayuda a princesa a encontrar su final feliz!",
      bg:"warning",
      tx:"Mestiza"
    }
]

function App() {
 

  return (
    <>
      <Cabecera Titulo="Adopta un Perrito"/>
      
      <div className="principal">
      {
        
        perritos.map(p=>{
          console.log("HOlA");
          return(
          <Card 
            key={p.id}
            srcImg={p.img}
            nomPerrito={p.nombre}
            desPerrito={p.descripcion}
            bg={p.bg}
            text={p.tx}
            
          /> 
        )
        console.log("ADIOS");
        })
      }
      </div>
      
      <Foot />
       </>
  )
}

export default App