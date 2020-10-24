import React from "react";
import { StyleSheet, View, Image, ScrollView, Platform } from "react-native";
import IconView from "./IconView";
import {
  flightColor,
  busColor,
  trainColor,
  taxiColor,
  bedColor,
  eatColor,
  compassColor,
  eventColor,
} from "./styles";
import Destination from "./Destination";

const Category = () => {
  return (
    <ScrollView
      style={styles.categoryContainer}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          ...styles.categoryContainer,
          marginTop: 10,
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <Image
          style={styles.bgImag}
          resizeMode="cover"
          source={require("../assets/images/home_banner.jpg")}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.iconContainer}>
          <IconView
            lable="Flight"
            bgColor={flightColor}
            source={require("../assets/icons/airplane_icon.png")}
          />
          <IconView
            lable="Train"
            bgColor={trainColor}
            source={require("../assets/icons/train_icon.png")}
          />
          <IconView
            lable="Bus"
            bgColor={busColor}
            source={require("../assets/icons/bus_icon.png")}
          />
          <IconView
            lable="Taxi"
            bgColor={taxiColor}
            source={require("../assets/icons/taxi_icon.png")}
          />
        </View>
        <View style={styles.iconContainer}>
          <IconView
            lable="Hotel"
            bgColor={bedColor}
            source={require("../assets/icons/bed_icon.png")}
          />
          <IconView
            lable="Eats"
            bgColor={eatColor}
            source={require("../assets/icons/eat_icon.png")}
          />
          <IconView
            lable="Adventure"
            bgColor={compassColor}
            source={require("../assets/icons/compass_icon.png")}
          />
          <IconView
            lable="Event"
            bgColor={eventColor}
            source={require("../assets/icons/event_icon.png")}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Destination />
      </View>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImag: {
    width: Platform.OS === "ios" ? 335 : 350,
    height: 200,
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 5,
    elevation: 5,
  },
});
