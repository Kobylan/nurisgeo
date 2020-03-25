import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Progress
} from "reactstrap"
import Chart from "react-apexcharts"
import { ChevronsRight, ChevronDown } from "react-feather"
import Sales from "./Sales";

class AvgSessions extends React.Component {
  state = {
    options: {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      states: {
        hover: {
          filter: "none"
        }
      },
      colors: [
        this.props.labelColor,
        this.props.labelColor,
        this.props.primary,
        this.props.labelColor,
        this.props.labelColor,
        this.props.labelColor
      ],
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded"
        }
      },
      tooltip: {
        x: { show: false }
      },
      xaxis: {
        type: "numeric"
      }
    },
    series: [
      {
        name: "Sessions",
        data: [75, 125, 225, 175, 125, 75, 25]
      }
    ]
  }
  render() {
    return (
      <Card>
        <CardBody>
          <Row className="pt-50">
            <Col md="6" sm="12">
              <p className="mb-0">Влажность: 25%</p>
              <Progress className="mt-25" value="25" />
            </Col>
            <Col md="6" sm="12">
              <p className="mb-0">Температура: 100%</p>
              <Progress className="mt-25" color="warning" value="100" />
            </Col>
            <Col md="6" sm="12">
                <p className="mb-0">CO<sub>2</sub>: 100%</p>
              <Progress className="mt-25" color="danger" value="100" />
            </Col>
            <Col md="6" sm="12">
              <p className="mb-0">PM 2.5: 90%</p>
              <Progress className="mt-25" color="success" value="90" />
            </Col>

          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default AvgSessions
