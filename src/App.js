import React, { Fragment } from 'react'
import Switcher from './components/Switcher'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AboutPage from './pages/about'
import ErrorPage from './pages/404Error'
import ContactPage from './pages/contact'
import HomeBlog from './pages/home/HomeBlog'
import BlogDetailsPage from './pages/blog/BlogDetails'

import BlogThreeColumnPage from './pages/blog/ThreeColumn'
import PortfolioDetailsPage from './pages/portfolio/details'

import Works from './pages/portfolio/masonry/works'

const App = () => {
  return (
    <Fragment>
      <Switcher />
      <Router>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + '/contact'}`}
            component={ContactPage}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/blog/:slug'}`}
            component={BlogDetailsPage}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/blog'}`}
            component={BlogThreeColumnPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/works/:slug'}`}
            component={PortfolioDetailsPage}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/works'}`}
            component={Works}
          />

          <Route
            path={`${process.env.PUBLIC_URL + '/about'}`}
            component={AboutPage}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL + '/'}`}
            component={HomeBlog}
          />
          <Route exact component={ErrorPage} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
