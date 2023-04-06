import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(initialState.theme)

  const tema = useMemo(()=>cambiarTema(theme),initialState.data)

  const cambiarTemaCSS = () => {
    tema === 'dark' ? setTheme('light') : setTheme('dark')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', tema);
  }, [theme])


  return (
    <ContextGlobal.Provider value={{theme, cambiarTemaCSS}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);