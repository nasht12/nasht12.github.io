"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Scene, PerspectiveCamera, AmbientLight, WebGLRenderer, Matrix4 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const mapOptions = {
  mapId: process.env.NEXT_PUBLIC_MAP_ID,
  // center : { lat: 47.65, lng: -122.35 },
  // center: { lat: 43.661036, lng: -79.391277 },
  center: { lat: 47.68767, lng: -122.34292 },
  zoom: 17,
  disableDefaultUI: true,
  heading: 20,
  tilt: 25,
}

const Misc = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 style={{ marginTop: "0.5rem", marginBottom: "3rem" }}>
        <strong>(WIP)</strong>
      </h1>
      
        {/* <GoogleMapCo /> */}
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <MyMap />
        </Wrapper>
    </div>
  );
};

export default Misc;

function MyMap() {
  const [map, setMap] = useState();
  const ref= useRef();
  const overlayRef = useRef();

  useEffect(() => {
    if(!overlayRef.current){
      const instance = new window.google.maps.Map(ref.current, mapOptions);
      setMap(instance);
      overlayRef.current = createOverlay(instance);
    }
  }, [])
  return <div ref={ref} className="h-80 mr-5">!!!</div>
}

function createOverlay(map) {
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
      console.log(group);
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
        else if (mapOptions.zoom < 18) {
          mapOptions.zoom += 0.02;
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
