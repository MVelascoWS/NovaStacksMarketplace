import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer";
import Marketplace from "./components/Marketplace";
import Details from "./components/Details";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    document.body.style.backgroundColor = '#f5f5f5';
    document.body.style.margin = '0';
    return(
        <Router>
            <ScrollToTop />
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/marketplace">
                            <Marketplace/>
                        </Route>
                        <Route exact path="/details">
                            <Details/>
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
export default App;