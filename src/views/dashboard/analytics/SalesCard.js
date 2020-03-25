import React from "react"
import { Card, CardBody } from "reactstrap"
import { Award } from "react-feather"

import decorLeft from "../../../assets/img/elements/decore-left.png"
import decorRight from "../../../assets/img/elements/decore-right.png"

class SalesCard extends React.Component {
  render() {
    return (
      <Card className="bg-analytics text-white sales-card">
        <CardBody className="text-center">
          <img src={decorLeft} alt="card-img-left" className="img-left" />
          <img src={decorRight} alt="card-img-right" className="img-right" />
          <div className="avatar avatar-xl bg-primary shadow avatar-dashboard mt-0">
            <div className="avatar-content">
              <Award className="text-white" size={28} />
            </div>
          </div>
          <div className="award-info text-center">
            <h1 className="mb-2 text-white"> Тепловая карта на основе данных с сергек Метео </h1>
            <p className="m-auto mb-0 w-75">
              Немногие знают, но в состав проекта «Сергек» в городе Нур-Султан входит 50 экодатчиков - самостоятельных приборов для измерения качества воздуха. Основной показатель, который они измеряют - количество мелкодисперсных частиц в воздухе. Это такие мелкие частицы пыли, пыльцы, аэрозолей, сажи, и других веществ в воздухе. В столице данные собираются с 50 датчиков в разных районах города, которые также фиксируют температуру, влажность и уровень содержания углекислого газа. Они позволяют отслеживать состояние воздуха и зонировать источники загрязнений. Показания с датчиков поступают несколько раз в минуту. Посмотреть данные с датчиков можно на сайте www.opendata.kz. В скором времени эта информация будет доступна и в приложении Smart Astana для удобства горожан.
            </p>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SalesCard
