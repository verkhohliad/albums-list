import React from 'react';
import { View, Text } from 'react-native';
import { string } from 'prop-types';

import Card from '../Card';
import CardSection from '../CardSection';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

const AlbumDetail = ({ title, artist }) => {
  return (
    <Card>
      <CardSection>
        <View></View>
        <View stly={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
};

AlbumDetail.propTypes = {
  artist: string.isRequired,
  image: string.isRequired,
  thumbnail_image: string.isRequired,
  title: string.isRequired,
  url: string.isRequired,
};

export default AlbumDetail;
