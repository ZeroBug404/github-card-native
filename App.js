import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png",
          }}
          style={{ width: 80, height: 80 }}
        />
        <View style={styles.title}>
          <Text style={{ color: "#323b49", fontSize: 20, fontWeight: "bold" }}>
            The Octocat
          </Text>
          <Text style={{ color: "#70b3fe" }}>@octocat</Text>
          <Text style={{ color: "gray" }}>Joined 25 Jan 2011</Text>
        </View>
      </View>
      <View>
        <Text style={{ color: "#323b49", lineHeight: 30 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi
          corporis nobis eveniet eligendi blanditiis rem ipsum eum nostrum
          reprehenderit!
        </Text>
      </View>
      <View style={styles.card}>
        <View style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
          <Text>Repos</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>8</Text>
        </View>
        <View style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
          <Text>Followers</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>3938</Text>
        </View>
        <View style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
          <Text>Following</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>9</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 20,
  },
  header: {
    flex: 0.4,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  card: {
    flex: 0.2,
    flexDirection: "row",
    gap: 20,
    paddingVertical: 20,
    backgroundColor: "#f6f8ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 30,
  },
});
