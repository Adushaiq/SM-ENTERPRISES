import React, { useEffect } from 'react';
import 'ol/ol.css';  // Import OpenLayers CSS
import { Map, View } from 'ol';  // Import the Map and View classes
import OSM from 'ol/source/OSM';  // Import OpenStreetMap source
import TileLayer from 'ol/layer/Tile';  // Import the TileLayer class
import { fromLonLat } from 'ol/proj';  // Import the fromLonLat function to convert coordinates
import { Icon, Style } from 'ol/style';  // Import Style and Icon for customizing markers
import Feature from 'ol/Feature';  // Import Feature for creating map features
import Point from 'ol/geom/Point';  // Import Point for marker geometry
import VectorLayer from 'ol/layer/Vector';  // Import VectorLayer to display the marker on the map
import VectorSource from 'ol/source/Vector';  // Import VectorSource explicitly

const OpenLayersMap = () => {
  useEffect(() => {
    // Coordinates for the location (S M Enterprises)
    const coordinates = fromLonLat([73.8723692, 18.5074261]);

    // Create a marker (Feature) at the given coordinates
    const marker = new Feature({
      geometry: new Point(coordinates),
    });

    // Set style for the marker (pin icon)
    marker.setStyle(
      new Style({
        image: new Icon({
          src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png',  // Icon URL for the pin
          scale: 0.6,  // Adjust size of the pin
        }),
      })
    );

    // Create a vector layer to add the marker to the map
    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],  // Add the marker to the vector source
      }),
    });

    // Create the map
    const map = new Map({
      target: 'map',  // ID of the div where the map will be displayed
      layers: [
        new TileLayer({
          source: new OSM(),  // Add OpenStreetMap layer
        }),
        markerLayer,  // Add the marker layer
      ],
      view: new View({
        center: coordinates,  // Set map center to the coordinates
        zoom: 13,  // Set zoom level
      }),
    });

    // Add a click event listener to the map to detect clicks
    map.on('singleclick', function () {
        const googleMapsUrl = `https://www.google.com/maps?q=${18.5074261},${73.8723692}`;
        window.open(googleMapsUrl, '_blank');  // Open Google Maps in a new tab
      });
      

    // Cleanup when the component unmounts
    return () => map.setTarget(undefined);  // Cleanup map on unmount
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '400px',
      }}
    ></div>
  );
};

export default OpenLayersMap;