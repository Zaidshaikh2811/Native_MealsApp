
import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealSpecific from './screens/MealSpecific';


const Stack = createNativeStackNavigator()


export default function App() {
  return (<>

    <StatusBar style="light" />
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
        <Stack.Screen name='MealsCategories' component={CategoriesScreen} options={{
          title: 'All Categories',

        }} />
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        <Stack.Screen name="Meal" component={MealSpecific} />
      </Stack.Navigator>

    </NavigationContainer>
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
