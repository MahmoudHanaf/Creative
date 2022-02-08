

import * as React from 'react';
import {
  Text, StyleSheet, View, Image, ScrollView,StatusBar,
  ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator,Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import { Container, Header, Button, Fab } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        color :'#000',
        active: false,
        Data_info:[],
        Data :[],
    
      }

    }
  

    componentDidMount(){
      let New_Data = this.props.navigation.getParam("items");
      let Data = this.props.navigation.getParam("Data");
      this.setState({Data_info:New_Data, Data : Data});
    }
   
  


  render() {
    return (

        <>

        <StatusBar
        
        barStyle={"dark-content"}
        backgroundColor="#fff"
        
        />
         
           <View style={{flex:1,backgroundColor:"#fff"}}>

           <View style={{
          width: '100%', height: '10%', backgroundColor: '#ff',
        }}>

          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 0 }}>
            <TouchableOpacity>
              <Icon name='ellipsis-v' size={23} style={{ marginTop: 19 }} />
            </TouchableOpacity>

            <View style={{ width: '80%', backgroundColor: '#00a79d' }}>
              <Text style={{
                fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginRight: '22%',
                marginLeft: '24%', marginTop: 20,
              }}>الصفحة الشخصية</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack()
              }}
            >
              <Icon name='arrow-left' size={23} style={{ marginTop: 19 }} />
            </TouchableOpacity>

          </View>
        </View>


    <ScrollView>
       
    <View style={{flexDirection :'row',alignSelf:'center',borderRadius:10,borderColor:'#000',
    borderWidth:1,marginTop:20,width:'92%',backgroundColor:'#FAF7FE' ,height:'16%'}}>
           <TouchableOpacity
           onPress={()=>{
              Linking.openURL("https://www.facebook.com/")
           }}>
             <Icon name='facebook' size={40} style={{marginLeft:15,marginTop:115,marginRight:20,
              color:'#00f',borderRadius:15}} />
            </TouchableOpacity>

            <View style={{borderWidth:3,borderColor:"#ffa500",borderRadius:60,width:120,
            height:120,marginTop:15,alignSelf:"center",marginLeft:45}}>
            <Image

             source ={this.state.Data_info.image}
          style={{width:100,height:100,alignSelf:"center",marginTop:7,borderRadius:50,}}/>
            
            </View>

              
              <TouchableOpacity
              onPress={()=>{
                Linking.openURL("https://www.whatsapp.com/")
             }}>
              <Icon name='whatsapp-square' size={40} style={{marginLeft:45,marginTop:115,color:'#0f0',borderRadius:10}} />
              </TouchableOpacity>
           </View>



            <View style={{width:'92%',height:50,backgroundColor:'#FAF7FE',borderWidth:1,
            borderColor:'#000',alignSelf:'center',marginTop:10,flexDirection:'row',paddingLeft:15,
            borderRadius:15}}>

           <Icon name='user-alt' size={20} style={{alignSelf:'center'}} />

            <Text style={{fontSize:18,fontWeight:"bold",color:"#000",marginLeft:20,alignSelf:'center'}}>
              {this.state.Data_info.name}</Text>
            </View>  

       <TouchableOpacity
            onPress={()=>{
              Linking.openURL("tel:"+this.state.Data_info.phone)
           }}
       >
            <View style={{width:'92%',height:50,backgroundColor:'#FAF7FE',borderWidth:1,
            borderColor:'#000',alignSelf:'center',marginTop:10,flexDirection:'row',paddingLeft:15,
            borderRadius:15}}>

           <Icon name='mobile-alt' size={20} style={{alignSelf:'center'}} />

            <Text style={{fontSize:18,fontWeight:"bold",color:"#000",marginLeft:20,alignSelf:'center'}}>
              {this.state.Data_info.phone}</Text>
            </View> 
        </TouchableOpacity>

            <View style={{width:'92%',height:90,backgroundColor:'#FAF7FE',borderWidth:1,
            borderColor:'#000',alignSelf:'center',marginTop:10,paddingLeft:15,
            borderRadius:15}}>


            <Text style={{fontSize:20,fontWeight:"bold",marginTop:10,color:"#000",marginRight:15,
            textAlign:"center"}}>مواعيد العمل</Text> 

            
             <View style={{flexDirection:"row",justifyContent:"center",marginRight:10,marginBottom:10}}>

             <Text style={{fontSize:15,fontWeight:"bold",marginTop:10,color:"#389ae1",marginLeft:10,
             textAlign:"center"}}>     9:00   am  </Text>
             <Icon name='arrow-left' size={21} style={{ marginTop:10,color:'#389ae1' }} />
                <Text style={{fontSize:15,fontWeight:"bold",marginTop:10,color:"#389ae1",
                marginLeft:10,textAlign:"center"}}> pm   9:00   </Text>
             </View>
    </View>
            
              
              {
                this.state.Data.map((data,index)=>(
                  
              <View style={{width:325,
                height:190,
                 borderColor:'#000',
                    borderWidth:1,
                    marginTop:20,
                    alignSelf:'center',
                   
                    borderRadius:10,}}>
                 <Image source={data.jop_photo}
                   style={{
                     width:322,
                     height:150,
                     alignSelf:'center',
                       borderTopLeftRadius:3,
                       borderTopRightRadius:3,
                    resizeMode:'stretch',
                    
                  }}/>
                   <View style={{flexDirection:'row'}}>
                     <Text style={{fontSize:18,fontWeight:"bold",marginTop:10,color:"#389ae1",marginLeft:16,
                       }}>السعر  : {data.price}</Text>
                       
                       <TouchableOpacity
                          onPress={()=>{
                            this.state.color =='#000'? this.setState({color :data.color ='#389ae1'})  : 
                            this.setState({color :data.color='#000'}) 
                          }}
                       >
                         <Icon name='heart' size={21} style={{ marginTop:10,color:data.color,
                        marginLeft:150 }} />
                        </TouchableOpacity>
                    </View>


                    
                 </View>
      
  
                  
                ))
              }
    


              </ScrollView>  
           </View>
         

        </>

    );
    }}