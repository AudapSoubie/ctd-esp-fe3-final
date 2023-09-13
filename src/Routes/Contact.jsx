import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from "react";

{/*import { useGlobalStates } from '.Components/Context'*/}

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
 {/*} const{theme,setTheme} = useContext(ContextGlobal);*/}

  const {theme,setTheme} = useGlobalStates()
  return (
    <div className={theme} >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      {/*{theme && setTheme}*/}
      <Form/>
    </div>
  )
}

export default Contact