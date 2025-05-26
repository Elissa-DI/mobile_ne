import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CustomHeader from '@/components/common/customHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import CustomButton from '@/components/common/customButton';

const CreatePostPage = () => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreatePost = async () => {
    if (!content.trim()) {
      Alert.alert('Please write something before posting.');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 1,
        title: 'New Post',
        body: content,
      });

      if (response.status === 201) {
        Alert.alert('Your post was created successfully!');
        setContent('');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      Alert.alert('Something went wrong while posting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CustomHeader title="Create Post" />
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        >
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            What is on your mind?
          </Text>

          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder="Start typing your thoughts..."
            multiline
            numberOfLines={8}
            className="border rounded-xl p-4"
            style={{ textAlignVertical: 'top' }}
          />

          <View className="mt-6">
            <CustomButton
              isSubmitting={isSubmitting}
              handleFunction={handleCreatePost}
              bgColor="#0ea5e9"
              textColor="#fff"
              borderRadius={20}
              fontSize={16}
              fontWeight="600"
              px={16}
              py={14}
            >
              Post
            </CustomButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreatePostPage;
