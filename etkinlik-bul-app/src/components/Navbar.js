import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Link, Outlet } from "react-router-dom";
import "./style.css"
import { NameDataContext } from './context/Context';


function Navbar() {
    const [value, onChange] = useState(new Date());
    const [etkinlik, setEtkinlik] = useState("Etkinlikler")
    const [isClick, setIsClick] = useState(false)
    const [salon, setSalon] = useState("Salonlar")
    const { setSaloonDataFilter, setEtkinlikData, setTarih } = NameDataContext();


    function film() {
        setEtkinlik("Film")
    }
    function tiyatro() {
        setEtkinlik("Tiyatro")
    }
    function bale() {
        setEtkinlik("Bale")
    }
    function CinemaximumForumİstanbul() {
        setSalon("Cinemaximum Forum İstanbul")
    }
    function CinemaximumMarmaraForum() {
        setSalon("Cinemaximum Marmara Forum")

    }
    function CinemaximumHistoria() {
        setSalon("Cinemaximum Historia")

    }
    function CinemaximumAPlus() {
        setSalon("Cinemaximum A Plus")

    }
    function CinemaximumAkasya() {
        setSalon("Cinemaximum Akasya")

    }
    function CinemaximumAkyakaPark() {
        setSalon("Cinemaximum Akyaka Park")

    }
    function CinemaximumAquaFlorya() {
        setSalon("Cinemaximum Aqua Florya")

    }
    function CinemaximumAxisKağıthaneAVM() {
        setSalon("Cinemaximum Axis Kağıthane AVM")

    }
    function Kadıköy() {
        setSalon("Özgürlük Parkı Amfi Tiyatro")

    }
    function Trump() {
        setSalon("Trump Sahne")

    }
    function AhmetVefikPaşaSahnesi() {
        setSalon("Ahmet Vefik Paşa Sahnesi")

    }
    function click() {
        if (etkinlik !== "Etkinlikler" && salon !== "Salonlar") {

            setSaloonDataFilter(salon)
            setEtkinlikData(etkinlik)
            setTarih(value)
            setIsClick(false)


        }
        if (etkinlik === "Etkinlikler" && salon === "Salonlar") {

            setSaloonDataFilter("")
            setEtkinlikData("")
            setTarih("")
        }
        setEtkinlik("Etkinlikler")
        setSalon("Salonlar")
    }


    function clickFilter() {
        setIsClick(!isClick)
    }

    return (
        <div>
            <nav className="filter navbar navbar-expand-lg bg-light1 backgroundcolornav1">
            {isClick===false ? <button onClick={clickFilter} className="radius btn navbar-brand btn btn-outline-success  " type="button" aria-expanded="false">
                        Filter
                        <ion-icon  name="chevron-down-outline"></ion-icon>
                    </button> :
                        <button onClick={clickFilter} className="radius btn navbar-brand btn btn-outline-success " type="button" aria-expanded="false">
                            Filter
                            <ion-icon name="chevron-up-outline"></ion-icon>
                        </button>}
                <div className="container-fluid  ">
                    
                    {isClick === true &&
                        <div>
                            <div className=" btn  btn-outline ">
                                <DatePicker className="datePicker" onChange={onChange} value={value} minDate={new Date()} maxDate={new Date(2022, 5, 29)} />
                            </div>
                            <div className="" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle navbar-brand btn btn-outline-success radius size" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {etkinlik}
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><button onClick={film} className="dropdown-item" >Film</button></li>
                                                <li><button onClick={tiyatro} className="dropdown-item" >Tiyatro</button></li>
                                                <li><button onClick={bale} className="dropdown-item" >Bale</button></li>
                                            </ul>
                                        </div>

                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle navbar-brand btn btn-outline-success radius size" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {salon}
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><button onClick={CinemaximumForumİstanbul} className="dropdown-item" >Cinemaximum Forum İstanbul</button></li>
                                                <li><button onClick={CinemaximumMarmaraForum} className="dropdown-item" >Cinemaximum Marmara Forum</button></li>
                                                <li><button onClick={CinemaximumHistoria} className="dropdown-item" >Cinemaximum Historia</button></li>
                                                <li><button onClick={CinemaximumAPlus} className="dropdown-item" >Cinemaximum A Plus</button></li>
                                                <li><button onClick={CinemaximumAkasya} className="dropdown-item" >Cinemaximum Akasya</button></li>
                                                <li><button onClick={CinemaximumAkyakaPark} className="dropdown-item" >Cinemaximum Akyaka Park</button></li>
                                                <li><button onClick={CinemaximumAquaFlorya} className="dropdown-item" >Cinemaximum Aqua Florya</button></li>
                                                <li><button onClick={CinemaximumAxisKağıthaneAVM} className="dropdown-item" >Cinemaximum Axis Kağıthane AVM</button></li>
                                                <li><button onClick={Kadıköy} className="dropdown-item" > Özgürlük Parkı Amfi Tiyatro</button></li>
                                                <li><button onClick={Trump} className="dropdown-item" >Trump Sahne</button></li>
                                                <li><button onClick={AhmetVefikPaşaSahnesi} className="dropdown-item" >Ahmet Vefik Paşa Sahnesi</button></li>
                                            </ul>
                                        </div>



                                    </li>
                                    <li className="nav-item">
                                        <Link className="navbar-brand btn btn-outline-success radius size" onClick={click} to="filter" type="submit">Filtrele</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </nav>
            <Outlet />

        </div>
    )
}

export default Navbar