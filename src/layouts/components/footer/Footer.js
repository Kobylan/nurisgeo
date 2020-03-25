import React from "react"
import ScrollToTop from "react-scroll-up"
import { Button } from "reactstrap"
import { Heart, ArrowUp } from "react-feather"
import classnames from "classnames"

const Footer = props => {
  let footerTypeArr = ["sticky", "static", "hidden"]
  return (
    <footer
      className={classnames("footer footer-light", {
        "footer-static": props.footerType === "static" || !footerTypeArr.includes(props.footerType),
        "d-none": props.footerType === "hidden"
      })}
    >
      <p className="mb-0 clearfix">
        <span className="float-md-left d-block d-md-inline-block mt-25">
          Разработали Amina, Nurislam
        </span>
        <span className="float-md-right d-none d-md-block">
          <span className="align-middle">Руководитель Орынбасарова Э.
</span>{" "}
          <Heart className="text-danger" size={15} />
        </span>
      </p>

    </footer>
  )
}

export default Footer
