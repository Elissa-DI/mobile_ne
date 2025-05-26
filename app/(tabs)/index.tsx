import React from "react";
import CustomHeader from "@/components/common/customHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <CustomHeader title="Home" hideIcons={false} />
    </SafeAreaView>
  );
};

export default HomePage;
