//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const AliyunPlay = requireNativeComponent('ALiVideoView', AliyunPlayView)

export default class AliyunPlayView extends Component {
  render () {
    return <AliyunPlay {... this.props}/>
  }
}

// AliyunPlayView.propTypes = {
//   exampleProp: React.PropTypes.any
// }
