import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/home/Home';
import Help from './components/pages/help/Help';
import CampaignListing from './components/pages/campaignListing/CampaignListing'
import CampaignDetails from './components/pages/campaignDetails/CampaignDetails';


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/help">
                    <Help />
                </Route>

                <Route exact path="/campaigns">
                    <CampaignListing />
                </Route>

                <Route exact path="/campaign-details">
                    <CampaignDetails />
                </Route>

                <Route>
                    <h1>404</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default App
