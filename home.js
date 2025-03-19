import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Dummy data
const categories = [
  { id: '1', name: 'Pizza', image: require('./assets/pizza.png') },
  { id: '2', name: 'Burgers', image: require('./assets/pizza.png') },
  { id: '3', name: 'Steak', image: require('./assets/pizza.png') },
];

const popularItems = [
  { id: '1', name: 'Food 1', price: '$1', image: require('./assets/pizza.png') },
  { id: '2', name: 'Food 2', price: '$3', image: require('./assets/pizza.png') },
];

const saleOffItems = [
  { id: '1', name: 'Food 3', price: '$5', discount: '10%', image: require('./assets/pizza.png') },
];

// Component Search Bar
const SearchBar = () => (
  <View style={styles.searchContainer}>
    <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
    <TouchableOpacity>
      <Text style={styles.searchIcon}>🔍</Text>
    </TouchableOpacity>
  </View>
);

// Component Header cho danh sách
const HeaderList = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.viewAll}>View all</Text>
    </TouchableOpacity>
  </View>
);

// Component danh sách danh mục (Top Categories)
const CategoriesList = () => (
  <FlatList
    horizontal
    data={categories}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.categoryItem}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text>{item.name}</Text>
      </View>
    )}
  />
);

// Component danh sách sản phẩm (Popular & Sale-off Items)
const ItemsList = ({ data }) => (
  <FlatList
    horizontal
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.itemImage} />
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        {item.discount && <Text style={styles.discount}>{item.discount} OFF</Text>}
      </View>
    )}
  />
);

// Component chính màn hình Home
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Explorer</Text>
      <SearchBar />

      <HeaderList title="Top Categories" />
      <CategoriesList />

      <HeaderList title="Popular Items" />
      <ItemsList data={popularItems} />

      <HeaderList title="Sale-off Items" />
      <ItemsList data={saleOffItems} />
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'orange',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemContainer: {
    width: 120,
    marginRight: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  discount: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Home;
