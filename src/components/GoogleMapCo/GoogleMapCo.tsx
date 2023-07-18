import React, { useMemo, useState } from "react";
import { LoadScriptNext, useLoadScript } from "@react-google-maps/api";
import { GoogleMap } from "@react-google-maps/api";

export default function GoogleMapCo() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_BASE_URL || "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading ...</div>;

  // const center = useMemo(()=> ({lat: 40, lng: -80}), []);

  return (
    <div>
      GoogleMap
      <LoadScriptNext googleMapsApiKey="AIzaSyDh_BuLTCS5xLMzLVILul6QLa77H7oV1x4">
      <GoogleMap zoom={10} center={{ lat: 40, lng: -80 }}></GoogleMap>
      </LoadScriptNext>
    </div>
  );
}
