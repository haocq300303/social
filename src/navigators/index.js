import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, focused, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FF0074",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
