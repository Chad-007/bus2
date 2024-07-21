import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import * as Location from "expo-location";

const DriverScreen = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    let locationSubscription;

    if (selectedBus) {
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access location was denied");
          return;
        }

        locationSubscription = Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 15000,
            distanceInterval: 0,
          },
          (newLocation) => {
            setLocation(newLocation.coords);
          }
        );
      })();
    }

    return () => {
      if (locationSubscription) {
        locationSubscription.then((subscription) => subscription.remove());
      }
    };
  }, [selectedBus]);

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedBus(value)}
        items={[
          { label: "Bus 1", value: "bus1" },
          { label: "Bus 2", value: "bus2" },
          { label: "Bus 3", value: "bus3" },
        ]}
      />
      <Button title="Start" onPress={() => {}} />
      {location && (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default DriverScreen;
