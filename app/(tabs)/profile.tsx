import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/common/customHeader";

const ProfilePage = () => {
  const navigationButtons = [
    { title: "Edit Profile" },
    { title: "Privacy Settings" },
    { title: "Notifications" },
    { title: "Logout", isLogout: true },
  ];

  const handlePress = (title: string) => {
    if (title === "Logout") {
      Alert.alert("Logout", "You have been logged out.");
    } else {
      Alert.alert(title, `You tapped on "${title}".`);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CustomHeader title="Profile" />
      <View className="px-4">
        <View className="items-center mt-4 mb-6">
          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=2",
            }}
            className="w-24 h-24 rounded-full"
          />
          <Text className="text-xl font-semibold mt-4">Jane Doe</Text>
          <Text className="text-gray-500">jane.doe@example.com</Text>
        </View>

        <FlatList
          data={navigationButtons}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handlePress(item.title)}
              className={`flex-row justify-between items-center my-2 py-3 px-5 rounded-full shadow-sm ${
                item.isLogout ? "bg-red-100" : "bg-gray-100"
              }`}
            >
              <Text
                className={`font-medium ${
                  item.isLogout ? "text-red-600" : "text-gray-800"
                }`}
              >
                {item.title}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={16}
                color={item.isLogout ? "rgb(220, 38, 38)" : "#4B5563"} // red-600 or gray-600
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
