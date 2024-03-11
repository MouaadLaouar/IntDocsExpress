import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { Style } from "./Home.Style";

import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../../Config/FireBase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

import useAuth from "../../Hooks/useAuth";

import * as Linking from 'expo-linking'

const Home = ({ navigation }) => {
  const { userID } = useAuth();
  const [User, setUser] = useState();
  const [IntOrgs, setIntOrgs] = useState([]);

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const getData = async () => {
      const data = [];
      const querySnapshot = await getDocs(
        collection(FIREBASE_FIRESTORE, "intorgs")
      );
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          Name: doc.data().Name,
        });
      });
      setIntOrgs(data);
      if (userID) {
        const DocRef = doc(FIREBASE_FIRESTORE, "users", userID);
        const docSnap = await getDoc(DocRef);
        setUser(docSnap.data());
        // console.log(docSnap.data());
      }
    };
    getData();
  }, [userID]);

  const Logout = () => {
    auth.signOut();
  };
  return (
    <View style={Style.container}>
      <Text style={Style.Title}>Hello {`${User ? User.Name : ""}`}</Text>
      <View style={Style.IntOrgs}>
        <Text style={Style.IntOrgsTitle}>International Organizations</Text>
        <ScrollView style={Style.IntOrgsList}>
          {/* <Button title="Hello" backgroundColor='#31363F' /> */}
          {IntOrgs.map((item, index) => (
            <Button key={index} title={item.Name} backgroundColor="#31363F" onPress={() => navigation.navigate('IntOrgsDetails', {
              IntOrg: item.id
            })} />
          ))}
        </ScrollView>
      </View>
      <Button title="Logout" onPress={Logout} />
    </View>
  );
};

export default Home;
