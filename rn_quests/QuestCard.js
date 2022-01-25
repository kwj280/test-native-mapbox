import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

const QuestCard = ({ quest }) => {
  console.log(quest);
  return (
    <>
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image
          source={{
            uri: quest.thumbnail_url,
          }}
        />
        <Card.Divider />
        <View style={{paddingHorizontal: 16, paddingBottom: 4}}>
          <Card.Title style={{ alignSelf: "flex-start" }} h4>
            {quest.title}
          </Card.Title>
          <Text style={{ marginBottom: 2 }}>{quest.description}</Text>
          <Text style={{ fontSize: 12, marginBottom: 2 }} span>
            {quest.location}
          </Text>
          <Button
            containerStyle={{
              alignSelf: "flex-end",
            }}
            title="View"
            type="clear"
            titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
          />
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  button: {
    alignSelf: "flex-end",
  },
});

export default QuestCard;
