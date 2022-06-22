import { createContext, useContext, useState } from "react";

const NameContext = createContext();

export const NameProvider = ({children})=>{
    const [nameData,setNameData]=useState("")
    const [saloonData,setSaloonData]=useState("")
    const [saloonDataFilter,setSaloonDataFilter]=useState("")
    const [etkinlikData,setEtkinlikData]=useState("")
    const [tarih,setTarih]=useState("")
    const values={nameData,setNameData,saloonData, setSaloonData,saloonDataFilter,setSaloonDataFilter,etkinlikData,setEtkinlikData,tarih,setTarih};
    return <NameContext.Provider value={values}>{children}</NameContext.Provider>;
};

export const NameDataContext=()=> useContext(NameContext)