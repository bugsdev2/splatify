import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  const CustomIcon = ({ title, icon, focused }: { title: string; icon: any; focused: boolean }) => {
    return (
      <View>
        <View style={[styles.iconContainer, { backgroundColor: focused ? Colors.lightBlue : Colors.white }]}>
          <Ionicons
            name={icon}
            size={30}
            color={focused ? Colors.white : Colors.gray}
          />
          {focused && <Text style={{ color: Colors.white, fontFamily: 'OswaldB' }}>{title}</Text>}
        </View>
      </View>
    );
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.lightBlue,
          },
          headerTitleStyle: { fontFamily: 'OswaldB', fontSize: 30, color: Colors.white },
          tabBarStyle: {
            height: 75,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerTitle: 'Melodio',
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                title="Home"
                icon="home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                title="Search"
                icon="search"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                title="Settings"
                icon="settings"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 10,
    height: 70,
    borderRadius: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
