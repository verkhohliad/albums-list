import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  text: {
    fontSize: 24,
  }
};

const Header = ({ headerText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  )
};

export default Header;
