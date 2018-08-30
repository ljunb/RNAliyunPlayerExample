/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, NativeModules } from "react-native";
import AliyunPlayerView from './AliyunPlayerView';
// import AliyunPlayerView from 'react-native-aliyun-player';

const SCREEN_W = Dimensions.get('window').width;

export default class App extends Component {

  state = {
    play: true
  }

  handleEventCallback = evt => {
    const { event } = evt.nativeEvent;
    console.log(`Event: ${event}`);
  }

  handlePlayingCallback = evt => {
    const { currentTime, duration } = evt.nativeEvent;
    console.log(`CurrentTime: ${currentTime} duration: ${duration}`);
  }

  handlePlay0 = () => {
    NativeModules.AliyunVideo.setUrl()
  };
  handlePlay = () => {
    NativeModules.AliyunVideo.start()
  };
  handlePlay2 = () => {
    NativeModules.AliyunVideo.pause()
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePlay0} style={{ height: 40, width: 100, backgroundColor: 'red' }}>
          <Text>set url</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePlay} style={{ height: 40, width: 100, backgroundColor: 'red' }}>
          <Text>播放</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePlay2} style={{ height: 40, width: 100, backgroundColor: 'red' }}>
          <Text>暂停</Text>
        </TouchableOpacity>
        <AliyunPlayerView
          style={{ height: 200, width: SCREEN_W }}
          play={this.state.play}
          prepareAsyncParams={{
            type: "vidSts",
            vid: "04aa91c809c741178d76af4b95f1b680",
            accessKeyId: "LTAIH1j0TQwkhfjC",
            accessKeySecret: "M8wXRq0Vq03JY8jHdMddCupyAPNvJs",
            securityToken:
              "eyJTZWN1cml0eVRva2VuIjoiQ0FJUzN3SjFxNkZ0NUIyeWZTaklyNG5kQjhuT25JZ1cvSWFLWldYbTEwUS9ZN2g5cWEzZHFEejJJSHBOZTNocUIrMGZzUGt3bEdsVTZmZ2Nsck1xRnNjZkhoYWVONUVxdE1RUHExUDRKcExGc3QySjZyOEpqc1ZkcE1OazNscXBzdlhKYXNEVkVma3VFNVhFTWlJNS8wMGU2TC8rY2lyWVhEN0JHSmFWaUpsaFE4MEtWdzJqRjFSdkQ4dFhJUTBRazYxOUszemRaOW1nTGlidWkzdnhDa1J2MkhCaWptOHR4cW1qL015UTV4MzFpMXYweStCM3dZSHRPY3FjYThCOU1ZMVdUc3Uxdm9oemFyR1Q2Q3BaK2psTStxQVU2cWxZNG1YcnM5cUhFa0ZOd0JpWFNaMjJsT2RpTndoa2ZLTTNOcmRacGZ6bjc1MUN0L2ZVaXA3OHhtUW1YNGdYY1Z5R0ZkMzhtcE9aUXJ6eGFvWmdLZStxQVJtWGpJRFRiS3VTbWhnL2ZIY1dPRGxOZjljY01YSnFBWFF1TUdxQWMvRDJvZzZYTzFuK0ZQamNqUDVvajRBSjVsSHA3TWVNR1YrRGVMeVF5aDBFSWFVN2EwNDQxTUtpUXVranBzUWFnQUdUcTdBbVZMOWtuV2dzMXVzd0o2bHNXZWVzaUVKU2owUmROa01ySkVOejI3R0FWdUYrVzFZQkRGNVA1dFBsYk45ZDMreE02QkQyTHJVdUdMT1dCbXE1b2JyOVJmeW95MTBNZ2FFS1NObVI0VUl1dXFSdjdweFFscnFWNmlBcGZZR0NaV1VxM0JTQW5nM0VLY1hoS1QyeTZVbVBSYW8wait5Tkk1d2o4cC8zdFE9PSIsIkF1dGhJbmZvIjoie1wiQ2FsbGVyXCI6XCJZMXN3bnBGK2RGL2g4RVVLeTBSU0xOcHVWMGxnQ3ZvSXNyUU1PcE9ROXRRPVxcclxcblwiLFwiRXhwaXJlVGltZVwiOlwiMjAxOC0wNi0wNlQwNjoxNDozMVpcIixcIk1lZGlhSWRcIjpcIjhlODgwZjRlNjg1MjQ4MzY4ZDZjMDgyMjJlNzlmMmYyXCIsXCJTaWduYXR1cmVcIjpcIkpqaHhvcmRqSVFXNXRqZVJoRW1zemNjRmVOMD1cIn0iLCJWaWRlb01ldGEiOnsiU3RhdHVzIjoiTm9ybWFsIiwiVmlkZW9JZCI6IjhlODgwZjRlNjg1MjQ4MzY4ZDZjMDgyMjJlNzlmMmYyIiwiVGl0bGUiOiLor77nqIvlvJXlhaXigJTigJTnmb3ph5Hov5jmmK"
          }}
          onEventCallback={this.handleEventCallback}
          onPlayingCallback={this.handlePlayingCallback}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
