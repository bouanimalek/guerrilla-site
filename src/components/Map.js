import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "../mapStyles";

const containerStyle = {
  width: "400px",
  height: "400px",
  borderRadius: 10,
  border: "5px solid #fff",
};

const center = {
  lat: 36.8533904321529,
  lng: 10.18533098549019,
};
// 36.853289039762075, 10.182331935610659
function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={{ mapId: "7218101d6ec345dd" }}
        // options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={{ lat: 36.8533904321529, lng: 10.18533098549019 }} />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
