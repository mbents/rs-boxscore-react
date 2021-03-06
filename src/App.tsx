import React, { useState, createContext, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { Franchises } from './components/Franchises'
import { Ballparks } from './components/Ballparks'
import Boxscores from './components/Boxscores'
import Boxscore from './components/Boxscore'
import { AppBar, Tabs, Tab, Container, Drawer, Typography } from '@material-ui/core'
import { Home } from './components/Home'
import HomeIcon from '@material-ui/icons/Home'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import GroupIcon from '@material-ui/icons/Group'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { makeStyles } from '@material-ui/core/styles'
import { SearchStore } from './store/SearchStore'
import { useLocalStore } from 'mobx-react'

const useStyles = makeStyles({
  containerMargin: {
    marginTop: '5px'
  },
})

const searchContext = createContext(null)

export const SearchProvider = ({ children }) => {
  const store = useLocalStore(SearchStore)
  return <searchContext.Provider value={store}>{children}</searchContext.Provider>
}

export const useStore = () => {
  const store = useContext(searchContext)
  if (!store) {
    throw new Error('useStore must be used within SearchProvider')
  }
  return store
}

function App() {
  const [currentTab, setCurrentTab] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue)
  }

  const classes = useStyles()

  return (
    <SearchProvider>
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
              <Tab value={3} icon={<ListAltIcon />} label="Boxscores" onClick={() => setIsDrawerOpen(true)} />
            </Tabs>
          </AppBar>
          <Container maxWidth="lg" className={classes.containerMargin}>
            <Switch>
              <Route path="/ballparks" component={Ballparks} />
              <Route path="/franchises" component={Franchises} />
              <Route exact path="/boxscores" component={Boxscores} />
              <Route 
                path="/boxscores/:gameId"
                render={(props) => <Boxscore {...props} />}
              />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Container maxWidth="sm" className={classes.containerMargin}>
              <Typography variant="h6">Search boxscores</Typography>
              <Boxscores />
            </Container>
          </Drawer>
        </div>
      </Router>
    </SearchProvider>
  )
}

export default App
