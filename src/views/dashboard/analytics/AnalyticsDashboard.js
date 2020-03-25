import React from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import Tour, { STATUS } from "react-joyride"
import SalesCard from "./SalesCard"
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker"
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
import SalesStat from "../../ui-elements/cards/analytics/Sales"
import ActivityTimeline from "./ActivityTimeline"
import DispatchedOrders from "./DispatchedOrders"
import themeConfig from "../../../configs/themeConfig"
import "../../../assets/scss/plugins/extensions/react-tour.scss"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import "../../../assets/scss/plugins/extensions/maps.scss"

import MapBasic from "../../maps/MapsBasic";
import MapEvents from "../../maps/MapEvents";

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

let tourState = !themeConfig.disableThemeTour

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTouropen: tourState,
      width : window.innerWidth
    }
  }

  updateWidth = () => {
    this.setState(prevState => ({
      width: window.innerWidth
    }))
  }

 componentDidMount() {
  if (window !== "undefined") {
    window.addEventListener("resize", this.updateWidth, false)
  }
 }


  render() {

    const steps = [
      {
        target: '[data-tour="toggle-icon"]',
        content : "Toggle Collapse Sidebar.",
        disableBeacon: true
      },
      {
        target: "[data-tour='language']",
        content : "You can change language from here.",
        disableBeacon: true
      },
      {
        target: "[data-tour='search']",
        content : "Try fuzzy search to visit pages in flash."             ,
        disableBeacon: true
      },
      {
        target: "[data-tour='user']",
        content :  " Here is user dropdown",
        disableBeacon: true
      },
      {
        target: ".buy-now",
        content: "Buy this awesomeness at affordable price!",
        disableBeacon : true
      }
    ]

    return (
      <React.Fragment>

        <Row className="match-height">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="4">
            <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="4">
            <SalesStat
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
          </Col>
          <Col lg="4">
            <ActivityTimeline />
          </Col>
        </Row>
        <Row className="macth-height">
          <Col sm="12">
          <MapBasic />

        </Col>
        </Row>
        {this.props.layout !== "horizontal" && this.state.width >= 1200 && <Tour
            steps={steps}
            run={this.state.isTouropen}
            continuous={true}
            showSkipButton={true}
            floaterProps={{disableAnimation : true}}
            callback={data => {
              if(([STATUS.FINISHED, STATUS.SKIPPED].includes(data.status)) || data.action === "close"){
                this.setState({ isTouropen : false })
              }
            }}
          />
        }


      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    layout : state.customizer.customizer.layout
  }
}

export default connect(mapStateToProps)(AnalyticsDashboard)
