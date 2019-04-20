import axios from 'axios';

const fetchAlbums = async () => {
  const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');

  return response.data;
};

export default fetchAlbums;
