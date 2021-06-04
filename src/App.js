import Header from "./components/Header";
import {Switch, Route} from "react-router-dom";
import Index from "./components/Index";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import PageNotFound from "./components/PageNotFound";



function App() {
  return (
    <>
    <Header />
    
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/appointment" component={Appointment} />
      <Route component={PageNotFound} />
    </Switch>

    <Footer />
    </> 
  );
}

export default App;
