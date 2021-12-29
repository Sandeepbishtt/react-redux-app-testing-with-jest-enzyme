import React from "react";
import Header from "./Components/Header/Header";
import "./style.css";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/Main/MainContent";
import Blog from "./Components/Blog/Blog";
import { Route, Switch } from "react-router";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" data-test ="appComponent">
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
