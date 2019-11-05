import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.scss";
// import IconButton from "@material-ui/core/IconButton";

export default class Header extends React.Component<any,any> {
  render() {
    return (
      <div className="Header">
          <MenuIcon onClick={this.props.onToggleSlider} className="Header__Menu" />
      </div>
    );
  }
}
