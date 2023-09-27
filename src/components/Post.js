import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { formatDatePost } from "../utils/formatDate";
import { useEffect, useState } from "react";
import { getOneUser } from "../services/userService";

const Post = ({ desc, likes, comments, shares, image, userId, createdAt }) => {
  const [adminPost, setAdminPost] = useState({});
  // Format date
  const time = formatDatePost(createdAt);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getOneUser(userId);
        setAdminPost(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <View className="bg-white p-4 rounded-2xl shadow mb-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row justify-between items-center gap-3">
          <Image
            className="rounded-full w-[40] h-[40]"
            source={{
              uri: adminPost?.avatar,
            }}
          />
          <View className="flex-col justify-between">
            <View className="flex-row items-center gap-1">
              <Text className="text-lg font-bold">{adminPost?.username}</Text>
              <Ionicons name="checkmark-circle" size={20} color="#1877f2" />
            </View>
            <Text className="text-xs text-[#9dacc2] font-bold">{time} ago</Text>
          </View>
        </View>
        <Entypo name="dots-three-vertical" size={18} color="#666" />
      </View>
      <Text className="py-3 text-left">{desc}</Text>
      {image && (
        <Image
          className="rounded-xl w-full h-[300] object-cover"
          source={{
            uri: image,
          }}
        />
      )}

      <View className="pt-3 flex-row justify-between items-center">
        <View className="flex-row items-center gap-2">
          <View className="flex-row items-center gap-1">
            <Ionicons name="heart-outline" size={24} color="black" />
            <Text className="">{likes?.length}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Ionicons name="chatbox-outline" size={24} color="black" />
            <Text className="">{comments?.length}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Ionicons name="ios-arrow-redo-outline" size={24} color="black" />
            <Text className="">{shares?.length}</Text>
          </View>
        </View>
        <View>
          <Ionicons name="ios-bookmark-outline" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Post;
