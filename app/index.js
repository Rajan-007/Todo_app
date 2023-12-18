import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, StatusBar, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';


const TASK_STORAGE_KEY = 'tasks'; // Define a key for storing tasks

function index() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  // Load data from AsyncStorage on app launch
  useEffect(() => {
    const getStoredTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(TASK_STORAGE_KEY);
        if (storedTasks) {
          setTaskItems(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getStoredTasks();
  }, []);

  const handleAddTask = async () => {
    if (task.trim()) {
      setTaskItems([...taskItems, task]);
      setTask('');

      // Update data in AsyncStorage
      try {
        await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(taskItems));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const completeTask = async (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

    // Update data in AsyncStorage
    try {
      await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(itemsCopy));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className='flex flex-1 flex-column h-screen w-screen bg-[#1D1537]'>
      <Text className='flex flex-row justify-Start text-3xl font-bold mx-3 mt-20 text-white '>Today Tasks</Text>
      <ScrollView>
        {taskItems.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              className='bg-[#f4f4f2] mt-10 mx-8 py-3 rounded-lg flex flex-row justify-around items-center '>
              <Text className=' '>{item}</Text>
              <FontAwesome name='trash' size={32} onPress={() => completeTask(index)} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView className='mb-10 flex flex-row justify-around mx-5 '>
        <TextInput
          className=' bg-white w-[80%] px-2 py-3 rounded-xl'
          placeholder={'Write your task here..?'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity
          className='bg-white flex-1 flex flex-row justify-center items-center px-4 rounded-full'
          onPress={handleAddTask}>
          <Text className='text-3xl'>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default index;
