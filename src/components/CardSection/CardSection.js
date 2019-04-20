import React from 'react';
import { View } from 'react-native';

const styles = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

const CardSection = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
};

export default CardSection;
