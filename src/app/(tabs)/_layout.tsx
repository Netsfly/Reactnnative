import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { AppColors, Colors, Fonts } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        sceneStyle: { backgroundColor: AppColors.background },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          height: 68,
          marginHorizontal: 14,
          marginBottom: 12,
          borderRadius: 22,
          backgroundColor: AppColors.tabBar,
          borderTopWidth: 0,
          paddingTop: 8,
          paddingBottom: 8,
          shadowColor: AppColors.shadow,
          shadowOpacity: 0.1,
          shadowRadius: 16,
          shadowOffset: { width: 0, height: 6 },
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: Fonts?.rounded,
          fontWeight: "700",
          marginBottom: 2,
        },
        tabBarItemStyle: {
          borderRadius: 16,
          marginHorizontal: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={22}
              name="list.bullet.rectangle.portrait.fill"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Insights",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="chart.bar.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}