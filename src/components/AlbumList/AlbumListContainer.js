import { compose, lifecycle, withState } from 'recompose';

import AlbumList from './AlbumList';
import { fetchAlbums } from '../../utils';

export default compose(
  withState('albums', 'setAlbums', []),
  lifecycle({
    state: {
      albums: [],
    },
    async componentDidMount() {
      this.setState({
        albums: await fetchAlbums()
      });
    }
  })
)(AlbumList);
