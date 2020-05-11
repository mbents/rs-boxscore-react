import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { Franchises } from './components/Franchises'
import { Ballparks } from './components/Ballparks'
import { Boxscore } from './components/Boxscore'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { Home } from './components/Home'
import HomeIcon from '@material-ui/icons/Home'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import GroupIcon from '@material-ui/icons/Group'
import ListAltIcon from '@material-ui/icons/ListAlt'

function App() {
  const [currentTab, setCurrentTab] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue)
  }

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Tabs
            onChange={handleChange}
            value={currentTab}
            centered
          >
            <Tab value={0} icon={<HomeIcon />} label="Home" component={Link} to="/" />
            <Tab value={1} icon={<EventSeatIcon />} label="Ballparks" component={Link} to="/ballparks" />
            <Tab value={2} icon={<GroupIcon />} label="Franchises" component={Link} to="/franchises" />
            <Tab value={3} icon={<ListAltIcon />} label="Boxscores" component={Link} to="/boxscore" />
          </Tabs>
        </AppBar>
        <Switch>
          <Route path="/ballparks" component={Ballparks} />
          <Route path="/franchises" component={Franchises} />
          <Route path="/boxscore" component={Boxscore} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
