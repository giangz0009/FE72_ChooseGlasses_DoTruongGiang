import React, { Component } from "react";
import Style from "./Module.module.css";
import clsx from "clsx";
export default class Module extends Component {
  render() {
    const { url, name, desc } = this.props.chosenGlasses;
    return (
      <div className="row py-5 justify-content-around">
        <div className="col col-lg-3">
          <div className={clsx(Style.card, Style.after)}>
            <div className={clsx(Style.img)}>
              <img src={url} />
            </div>
            <div className={clsx(Style.info)}>
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </div>
        <div className="col col-lg-3">
          <div className={clsx(Style.card)}></div>
        </div>
      </div>
    );
  }
}
