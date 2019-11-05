import * as React from "react";
import "./SideNavigation.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import styled, { StyledComponent } from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { IconButton, Divider, Box } from "@material-ui/core";

const SideNavigationWrapper:StyledComponent<any,any> = styled.div`
  position: fixed;
  top: 0rem;
  background: white;
  z-index: 2;
  left: 0;
  bottom: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 18%;
  overflow:hidden;
  transition:all 0.4s ease-in-out;
  transform:${(props:any)=>props.show?"translateX(0)":"translateX(-100%)"};
  @media (max-width: 600px) {
    width:${(props:any)=>props.show?"44%":"10%"};
  }
`;

const ListItemIconStyled = styled(ListItemIcon)`
      min-width:4rem;
`;



class SideNavigation extends React.Component<any, any> {


  render() {
    const{ showSlider ,onToggleSlider}  = this.props;
    return (
      <SideNavigationWrapper show={showSlider}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onToggleSlider}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIconStyled>
              <InboxIcon fontSize={"small"} />
            </ListItemIconStyled>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIconStyled>
              <DraftsIcon fontSize={"small"} />
            </ListItemIconStyled>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </SideNavigationWrapper>
    );
  }
}

export default SideNavigation;
