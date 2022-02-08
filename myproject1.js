import * as React from 'react';
import {
  Text, StyleSheet, View, Image, ScrollView, StatusBar,
  ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
       worker:'',
      reponse: [],
      names: '',
    }
  }

  componentDidMount() {
    let New_items = this.props.navigation.getParam("Data");
    let names = this.props.navigation.getParam("names");
    this.setState({ reponse: New_items, names: names });
  }
 
  search =(worker)=>{
    let list=this.state.reponse
    let data =[]
    for (let i=0;i<list.length;i++){
        if(
          list[i].name.toLowerCase().includes(this.state.worker.toLowerCase())
        ){
          data.push(list[i])
        }
    }
    this.setState({reponse :data})

  }




  render() {
    return (
      <>

        <StatusBar
          backgroundColor='#00a79d'
          barStyle='dark-content'
        />


        <View style={{
          width: '100%', height: '11%', backgroundColor: '#00a79d',
        }}>

          <View style={{ flexDirection: 'row', marginTop: 0 }}>

          

          <View style={{ width: '75%', backgroundColor: '#fff',marginTop:10,height:45,paddingRight:10,
          marginLeft:10,flexDirection:'row',borderRadius:10 }}>
            <View style={{width:220,height:45,backgroundColor:'#fff',borderRadius:10}}>
               <TextInput
               value={this.state.worker}
                  onChangeText={(value)=>{
                    this.setState({ worker :value})
                  }}

                  onChange={()=>{
                    this.search(this.state.worker)
                  }}
                 style={{fontSize:22,paddingLeft:15,}}
                 placeholder={this.state.names}
               />
               </View>
              <Icon name='search' size={21} style={{ marginTop:13,marginLeft:10 }} />
          
            </View>



            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack()
              }}
            >
              <Icon name='arrow-left' size={25} style={{ marginTop: 19,marginLeft:30 }} />
            </TouchableOpacity>

          </View>
        </View>


    <ScrollView>
        <View>
          {
            this.state.reponse.map((All_items, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.navigate('page2',
                    {
                      items: All_items,
                      Data : All_items.work_photo,
                    }
                  );
                }}
              >
              
                <View

                  style={{
                    width: "94%",
                    height: 90,
                    alignSelf: 'center',
                    marginTop: 35,
                    backgroundColor: '#D0DADA',
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: '#0D0F0F',
                    flexDirection: 'row',
                    paddingLeft: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.51,
                    shadowRadius: 13.16,
                    elevation: 25,

                  }}>
               <View style={{width:265,height:80,backgroundColor:'#D0DADA',borderRadius:10,
               flexDirection:'row'}}>
                  <Image source={All_items.image}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 40,
                      marginTop: 4,
                    }}
                  />
                  <Text style={{ fontSize: 25, alignSelf: 'center', marginTop: 0, fontWeight: 'bold', marginLeft: 20 }}>
                    {All_items.name}</Text>
                   </View>
               
                  <Image source={All_items.decoration}
                    style={{
                      width: 55,
                      height: 55,
                      borderRadius: 40,
                      marginLeft: 0,
                      marginTop: 4,
                      resizeMode: 'stretch',
                       alignSelf:'center'
                    }}
                  />
                    </View>
               
              </TouchableOpacity>

            ))}

        </View>
        </ScrollView>

      </>

    );
  }
}