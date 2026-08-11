import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const categories = [
  {
    title: "Exercise",
    tasks: 12,
    icon: "run",
  },
  {
    title: "Study",
    tasks: 12,
    icon: "book-open-page-variant",
  },
  {
    title: "Work",
    tasks: 8,
    icon: "briefcase-outline",
  },
  {
    title: "Personal",
    tasks: 6,
    icon: "account-heart-outline",
  },
  {
    title: "Health",
    tasks: 9,
    icon: "heart-pulse",
  },
  {
    title: "Shopping",
    tasks: 5,
    icon: "shopping-outline",
  },
  {
    title: "Finance",
    tasks: 4,
    icon: "wallet-outline",
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
            <Text style={styles.profileEmoji}>👨‍💻</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={24} color="#000" />

            <TextInput placeholder="Search" placeholderTextColor="#111" style={styles.searchInput} />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={28} color="#fff" />
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
                  <MaterialCommunityIcons name={category.icon} size={85} color="#222"
                  />
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
              <TouchableOpacity
                key={task}
                style={styles.taskCard}
              >
                <Text style={styles.taskTitle}>
                  {task}
                </Text>

                <View style={styles.taskArrow}>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="#777"
                  />
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
    fontSize: 30,
    fontWeight: "600",
    color: "#000",
    letterSpacing: -0.8,
  },

  taskCount: {
    fontSize: 12,
    color: "#111",
    marginTop: 2,
  },

  profileContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },

  profileEmoji: {
    fontSize: 29,
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
    fontSize: 16,
    color: "#111",
    paddingVertical: 0,
  },

  filterButton: {
    width: 50,
    height: 50,
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
    fontSize: 21,
    fontWeight: "600",
    color: "#000",
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
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  categoryTasks: {
    fontSize: 12,
    color: "#222",
    marginTop: 2,
  },

  categoryImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  /* Tasks */
  tasksContainer: {
    gap: 12,
  },

  taskCard: {
    height: 128,
    backgroundColor: "#FBF9F7",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#E8D1BA",
    paddingHorizontal: 16,
    justifyContent: "center",
  },

  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  taskArrow: {
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -10,
  },
});