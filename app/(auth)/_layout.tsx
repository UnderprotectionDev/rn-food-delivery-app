import { Slot } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>Auth Layout</Text>
      <Slot />
    </SafeAreaView>
  );
}
