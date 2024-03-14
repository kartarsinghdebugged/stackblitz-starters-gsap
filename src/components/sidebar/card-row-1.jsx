'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import weatherIcon from '../../assets/images/weather_icons.png'
import weatherIcon2 from '../../assets/images/weather_icons-1.png'
import weatherIcon3 from '../../assets/images/weather_icons-2.png'
import weatherIcon4 from '../../assets/images/weather_icons-3.png'
import { endPointConfig } from '../../api/endPointConfig'
import { getData } from "../../api/apiConfig";
import { returnDate } from "../../shared/helperFunctions";

const CardRow1 =  ({ closeMenu }) => {
  const [countryData,setCountryData] = useState([])
  
  useEffect(()=>{
    getAllData()
  },[])

  const getAllData = async () =>{
    const Client = endPointConfig.endpoints.GET_ALL_SETTINGS_DATA
    const clientDataRes = await getData(Client)
    setCountryData(clientDataRes?.data.data[0]?.countries)
  }

  const weatherIcons = [
    weatherIcon,
    weatherIcon2,
    weatherIcon3,
    weatherIcon4,
  ]

  const mergedArray = countryData?.map((location, index) => ({
    ...location,
    weatherIcon: weatherIcons[index],
}));


  return (
    <>
    {mergedArray &&
      mergedArray?.length > 0 &&
      mergedArray?.map((ele, index) => {
        return (

          <div key={index} className="row-1 fj-dark h-auto card-row1">
              <div className="fj-inline">
                <h2 className="fj-time-text">{returnDate(ele?.zoneName)}</h2>
                <Image src={ele?.weatherIcon} alt="weather-icon" className="row-1-icon"  />
              </div>
              <div className="fj-inline fj-start fj-gap-5">
                <h3 className="fj-sub-h3"><span className="desktop-text">{ele.stateCustom ? ele.stateCustom : state }</span> 
                <span className="mob-text">tlv</span></h3> 
                <span className="pipe">&#124;</span> 
                <span className="desktop-text fj-text-sm">{ele.countryCustom ? ele.countryCustom : country }</span> 
                <span className="mob-text fj-text-sm">il</span>

              </div>
          </div>
          
          );
        })}
    </>
  );
};

export default CardRow1;