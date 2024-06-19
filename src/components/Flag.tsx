import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  height: number;
};

export default function Flag({height}: Props) {
  console.log(height);
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
          height,
          width: '100%',
          backgroundColor: 'white',
        },
      ]}>
      <View style={{flex: 1, width: '100%', backgroundColor: 'red'}} />
      <View style={{flex: 2, width: '100%', backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, width: '100%', backgroundColor: 'green'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
