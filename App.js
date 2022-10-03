import React from 'react';
// import Home screen from screen folder 
import { Home } from "./screens";
// for stack navigation install 
// 1) @react-navigation / native
// 2) @react-navigation / stack 
// 3) npm install react-native-screens react-native-safe-area-context

// import createStackNavigator from @react-navigation//stack
import { createStackNavigator } from "@react-navigation/stack";
// import NavigationContainer, DefaultTheme from @react-navigation/native
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// make a theme object 
const theme = {
    // spread the DefaultTheme
    ...DefaultTheme,
    colors: {
        // spread the default theme and colors
        ...DefaultTheme.colors,
        // border is transparent
        border: "transparent",
    },
};

// Stack = createStackNavigator()
const Stack = createStackNavigator();

const App = () => {
    return (
        // Wrap everyThing into the NavigationContainer and set a theme equal to theme object 
        <NavigationContainer theme={theme}>
            {/* Access the Stack variable and access the Navigator  */}
            <Stack.Navigator
                // make the header false
          screenOptions={{
            headerShown:false
                }}
                // initialRouteName is Home 
          initialRouteName={'Home'}
            >
                 {/* Access the Stack variable and access the Screen and give the name = Home and component is Home object */}
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;