import Id from "./id"
import Nome from "./Nome"
import Idade from "./Idade"
import { icone1 } from "./componentes/icones"
import { icone2 } from "./componentes/icones"

export default function  Tabela(){

  return (
    <table><tr><th>nome:</th><Nome/></tr><tr></tr>id:<th><Id/></th><tr><th>Idade:<Idade/></th></tr> falso editar {icone1}{icone2}falsa lixeira</table>

  )
  }