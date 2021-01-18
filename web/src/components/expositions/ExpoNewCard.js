import React from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";

import { connect } from "react-redux";
import { setDialog } from "../../actions/dialogActions";

const ExpoNewCard = ({ setDialog }) => (
  <div className="expo-card">
    <Card
      onClick={() => setDialog("ExpoNew")}
      style={{
        boxShadow: "none",
        border: "1px solid #000",
        backgroundColor: "transparent",
      }}
    >
      <CardText className="expo-new">
        <i className="material-icons">add</i>
      </CardText>
    </Card>
    <p> Vytvořit novou výstavu </p>
  </div>
);

export default connect(
  null,
  { setDialog }
)(ExpoNewCard);
