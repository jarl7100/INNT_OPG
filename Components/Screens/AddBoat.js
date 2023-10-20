import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { FAB } from 'react-native-paper';

export class AddBoat extends Component {
  render() {
    return (
      <View>
        <FAB
          style={{
            position: 'absolute',
            margin: 16,
            center: 0,
          
          }}
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </View>
    )
  }
}

export default AddBoat