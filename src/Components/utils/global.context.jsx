
import axios from 'axios'
import {useContext, createContext, useState, useReducer, useEffect} from 'react'

const GlobalStates = createContext()
const Context = ({children}) => {
  const [dentista, setDentista] = useState([])
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(false)
  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(()=>{
    setLoading(true);
    axios ( url)
    .then((res) => {
      setDentista(res.data);
    setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  },[])
 
  return (
    <GlobalStates.Provider value={{dentista,setDentista, theme, setTheme, loading, setLoading}}>
        {children}
    </GlobalStates.Provider>
)
}
export default Context

export const useGlobalStates = () => useContext( GlobalStates )


{/*export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [theme, setTheme] = useState("dark")
  return (
    <ContextGlobal.Provider value={{theme, setTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};*/}

