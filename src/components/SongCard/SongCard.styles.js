import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info_container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  year: {
    marginLeft: 30,
    color: 'grey',
    fontWeight: 'bold',
  },
  content_container: {
    flexDirection: 'row',
  },
  soldout_container: {
    marginTop: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginLeft: 10,
  },
  soldout_title: {
    color: 'red',
    fontSize: 12,
  },
});
