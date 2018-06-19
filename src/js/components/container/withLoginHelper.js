import React from 'react'
import {
  loginAttempt,
  storeJWT,
  verifyJWT
} from '../../helpers/LoginHelper'

const withLoginHelper = Component =>
  class extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          loginAttempt={loginAttempt}
          storeJWT={storeJWT}
          verifyJWT={verifyJWT}
        />
      )
    }
  }

export default withLoginHelper
