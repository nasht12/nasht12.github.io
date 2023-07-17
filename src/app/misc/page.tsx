"use client"
import React from "react";
import HighwayBanner from "@/components/HighwayBanner/HighwayBanner";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 47.6062,
  lng: -122.3321,
};

const Misc: React.FC = () => {
  
  return (
      <div className="flex flex-col gap-5">
        <h1 style={{ marginTop: "0.5rem", marginBottom:"3rem" }}><strong>Miscellaneous</strong></h1>
        <h1 style={{ marginTop: "0.5rem", marginBottom:"3rem" }}><strong>(WIP)</strong></h1>
        <HighwayBanner />
        <LoadScript googleMapsApiKey="AIzaSyDh_BuLTCS5xLMzLVILul6QLa77H7oV1x4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {/* You can put markers or directions inside GoogleMap component */}
      </GoogleMap>
    </LoadScript>
      </div>
  );
};

export default Misc;
