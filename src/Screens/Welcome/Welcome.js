import { View, Text } from "react-native";
import React from "react";
import Button from "../../Components/Button/Button";

import { Style } from "./Welcome.Style";

const Welcome = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <Text style={Style.Title}>Welcome to IntDocsExpress</Text>
      <Button title="Start" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default Welcome;
