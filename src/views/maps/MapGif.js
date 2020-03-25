import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import gif from "../../assets/img/change.gif"
class MapGif extends React.Component {


  render() {
    return (
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Динамика изменения PM 2.5 в воздухе после введения карантина в городе Нур-Султан (19.03.2020)</CardTitle>
        </CardHeader>
        <CardBody>
          <img src={gif} width="100%" alt=""/>
        </CardBody>
      </Card>
    )
  }
}
export default MapGif
