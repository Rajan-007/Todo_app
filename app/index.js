import React,{useState} from 'react'
import { Text,View ,ScrollView,TextInput,StatusBar,KeyboardAvoidingView } from 'react-native'
import Task from './components/Task';
import { TouchableOpacity } from 'react-native-gesture-handler';

function index() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    setTaskItems([...taskItems,task])
    setTask( null );
  }

 
  return (
    <View className='flex flex-1 flex-column h-screen w-screen bg-[#1D1537]'>
      <Text className='flex flex-row justify-Start text-3xl font-bold mx-3 mt-20 text-white '>Today Tasks</Text>
      <ScrollView >
        {
        taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  >
                  <Task text={item} /> 
                </TouchableOpacity>
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
