import {StyleSheet, View} from 'react-native';

import React from 'react';
import Shorts from './Shorts';

type Item = {
  id: string;
  url: string;
};

const items: Item[] = [
  {
    id: '001',
    url: 'https://youtube.com/shorts/Uj74798gItc',
  },
  {
    id: '002',
    url: 'https://youtube.com/shorts/HXyx8Sr5RTQ',
  },
  {
    id: '003',
    url: 'https://youtube.com/shorts/QgAA_5IPNIs',
  },
  {
    id: '004',
    url: 'https://youtube.com/shorts/GFAa6l5zbHE',
  },
  {
    id: '005',
    url: 'https://youtube.com/shorts/-IcYublDy7I',
  },
  {
    id: '006',
    url: 'https://youtube.com/shorts/6a1tmHi6d60',
  },
  {
    id: '007',
    url: 'https://youtube.com/shorts/8Lt1hJnEcq0',
  },
  {
    id: '008',
    url: 'https://youtube.com/shorts/266xNTZN5VI',
  },
  {
    id: '009',
    url: 'https://youtube.com/shorts/xZ48_razkME',
  },
  {
    id: '010',
    url: 'https://youtube.com/shorts/qoM9tP69USo',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Shorts items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default App;
