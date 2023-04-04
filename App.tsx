import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SectionList, FlatList } from "react-native";

interface IPerson {
  name: string;
  age: number;
}

interface IData {
  key: string;
  list: IPerson[];
}
interface IGroup {
  title: { name: string; description: string };
  data: IData[];
  key: string;
}

const team: IGroup[] = [
  {
    title: { name: "G1", description: "bla bla bla" },
    key: "0",
    data: [
      {
        key: "0",
        list: [
          {
            name: "Marcelo",
            age: 41,
          },
          {
            name: "Daiana",
            age: 37,
          },
        ],
      },
    ],
  },
  {
    title: { name: "G2", description: "bla bla bla" },
    key: "1",
    data: [
      {
        key: "1",
        list: [
          {
            name: "Samuel",
            age: 7,
          },
        ],
      },
    ],
  },
];

export default function App() {
  return (
    <View style={{ marginTop: 100 }}>
      <SectionList
        sections={team}
        keyExtractor={(item, index) => item.key}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title.name}</Text>
        )}
        renderItem={({ item, index, section }) => (
          <FlatList
            key={item.key}
            data={item.list}
            keyExtractor={(item, index) => item.name + index}
            numColumns={2}
            renderItem={({ item }: { item: IPerson }) => {
              return <Text>{item.name}</Text>;
            }}
          />

          // numColumns={2}
        )}
      />
    </View>
  );
}
