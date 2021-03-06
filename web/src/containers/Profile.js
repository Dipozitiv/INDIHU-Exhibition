import React from "react";
import { connect } from "react-redux";
import { compose, withState, lifecycle } from "recompose";
import { isEmpty } from "lodash";
import Button from "react-md/lib/Buttons/Button";
import FontIcon from "react-md/lib/FontIcons";
import Divider from "react-md/lib/Dividers";

import AppHeader from "../components/AppHeader";
import Header from "../components/profile/Header";
import UserInfoChange from "../components/profile/UserInfoChange";
import PasswordChange from "../components/profile/PasswordChange";
import { getCurrentUser } from "../actions/userActions";
import { setDialog } from "../actions/dialogActions";

const Profile = props => (
  <div>
    <AppHeader profileStyle />
    {!isEmpty(props.initialValues) && (
      <div className="container edit-profile">
        <Header />
        <div className="flex-form">
          <h3 className="margin-none" style={{ fontSize: 18 }}>
            Editace profilu
          </h3>
        </div>
        <UserInfoChange {...props} />
        <div className="flex-form margin-top">
          <h3 className="margin-none" style={{ fontSize: 18 }}>
            Změna hesla
          </h3>
        </div>
        <PasswordChange {...props} />
        <div className="flex-form margin-top padding-bottom">
          <Divider />
          <div className="flex-row flex-centered margin-top">
            <Button
              primary
              flat
              label="Zrušit účet"
              className="edit-profile-button"
              onClick={() => props.setDialog("DeleteAccount")}
            >
              <FontIcon className="color-black">delete</FontIcon>
            </Button>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default compose(
  connect(
    ({ user: { info } }) => ({ initialValues: info, info }),
    {
      getCurrentUser,
      setDialog
    }
  ),
  withState("activeForm", "setActiveForm", null),
  lifecycle({
    async componentWillMount() {
      const { getCurrentUser } = this.props;
      await getCurrentUser();
    }
  })
)(Profile);
