import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import QuestCard from "./QuestCard";

const HOST_SERVER = "https://brave-swan-12.loca.lt";

export default function QuestList() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    fetch(`${HOST_SERVER}/api/quest`)
      .then((quest) => quest.json())
      .then((data) => {
        setQuests(data);
      });
  }, []);
  return (
    <ScrollView style={styles.container}>
      {quests?.map((quest) => {
        return (
          <QuestCard key={quest.id} quest={quest}>
            Quest List
          </QuestCard>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
