import React from 'react'
import HeaderPortabilidade from '../../moleculas/portabilidade/headermenu'


const header = props =>{
   let menu
   if(props.menu == "portabilidade"){
       menu =  <HeaderPortabilidade />
   }else{
      menu = <p>Escolha o menu no codigo</p>
   }


    
    return(
        <>
          {menu}
        </>
    )
}

export default header;