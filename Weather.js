import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: "Rainy",
        subtitle: "Today's weather is Rainy.",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny",
        subtitle: "Today's weather is Sunny.",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "Today's weather is Thunderstorm.",
        icon: 'weather-ligthning'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "Cloud",
        subtitle: "Today's weather is Clouds.",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subtitle: "Today's weather is Snow.",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "Today's weather is Drizzle.",
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Haze",
        subtitle: "Today's weather is Haze.",
        icon: 'weather-hail'
    },
    Atmosphere: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Atmosphere",
        subtitle: "Today's weather is Atmosphere.",
        icon: 'weather-cloudy'
    },
    Mist: {
        colors: ['#D7D2CC', '#304352'],
        title: "Mist",
        subtitle: "Today's weather is Mist.",
        icon: 'weather-fog'
    }
};

function Weather({ weatherName, temp}) {
    return <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
          <Text style={styles.temp}>
            {temp}
            &deg;
          </Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
          <Text style={styles.subtitle}>
                {weatherCases[weatherName].subtitle}
          </Text>
        </View>
      </LinearGradient>;
    
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    weatherName : PropTypes.string.isRequired
};

export default Weather;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 38,
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "100"
  },
  subtitle: {
    fontSize: 18,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
