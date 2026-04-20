import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const { signOut } = useAuth();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.replace("/sign-in");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You're signed in!</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.signOut}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  signOut: {
    color: "#e53e3e",
    fontSize: 16,
  },
});
