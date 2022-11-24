import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchText = text.toLowerCase(); //Aranan texti küçük harf yaptık
      const CurrentTitle = song.title.toLowerCase(); //Şarkı ismini küçük harf yaptık

      return CurrentTitle.indexOf(searchText) > -1; //Eşleşen değer varsa, o değerin index değerini return et, yoksa -1 döner.
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator} //border eklemek için fonksiyon.
        />
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
