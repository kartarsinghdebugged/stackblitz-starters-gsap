import React from "react";
import { getData } from "../../lib/getData";
import ClientJourney from "./client-journey";
const ClientSliderWrapper = async () => {
  const result = await getData(`/user/get-public-case-studies`);
  const { data } = result;

  return(
     <>
        <ClientJourney 
            data={data}
        />
        
     </>
    );
};

export default ClientSliderWrapper;
