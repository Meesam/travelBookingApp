import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({navigation}) => {

  return (
    
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.container}>
        <Image
          style={styles.bgImag}
          resizeMode="contain"
          source={require("../assets/images/onboarding_image.jpg")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.heading}>Digital Tickets</Text>
          <Text style={styles.subheading}>
            Easy solution to buy tickets for your travel, business trips,
            transportation, lodging and culinary.
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Dashboard")}
            style={[
              {
                shadowOffset: {
                  width: 1,
                  height: 4,
                },
                shadowOpacity: 0.2,
              },
            ]}
          >
            <LinearGradient
              colors={["#46aeff", "#5884ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Start !</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImag: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },
  heading: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  subheading: {
    width: 250,
    lineHeight: 25,
    color: "#777",
    textAlign: "center",
    paddingBottom: 40,
  },
  button: {
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 90,
    shadowColor: "#444",
    elevation:5
  },
  buttonText: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
});
