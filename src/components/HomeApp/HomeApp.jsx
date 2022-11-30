import Formulario from "../Formulario/Formulario"
import ItemlistContainer from "../ItemListContainer/ItemlistContainer"
import NavBar from "../NavBar/NavBar"
import Titulo from "../Titulo/Titulo"



const HomeApp = () => {

  return (
    <div>
        <NavBar />
        <Titulo titulo={'Soy el titulo del home de la app'} />
        <ItemlistContainer greeting={'Saludo de ItemlistContainer'}/>
        <Formulario />
    </div>
  )
}

export default HomeApp