import React from "react";
import Home from "./pages/home.component";
import Location from "./pages/location.component";
import NotFound from "./pages/notfound.component";
import Navigation from "./components/navigation.component";
import Footer from "./components/footer.component";
import { Route, Routes } from "react-router";
import { StaticRouter } from "react-router-dom/server";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      url: props.data.url,
      clientIp: props.data.clientIp,
      //geo: props.data.geo,
    };
  }

  render(): React.ReactElement {
    const data: ILocation = {
      clientIp: this.state.clientIp,
      url: this.state.url,
      //geo: this.state.geo,
    };
    return (
      <div>
        <StaticRouter location={this.state.url}>
          <Navigation />
          <br />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/location" element={<Location data={data} />} />
              <Route element={NotFound} />
            </Routes>

            <Footer />
          </div>
        </StaticRouter>
      </div>
    );
  }
}
