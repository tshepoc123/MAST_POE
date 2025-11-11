import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AddItemScreen from '../screens/AddItemScreen';
import MenuListScreen from '../screens/MenuListScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
       
        headerStyle: { 
          backgroundColor: '#14047dff', 
          height: 90,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
        headerTintColor: '#FFF',  
        headerTitleStyle: { 
          fontWeight: '700',
          fontSize: 20,
        },

        tabBarActiveTintColor: '#140374ff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 65,
          backgroundColor: '#FFF',
          borderTopWidth: 2,
          borderTopColor: '#F0F0F0',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Create" 
        component={AddItemScreen} 
        options={{ 
          tabBarLabel: 'Create',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="My Menu" 
        component={MenuListScreen} 
        options={{ 
          tabBarLabel: 'My Menu',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="fast-food-outline" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
