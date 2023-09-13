import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'

const Contact = () => {
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