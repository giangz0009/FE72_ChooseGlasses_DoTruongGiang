import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ImagesList from "./ImagesList";

import Module from "./Module";
import GlassesList from "./GlassesList";

import dataGlasses from "./../Assets/dataGlasses.json";

const imagesList = new ImagesList().getImage();
const glassesList = dataGlasses.map((item) => {
  const regex = /\.[^.]*$/;
  return {
    ...item,
    url: imagesList[item.url.replace(regex, "")],
  };
});

export default class ChooseGlasses extends Component {
  state = {
    activeGlasses: 1,
    chosenGlasses: glassesList[0],
  };
  setChosenGlassesState = (id, glasses) => {
    this.setState({
      activeGlasses: id,
      chosenGlasses: glasses,
    });
  };
  render() {
    return (
      <div
        style={{
          background: "url(" + imagesList.background + ") no-repeat center",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <header className="bg-dark bg-opacity-50">
          <div className="container">
            <h3 className="display-3 text-center text-white text-uppercase py-3">
              Try Glasses App Online
            </h3>
          </div>
        </header>
        <main className="container">
          <Module chosenGlasses={this.state.chosenGlasses} />
          <GlassesList
            glassesList={glassesList}
            activeGlasses={this.state.activeGlasses}
            setChosenGlassesState={this.setChosenGlassesState}
          />
        </main>
      </div>
    );
  }
}
