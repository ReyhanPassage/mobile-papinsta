// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// const data = [
//     {username: 'aing',url_foto: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fgrass-flowers-during-sunset-shadow-260nw-1267603696.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnew%2Bpic&tbnid=SWjjRIUukQ2_DM&vet=12ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ..i&docid=Q9FVIInmXcXD0M&w=390&h=280&q=pic&safe=strict&ved=2ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ',caption : 'caption',likes : 15},
//     {username: 'aku',url_foto: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fgrass-flowers-during-sunset-shadow-260nw-1267603696.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnew%2Bpic&tbnid=SWjjRIUukQ2_DM&vet=12ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ..i&docid=Q9FVIInmXcXD0M&w=390&h=280&q=pic&safe=strict&ved=2ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ',caption : 'caption',likes : 15},
//     {username: 'maneh',url_foto: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fgrass-flowers-during-sunset-shadow-260nw-1267603696.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnew%2Bpic&tbnid=SWjjRIUukQ2_DM&vet=12ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ..i&docid=Q9FVIInmXcXD0M&w=390&h=280&q=pic&safe=strict&ved=2ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ',caption : 'caption',likes : 15},
//     {username: 'dodol',url_foto: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fgrass-flowers-during-sunset-shadow-260nw-1267603696.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnew%2Bpic&tbnid=SWjjRIUukQ2_DM&vet=12ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ..i&docid=Q9FVIInmXcXD0M&w=390&h=280&q=pic&safe=strict&ved=2ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ',caption : 'caption',likes : 15},
//     {username: 'bloon',url_foto: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fgrass-flowers-during-sunset-shadow-260nw-1267603696.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnew%2Bpic&tbnid=SWjjRIUukQ2_DM&vet=12ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ..i&docid=Q9FVIInmXcXD0M&w=390&h=280&q=pic&safe=strict&ved=2ahUKEwi-uJS6yvXlAhVSSn0KHavtCI4QMygDegUIARD8AQ',caption : 'caption',likes : 15}
// ]
// export default class home extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> textInComponent </Text>
//             </View>
//         )
//     }
// }

import React, { Component } from 'react';
import { View,ScrollView } from 'react-native';
import {Image,Avatar, Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const data =[
    {username : 'fikri' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
    {username : 'andi' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
    {username : 'budi' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
    {username : 'seto' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
    {username : 'susilo' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
]


export default class home extends Component {
  render() {
    return (
      <ScrollView style={{paddingTop:30}}>
        <View>
            <View style={{flexDirection:'row',paddingHorizontal:15, justifyContent:'space-between' }}>
              <View style={{flexDirection:'row'}}>
                <Avatar
                    rounded
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                    />
                <Text style={{marginLeft:15,fontWeight:'bold',fontSize:18}}>Username</Text>

              </View>
              <View style={{alignSelf:'center'}}>
                <Icon 
                  name='ellipsis-v'
                  size ={20}
                />
              </View>
            </View>


            <View style={{borderTopWidth:0.3, borderTopColor:'grey',marginTop:10}}>
                <Image 
                    source={{uri : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                    style={{ width: 400,height:400}}
                />
            </View>
            <View style={{flexDirection:'row',paddingLeft:15,marginTop:15,justifyContent:'space-between'}}>
              <View style={{flexDirection:'row'}}>
                <Icon 
                  style={{marginRight:20}}
                  // style={{borderWidth:0.5,borderColor:'black'}}
                  name='heart-o'
                  size={30}
                />
                <Icon 
                  // style={{borderWidth:0.5,borderColor:'black'}}
                  name='comment-o'
                  size={30}
                />
              </View>
              <View>
              <Icon 
                  style={{marginRight:20}}
                  // style={{borderWidth:0.5,borderColor:'black'}}
                  name='tag'
                  size={30}
                />
              </View>
            </View>

            
            <View style={{flexDirection:'row',marginTop:15,paddingHorizontal:15}}>
              <Text style={{fontWeight:'bold'}}>Username <Text style={{fontWeight:"normal"}}>Ini Adalah Caption</Text></Text>
            </View>
            <View></View>
        </View>
      </ScrollView>
    );
  }
}