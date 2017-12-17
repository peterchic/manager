import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // multiple styles can be put in an array. the left style will be the default, but if you
    // need ot override a style, put that on the right. the props holds a specific addition being
    // passed down from the parent component.
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
