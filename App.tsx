import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors, } from 'react-native/Libraries/NewAppScreen';

type Products = {
  id: number,
  description: string,
  qty: number,
}

let initialProductsList: Products[] = [
  {
    id: 1,
    description: 'Water',
    qty: 0,
  },

  {
    id: 2,
    description: 'Apple',
    qty: 0,
  },

  {
    id: 3,
    description: 'Avocado',
    qty: 0,
  },
]

function updateProductQty(productId: number, productQty: number) {
  for (let index = 0; index < productsList.length; index++) {
    const product = productsList[index];
    
    if (product.id === productId) {
      product.qty = productQty;
      break;
    }
  }

  console.log(productsList);
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [products, setProducts] = useState(initialProductsList);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>

        <View style={[{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 100, height: 100,}]}>
          <View>
            <Text>Header</Text>
          </View>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
            <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 'auto', marginBottom: 20,}}>
              <View style={[{width: "50%", paddingLeft: 20,}]}>
                <Text>Id: {item.id}</Text>
                <Text>Desription: {item.description}</Text>
              </View>
              <View style={[{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: "50%",}]}>

                <View style={[{width: 50,}]}>
                  <Button
                    title='-'
                    onPress={
                      () =>{
                        item.qty = item.qty == 0 ? 0 : item.qty - 1;
                        // updateProductQty(item.id, item.qty);
                      }
                    }
                  />                    
                </View>

                <View>
                  <Text>Qty: {item.qty}</Text>                    
                </View>

                <View style={[{width: 50,}]}>
                  <Button
                    title='+'
                    onPress={
                      () =>{
                        item.qty += 1;
                        updateProductQty(item.id, item.qty);
                        setProducts(products);
                      }
                    }
                  />                    
                </View>

              </View>                
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
