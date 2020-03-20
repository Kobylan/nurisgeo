import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import {
  MoreVertical,
  ThumbsDown,
  ThumbsUp,
  MessageSquare
} from "react-feather"
import axios from "axios"
import cardImg from "../../assets/img/pages/content-img-4.jpg"

class Advertisement extends React.Component {

    state = {
        ads: []
      }
    
      componentDidMount() {
        axios
          .get("http://localhost:1337/ads")
          .then(response =>{
            console.log("res ads",response);
            this.setState({ ads: response.data.ads })
          }
          )
      }


  render() {
     let insAds = this.state.ads.map(ad=>(

        <Col lg="4" sm="12">
          <Card>
            <CardHeader className="justify-content-between">
              <div className="card-heading">
                <CardTitle className="w-100">{ad.title}</CardTitle>
                <p>Nothing</p>
                <p>Nothing</p>
              </div>
              <div className="icon mb-5">
                <MoreVertical className="float-right" size="20" />
              </div>
            </CardHeader>
            <CardBody>
              <img src={cardImg} alt="Social Card" className="img-fluid" />
              <div className="d-flex justify-content-start mt-2">
                <div className="icon-like mr-2">
                  <ThumbsUp className="success" size={22} />
                  <span className="align-middle ml-50">368</span>
                </div>
                <div className="icon-comment mr-2">
                  <MessageSquare className="primary" size={22} />
                  <span className="align-middle ml-50">341</span>
                </div>
                <div className="icon-dislike">
                  <ThumbsDown className="danger" size={22} />
                  <span className="align-middle ml-50">53</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

     ))



    return (
      <Row>

          {insAds}
        
      </Row>
    )
  }
}
export default Advertisement
