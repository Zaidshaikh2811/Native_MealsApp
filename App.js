
import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealSpecific from './screens/MealSpecific';
import FavoriteContextProvider from './store/context/favorite-context';
import FavoritePage from './screens/FavouriteScreen';

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()


export default function App() {

  return (<>

    <StatusBar style="light" />
    <FavoriteContextProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#351401',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#3f2f25'
          }
        }}>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} options={({ navigation }) => ({
            title: 'All Categories',
            // Adding a like button in the header
            headerRight: () => (
              <Ionicons
                name="heart"
                size={24}
                color="white"
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('Favorites')} // Navigate to the Favorites screen
              />
            ),
          })} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name="Meal" component={MealSpecific} />
          <Stack.Screen name="Favorites" component={FavoritePage} />
        </Stack.Navigator>

      </NavigationContainer>
    </FavoriteContextProvider>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
