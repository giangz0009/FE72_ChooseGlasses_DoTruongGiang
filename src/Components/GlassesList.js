import React, { Component } from "react";
import GlassesItem from "./GlassesItem";

export default class GlassesList extends Component {
  renderHTML() {
    return this.props.glassesList.map((item) => {
      return (
        <GlassesItem
          key={item.id}
          glassesInfo={item}
          activeGlasses={this.props.activeGlasses}
          setChosenGlassesState={this.props.setChosenGlassesState}
        />
      );
    });
  }
  render() {
    return <div className="row g-4 bg-white mt-5 p-5">{this.renderHTML()}</div>;
  }
}
