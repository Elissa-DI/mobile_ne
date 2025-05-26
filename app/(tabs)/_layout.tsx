// import { Tabs } from "expo-router";
// import React from "react";
// import { Platform } from "react-native";

// import { HapticTab } from "@/components/HapticTab";
// import { IconSymbol } from "@/components/ui/IconSymbol";
// import TabBarBackground from "@/components/ui/TabBarBackground";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import { Ionicons } from "@expo/vector-icons";

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: "absolute",
//           },
//           default: {},
//         }),
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name='home' size={20} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="create"
//         options={{
//           title: "Create",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name='add' size={20} color={color}/>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name='person' size={20} color={color}/>
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TabBarIcon = ({ name, color }: { name: keyof typeof Ionicons.glyphMap; color: string }) => (
  <Ionicons name={name} size={24} color={color} />
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: { marginTop: 10 },
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          marginHorizontal: 10,
          height: 60,
          borderRadius: 30,
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarActiveTintColor: "#0ea5e9", // tailwind's sky-500
        tabBarInactiveTintColor: "#94a3b8", // slate-400
      }}
      safeAreaInsets={{ bottom: 0 }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: () => (
            <View className="absolute -top-4 w-[70px] h-[70px] rounded-full bg-sky-500 justify-center items-center shadow-md shadow-black/20">
              <Ionicons name="add" size={28} color="white" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
