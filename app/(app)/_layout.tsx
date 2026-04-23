import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              size={24}
              color={focused ? "#27f561" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="calendar-check"
              size={24}
              color={focused ? "#27f561" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbox-ellipses"
              size={24}
              color={focused ? "#27f561" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? "#27f561" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#a19e9d",
    borderTopColor: "#e5e5e5",
    borderTopWidth: 1,
    height: 64,
    paddingTop: 8,
  },
});
