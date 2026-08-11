import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, StatusBar, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import person from "./assets/person.png";
import exercise from "./assets/exercise.png";
import study from "./assets/study.png";
import work from "./assets/work.png";
import personal from "./assets/personal.png";
import health from "./assets/health.png";
import shopping from "./assets/shopping.png";
import finance from "./assets/finance.png";

const categories = [
  {
    title: "Exercise",
    tasks: 12,
    image: exercise,
  },
  {
    title: "Study",
    tasks: 12,
    image: study,
  },
  {
    title: "Work",
    tasks: 8,
    image: work,
  },
  {
    title: "Personal",
    tasks: 6,
    image: personal,
  },
  {
    title: "Health",
    tasks: 9,
    image: health,
  },
  {
    title: "Shopping",
    tasks: 5,
    image: shopping,
  },
  {
    title: "Finance",
    tasks: 4,
    image: finance,
  },
];

const tasks = [
  "Mobile App Development",
  "Web Development",
  "Push Ups",
  "Read a Book",
  "Complete Assignment",
  "Morning Run",
  "Review Lecture Notes",
  "Plan Tomorrow",
];

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato: Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello , Devs</Text>
            <Text style={styles.taskCount}>14 tasks today</Text>
          </View>

          <View style={styles.profileContainer}>
            <Image style={styles.profileImage} source={person} />
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>

          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={24} color="#000" />
            <TextInput placeholder="Search" placeholderTextColor="#111" style={styles.searchInput} />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons name="tune" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity key={category.title} style={styles.categoryCard}>
                <Text style={styles.categoryTitle}>
                  {category.title}
                </Text>

                <Text style={styles.categoryTasks}>
                  {category.tasks} Tasks
                </Text>

                <View style={styles.categoryImageContainer}>
                  <Image source={category.image} style={styles.categoryImage} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Ongoing Tasks */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Ongoing Task
          </Text>

          <View style={styles.tasksContainer}>
            {tasks.map((task) => (
              <TouchableOpacity key={task} style={styles.taskCard}>
                <Text style={styles.taskTitle}>
                  {task}
                </Text>

                <View style={styles.taskArrow}>
                  <Ionicons name="chevron-forward" size={20} color="#777" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },

  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  greeting: {
    fontFamily: "Lato",
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
    letterSpacing: 0,
  },

  taskCount: {
    fontFamily: "Lato",
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
    letterSpacing: 0,
    marginTop: 2,
  },

  profileContainer: {
    width: 50,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  profileImage: {
    width: 46,
    height: 45,
    borderRadius: 22,
    resizeMode: "contain",
  },

  /* Search */
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
    gap: 22,
  },

  searchContainer: {
    height: 48,
    flex: 1,
    backgroundColor: "#FBF9F7",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "Lato",
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    letterSpacing: 0,
    paddingVertical: 0,
  },

  filterButton: {
    width: 50,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#F0522F",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Sections */
  section: {
    marginTop: 30,
  },

  sectionTitle: {
    fontFamily: "Lato",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 10,
  },

  /* Categories */
  categoriesContainer: {
    gap: 24,
    paddingRight: 20,
  },

  categoryCard: {
    width: 186,
    height: 192,
    backgroundColor: "#FBF9F7",
    borderRadius: 17,
    paddingTop: 16,
    paddingHorizontal: 16,
    overflow: "hidden",
  },

  categoryTitle: {
    fontFamily: "Lato",
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    lineHeight: 20,
  },

  categoryTasks: {
    fontFamily: "Lato",
    fontSize: 12,
    fontWeight: "400",
    color: "#111",
    lineHeight: 16,
    marginTop: 2,
  },

  categoryImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  /* Tasks */
  tasksContainer: {
    gap: 12,
  },

  taskCard: {
    height: 128,
    backgroundColor: "#FBF9F7",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E8D1BA",
    paddingHorizontal: 16,
    justifyContent: "center",
  },

  taskTitle: {
    fontFamily: "Lato",
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    lineHeight: 20,
    letterSpacing: 0,
  },

  taskArrow: {
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -10,
  },
});