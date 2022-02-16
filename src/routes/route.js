import React from "react"
import PropTypes from 'prop-types'
import { Route, Navigate } from "react-router-dom"

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (localStorage.getItem("authUser")) {
        return (
          <Navigate replace
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

AppRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any
}

export default AppRoute
