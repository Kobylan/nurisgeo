import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Map, TileLayer } from "react-leaflet"
import HeatmapLayer from "react-leaflet-heatmap-layer";
import { addressPoints } from './realworld.10000.js';
import {date} from "yup";

class MapsBasic extends React.Component {

  render() {

    return (
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle> Данные обновлены на - {Date()} </CardTitle>
        </CardHeader>
        <CardBody>
          <Map center={[0,0]} zoom={13}>
            <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={addressPoints}
              longitudeExtractor={m => m[1]}
              latitudeExtractor={m => m[0]}
              intensityExtractor={m => parseFloat(m[1])} />
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </Map>
        </CardBody>
      </Card>
    )
  }
}
export default MapsBasic
