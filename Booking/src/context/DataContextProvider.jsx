import { useState } from "react";
import { DataContext } from "./dataContext";
import USFlag from "../dist/img/Usflag.png";
import GerFlag from "../dist/img/GerFlag.png";

const DataContextProvider = (props) => {
  ///Currency
  const [currency, setCurrency] = useState([
    { currency: "USD", country: "U.S. Dollar", id: 1 },
    { currency: "EUR", country: "EURO", id: 2 },
    { currency: "TRY", country: "Turkish Lira", id: 3 },
  ]);
  const [defaultCurrency, setDefaultCurrency] = useState(currency[0].currency);
  ///Language
  const [lang, setLang] = useState([
    { lang: "English(US)", flag: USFlag, id: 1 },
    { lang: "Deutsch", flag: GerFlag, id: 2 },
  ]);
  const [defaultLang, setDefaultLang] = useState(lang[0].lang);
  //Start Date
  const defultStartDate = () => {
    const today = new Date();
    const numberOfDaysToAdd = 1;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd);
    const defaultValue = new Date(date).toISOString().split("T")[0];
    return defaultValue;
  };
  const [StartDate, setStartDate] = useState(defultStartDate());
  //Final Date
  const defualtFinalDate = () => {
    const today = new Date();
    const numberOfDaysToAdd = 7;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd);
    const defaultValue = new Date(date).toISOString().split("T")[0];
    return defaultValue;
  };
  const [FinalDate, setFinalDate] = useState(defualtFinalDate());
  //PasswordRegister
  const [passwordRegister, setPasswordRegister] = useState();
  //EmailRegister
  const [emailRegister, setEmailRegister] = useState();
  //AdultCounter
  const [AdultCounter, setAdultCounter] = useState(1);
  //ChildrenCounter
  const [ChildrenCounter, setChildrenCounter] = useState(0);
  //RoomCounter
  const [RoomCounter, setRoomCounter] = useState(1);
  //HotelData
  const [HotelAPI, setHotelAPI] = useState([]);
  //Destination
  const [Destination, setDestination] = useState();
  

  return (
    <DataContext.Provider
      value={{
        currency,
        setCurrency,
        lang,
        setLang,
        defaultCurrency,
        setDefaultCurrency,
        defaultLang,
        setDefaultLang,
        Destination,
        setDestination,
        StartDate,
        setStartDate,
        FinalDate,
        setFinalDate,
        passwordRegister,
        setPasswordRegister,
        emailRegister,
        setEmailRegister,
        AdultCounter,
        setAdultCounter,
        ChildrenCounter,
        setChildrenCounter,
        RoomCounter,
        setRoomCounter,
        HotelAPI,
        setHotelAPI,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
