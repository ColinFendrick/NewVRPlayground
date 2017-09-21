import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class NewVRProject extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',  
          transform: [{ translate: [-1, 1, -5] }],
        }}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>Turn</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'purple' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>Around</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'grey' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>Dummy</Text>
          </View>
        </View>
          <Text style={{ 
            backgroundColor: 'purple', 
            transform: [
              { translate: [4, 3, 0] },
              { rotateY: -90 }
            ],
            fontSize: 0.8 
          }}>
            Keep going...
          </Text>
          <Text style={{
            backgroundColor: 'red',
            transform: [
              { translate: [-10, 3, 0] },
              { rotateY: 90 }
            ],
            fontSize: 0.8
          }}>
            Not this way!
          </Text>
        
        <Image
          source={require('./static_assets/giphy.gif')}
          style={{
            transform: [
              { translate: [-3, 5, 8] },
              { rotateY: 180 }
            ],
            height: 5,
            width: 5
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('NewVRProject', () => NewVRProject);
