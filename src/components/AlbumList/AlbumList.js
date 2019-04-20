import React, {  } from 'react';
import { View } from 'react-native';

import AlbumDetail from '../AlbumDetail';

const AlbumList = ({ albums }) => {
  return (
    <View>
      {
        albums.map(album => (
          <AlbumDetail key={album.title} {...album} />
        ))
      }
    </View>
  )
};

export default AlbumList;
