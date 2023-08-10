"use client";
import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Scene, PerspectiveCamera, AmbientLight, WebGLRenderer, Matrix4 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const mapOptions = {
  mapId: process.env.NEXT_PUBLIC_MAP_ID,
  center: { lat: 47.61195, lng: -122.33860 },
  zoom: 14,
  disableDefaultUI: true,
  heading: 20,
  tilt: 25,
};

export default function Maps() {
  return (
    <div>
      Maps
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <MapComponent />
      </Wrapper>
    </div>
  );
}

 function MapComponent() {
  const [map, setMap] = useState();
  const [lat, setLat] = useState("47.61195");
  const [lng, setLng] = useState("-122.33860");
  const ref = useRef();
  const markerRef = useRef();
  const overlayRef = useRef();

useEffect(() => {
    const instance = new window.google.maps.Map(ref.current, mapOptions);
    setMap(instance);
    markerRef.current = new window.google.maps.Marker({ map: instance });
    overlayRef.current = createTransitionOverlay(instance);
  }, []);

  const handleButtonClick = (newLat, newLng) => {
    setLat(newLat);
    setLng(newLng);
    mapOptions.zoom = 13;
    overlayRef.current = createTransitionOverlay(map);    
    map.setCenter({ lat: parseFloat(newLat), lng: parseFloat(newLng) });
  };

  return (
    <div>
        {/* <input type="number" value={lat} onChange={(e)=> setLat(parseFloat(e.target.value))} step={0.01}/>
        <input type="number" value={lng} onChange={(e)=> setLng(parseFloat(e.target.value))} step={0.01}/> */}
        <div className="flex flex-row gap-10">
        <button className="bg-blue-300 p-2 rounded-md" onClick={() => handleButtonClick("47.68587", "-122.33743")}>Green Lake</button>
        <button className="bg-blue-300 p-2 rounded-md" onClick={() => handleButtonClick("47.66873", "-122.38217")}>Ballard</button>
        <button className="bg-blue-300 p-2 rounded-md" onClick={() => handleButtonClick("47.61411", "-122.31691")}>Capitol Hill</button>
        <button className="bg-blue-300 p-2 rounded-md" onClick={() => handleButtonClick("47.65165", "-122.35175")}>Fremont</button>
        </div>
      <div ref={ref} className="h-80 mr-5"></div>
    </div>
  );
}


function createTransitionOverlay (map) {
    const overlay = new google.maps.WebGLOverlayView();
    let renderer, scene, camera, loader;

    overlay.onAdd = () => {
        scene = new Scene();
        camera = new PerspectiveCamera();
        const light = new AmbientLight(0xffffff, 0.9);
        scene.add(light);
    
        loader = new GLTFLoader();
    
        loader.loadAsync("models/scene.gltf").then(object => {
          const group = object.scene;
          group.scale.setScalar(25);
          group.rotation.set(Math.PI / 2, 0, 0);
          group.position.setZ(-120);
          scene.add(group);
        })
      }

      overlay.onContextRestored = ({gl}) => {
        renderer = new WebGLRenderer({
          canvas: gl.canvas,
          context: gl,
          ...gl.getContextAttributes(),
        })
        renderer.autoClear = false;
    
        loader.manager.onLoad = () => {
          renderer.setAnimationLoop(()=> {
            map.moveCamera({
              tilt: mapOptions.tilt,
              heading: mapOptions.heading,
              zoom: mapOptions.zoom
            });
            if(mapOptions.tilt < 70) {
              mapOptions.tilt +=0.09;
            }
            else if (mapOptions.zoom < 17) {
              mapOptions.zoom += 0.01;
            }
            else if (mapOptions.heading < 100){
              mapOptions.heading +=0.2;
            }
            else {
              renderer.setAnimationLoop(null)
            }
          })
        }
      }

      overlay.onDraw = ({transformer}) => {
        const matrix = transformer.fromLatLngAltitude({
          lat: mapOptions.center.lat,
          lng: mapOptions.center.lng,
          altitude: 120,
        });
    
        camera.projectionMatrix = new Matrix4().fromArray(matrix);
        overlay.requestRedraw();
        renderer.render(scene, camera);
        renderer.resetState();
      }
    
      overlay.setMap(map);
     return overlay;
}