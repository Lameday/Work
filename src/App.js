import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./pages/Calendar/Calendar";
import Chat from "./pages/Chat/Chat";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Mail from "./pages/Mail/Mail";
import Stats from "./pages/Stats/Stats";
import Verify from "./pages/Verify/Verify";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mail">
            <Mail />
          </Route>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <Route exact path="/verify">
            <Verify />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
