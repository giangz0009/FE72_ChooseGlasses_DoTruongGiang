import React, { Component } from "react";

export default class GlassesItem extends Component {
  render() {
    const { id, url } = this.props.glassesInfo;
    return (
      <div className="col col-lg-2">
        <div
          className={`card ${
            this.props.activeGlasses === id
              ? "border-success border border-5"
              : ""
          }`}
          onClick={() => {
            this.props.setChosenGlassesState(id, this.props.glassesInfo);
          }}
        >
          <img src={url} />
        </div>
      </div>
    );
  }
}
