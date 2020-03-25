import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col
} from "reactstrap"
import Chart from "react-apexcharts"
import { ChevronDown } from "react-feather"

class SupportTracker extends React.Component {
  state = {
    options: {
      chart: {

      },
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: "65%"
          },
          track: {
            background: this.props.white,
            strokeWidth: "100%"
          },
          dataLabels: {
            value: {
              offsetY: 30,
              color: "#99a2ac",
              fontSize: "2rem"
            }
          }
        }
      },
      colors: [this.props.danger],
      fill: {
        type: "gradient",
        gradient: {
          // enabled: true,
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [this.props.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        dashArray: 8
      },
      labels: ["Завершенные датчики"]
    },
    series: [100]
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Количество эко-датчиков</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <Row>
            <Col sm="2" className="d-flex flex-column flex-wrap text-center">
              <h1 className="font-large-2 text-bold-600 mt-2 mb-0">50</h1>
              <small>датчиков</small>
            </Col>
            <Col sm="10" className="d-flex justify-content-center">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height={350}
                className="support-tracker-card"
              />
            </Col>
          </Row>
          <div className="chart-info d-flex justify-content-between">
            <div className="text-center">
              <p className="mb-50">Новых датчиков</p>
              <span className="font-large-1">29</span>
            </div>
            <div className="text-center">
              <p className="mb-50">Активных датчиков</p>
              <span className="font-large-1">50</span>
            </div>
            <div className="text-center">
              <p className="mb-50">Обновление каждые</p>
              <span className="font-large-1">1 мин</span>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SupportTracker
