import React,{useState} from 'react'
import { Text,View ,ScrollView,TextInput,StatusBar,KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';


function index() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    setTaskItems([...taskItems,task])
    setTask( null );
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
    <View className='flex flex-1 flex-column h-screen w-screen bg-[#1D1537]'>
      <Text className='flex flex-row justify-Start text-3xl font-bold mx-3 mt-20 text-white '>Today Tasks</Text>
      <ScrollView >
        {
        taskItems.map((item, index) => {
              return (
                <View key={index}  >
                 <View>
                    <TouchableOpacity className='bg-[#f4f4f2] mt-10 mx-8 py-3 rounded-lg flex flex-row justify-around items-center '>
                        <View className='h-5 w-5 bg-black rounded-md'></View>
                          <Text className=' '>{item}</Text>
                            <FontAwesome name='trash' size={24} onPress={() => completeTask(index)}>
                              
                            </FontAwesome>
                      </TouchableOpacity>
                </View>
                </View>
              )
            })
        }
      </ScrollView>
      <KeyboardAvoidingView className='mb-10  flex flex-row justify-around mx-5 '>
        <TextInput className=' bg-white w-[80%] px-2 py-3 rounded-xl' placeholder={'Write your task here..?'} value={task} onChangeText={ text => setTask(text)} />
        <TouchableOpacity className='bg-white flex-1 flex flex-row justify-center items-center px-4 rounded-full' onPress={() => handleAddTask()}>
          <Text className='text-3xl  '>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
      )
}

export default index;
