import React from 'react'
import { View ,Text,TouchableOpacity} from 'react-native'


const Task = (props) => {
  return (
   <View>
    <TouchableOpacity className='bg-[#f4f4f2] mt-10 mx-8 py-3 rounded-lg flex flex-row justify-around items-center '>
        <View className='h-5 w-5 bg-black rounded-md'></View>
        <Text className=' '>{props.text}</Text>
        <View className='h-5 w-5 border-4 border-black rounded-md'></View>
    </TouchableOpacity>
   </View>
  )
}

export default Task;
