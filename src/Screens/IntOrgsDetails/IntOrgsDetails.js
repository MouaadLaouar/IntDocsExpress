import { Text, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Style } from "./IntOrgsDetails.Style";

import { FIREBASE_FIRESTORE } from "../../Config/FireBase";
import { collection, getDocs, query, where } from "firebase/firestore";

import Button from "../../Components/Button/Button";

import * as Linking from 'expo-linking'

const IntOrgsDetails = ({ route, navigation }) => {
  const { IntOrg } = route.params;
  const [Documents, setDocuments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = [];

        const q = query(
          collection(FIREBASE_FIRESTORE, "documents"),
          where("org", "==", IntOrg)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        // Set the retrieved documents to the state
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    getData();
  }, [IntOrg]);

  if (Documents.length === 0) {
    return (
      <View style={Style.Empty}>
        <Text>There is not Documents right now </Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={Style.container}>
      <ScrollView style={ Style.ScrollView }>
        { Documents.map((item, index) => (
          <Button key={index} title={item.name} onPress={Linking.openURL(item.url)} />
        ))}
      </ScrollView>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default IntOrgsDetails;
