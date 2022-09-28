import Id from "./id"
import Nome from "./Nome"
import Idade from "./Idade"
import Entrada from "./entrada"
import { icone1 } from "./componentes/icones"
import { icone2 } from "./componentes/icones"
import Titulo from "./Titulo"



export default function  Tabela(){

  return (
    <div>
<Titulo/>
<Entrada/>
 

    <table><tr><th><td >nome:</td></th><Nome/></tr><th>Id:</th><th><Id/></th><tr><th>Idade:</th><th>:<Idade/></th></tr><tr><th></th></tr><th>{icone2}falsa lixeira</th><tr><th>falso editar {icone1}</th></tr></table>
    
    </div>
  
    ) 
    
  
  }
 

