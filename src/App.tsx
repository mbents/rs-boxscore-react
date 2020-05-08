import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { Franchises } from './components/Franchises'
import { Ballparks } from './components/Ballparks'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { Home } from './components/Home'
import HomeIcon from '@material-ui/icons/Home'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import GroupIcon from '@material-ui/icons/Group'

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Tabs
            onChange={() => console.log('clicked on a tab!')}
            value={0}
            centered
          >
            <Tab icon={<HomeIcon />} label="Home" component={Link} to="/" />
            <Tab icon={<EventSeatIcon />} label="Ballparks" component={Link} to="/ballparks" />
            <Tab icon={<GroupIcon />} label="Franchises" component={Link} to="/franchises" />
          </Tabs>
        </AppBar>
        <Switch>
          <Route path="/ballparks" component={Ballparks} />
          <Route path="/franchises" component={Franchises} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
