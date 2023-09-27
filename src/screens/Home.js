import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { getSuggestedPost } from "../services/postService";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getSuggestedPost();
      setPosts(res);
    };
    fetchPosts();
  }, []);
  return (
    <SafeAreaView className="bg-white h-full">
      <Header />
      <ScrollView>
        <View className="p-4 flex-col gap-y-4">
          {posts.length > 0 && posts.map((post) => <Post {...post} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
