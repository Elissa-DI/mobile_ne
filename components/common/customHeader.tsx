import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

type CustomHeaderProps = {
  title: string;
  hideIcons?: boolean;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, hideIcons = true }) => {
  const pathname = usePathname();

  const isOnNotificationsPage = pathname === '/notifications';

  return (
    <View className="flex-row justify-between items-center pt-10 mb-4 px-4">
      <View className="flex-row items-center space-x-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-primary">{title}</Text>
      </View>

      {!hideIcons && (
        <View className="flex-row">
          <TouchableOpacity
            className={`rounded p-1 ${
              isOnNotificationsPage
                ? 'bg-primary'
                : 'border border-gray-500'
            }`}
          >
            <Ionicons
              name="notifications-outline"
              size={18}
              color={isOnNotificationsPage ? '#ffffff' : '#6b7280'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CustomHeader;
