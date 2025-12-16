import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import AppTabs from "./src/navigation/AppTabs";
import { AuthProvider, useAuth } from "./src/context/AuthContext";

function Root() {
  const { user } = useAuth();
  return user ? <AppTabs /> : <AuthStack />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </AuthProvider>
  );
}
