import * as React from "react";
import "./App.scss";
import Header from "../Header/Header";
import SideNavigation from "../SideNavigation/SideNavigation";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Spinner from '../Spinner/Spinner';


const AddTechnician = React.lazy(() =>
  import("../AddTechnician/AddTechnician")
);


const Home = React.lazy(() => import("../Home/Home"));



const MainWrapper: any = styled.main`
  position: relative;
  display: block;
  top: 4rem;
  width: 79%;
  max-width: 75rem;
  height: calc(100vh - 3rem);
  transition: all 0.4s ease-in;
  margin: ${(props: any) => (props.showSlider ? "0 1% 0 20%" : "0 10%")};

  @media (max-width: 600px) {
    margin: 0 10%;
    max-width: 80%;
  }
`;

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      showSlider: false
    };
  }

  private onToggleSlider = () => {
    this.setState((state: any) => ({
      ...state,
      showSlider: !state.showSlider
    }));
  };
  render() {
    const { showSlider }: any = this.state;

    return (
      <div className="App">
        <header>
          <Header onToggleSlider={this.onToggleSlider} />
          <nav>
            <SideNavigation
              onToggleSlider={this.onToggleSlider}
              showSlider={showSlider}
            />
          </nav>
        </header>
        <MainWrapper className="" showSlider={showSlider}>
          <React.Suspense fallback={<Spinner/>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/addTechnician"
               component={AddTechnician }/>
              />
            </Switch>
          </React.Suspense>
        </MainWrapper>
      </div>
    );
  }
}
