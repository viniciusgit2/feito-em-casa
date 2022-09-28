export interface botoes{
cor1:'green'
  cor2:'red'
  classname?:String
}
export default function botoes(botoes:any){
  return(
  <button className="{cor1}">OI</button>
  )

}
