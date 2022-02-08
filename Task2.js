


// /*
// import * as React from 'react';
// import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight,Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';


// export default class Task1 extends React.Component {

// constructor(){
//   super();
//   this.state={
//    text_1:'',
//    modalVisible_1:false,
//     text_2:'',
//    modalVisible_2:false,
//     text_3:'',
//    modalVisible_3:false,
//     text_4:'',
//    modalVisible_4:false,
//     text_5:'',
//    modalVisible_5:false,
//     text_6:'',
//    modalVisible_6:false,
//     text_7:'',
//    modalVisible_7:false,
//     text_8:'',
//    modalVisible_8:false,
//     text_9:'',
//    modalVisible_9:false,
//     text_10:'',
//    modalVisible_10:false,
//     text_11:'',
//    modalVisible_11:false,
//     text_12:'',
//    modalVisible_12:false,
//     text_13:'',
//    modalVisible_13:false,
//     text_14:'',
//    modalVisible_14:false,
//     text_15:'',
//    modalVisible_15:false,
//    text_16:'',
//    modalVisible_16:false,
//    text_17:'',
//    modalVisible_17:false,
//    text_18:'',
//    modalVisible_18:false,
//    text_19:'',
//    modalVisible_19:false,
//    text_20:'',
//    modalVisible_20:false,
//   }
// }


// render() {
//     return (
// <>
// <ScrollView>
// <TextInput 
// value={this.state.text_1} 
// onChangeText={(value)=>{
// this.setState({text_1 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_1}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_1:this.state.text_1 ,modalVisible_1:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_2} 
// onChangeText={(value)=>{
// this.setState({text_2 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_2}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_2:this.state.text_2 ,modalVisible_2:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_3} 
// onChangeText={(value)=>{
// this.setState({text_3 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_3}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_3:this.state.text_3 ,modalVisible_3:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>



// <TextInput 
// value={this.state.text_4} 
// onChangeText={(value)=>{
// this.setState({text_4 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_4}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_4:this.state.text_4 ,modalVisible_4:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_5} 
// onChangeText={(value)=>{
// this.setState({text_5 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_5}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_5:this.state.text_5 ,modalVisible_5:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_6} 
// onChangeText={(value)=>{
// this.setState({text_6 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_6}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_6:this.state.text_6 ,modalVisible_6:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_7} 
// onChangeText={(value)=>{
// this.setState({text_7 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_7}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_7:this.state.text_7 ,modalVisible_7:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_8} 
// onChangeText={(value)=>{
// this.setState({text_8 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_8}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_8:this.state.text_8,modalVisible_8:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_9} 
// onChangeText={(value)=>{
// this.setState({text_9 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_9}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_9:this.state.text_9 ,modalVisible_9:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_10} 
// onChangeText={(value)=>{
// this.setState({text_10 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_10}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_10:this.state.text_10 ,modalVisible_10:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>



// <TextInput 
// value={this.state.text_11} 
// onChangeText={(value)=>{
// this.setState({text_11 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_11}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_11:this.state.text_11 ,modalVisible_11:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_12} 
// onChangeText={(value)=>{
// this.setState({text_12 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_12}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_12:this.state.text_12 ,modalVisible_12:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>



// <TextInput 
// value={this.state.text_13} 
// onChangeText={(value)=>{
// this.setState({text_13 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_13}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_13:this.state.text_13 ,modalVisible_13:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_14} 
// onChangeText={(value)=>{
// this.setState({text_14 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_14}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_14:this.state.text_14 ,modalVisible_14:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_15} 
// onChangeText={(value)=>{
// this.setState({text_15 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_15}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_15:this.state.text_15 ,modalVisible_15:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>

// <TextInput 
// value={this.state.text_16} 
// onChangeText={(value)=>{
// this.setState({text_16 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_16}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_16:this.state.text_16 ,modalVisible_16:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>

// <TextInput 
// value={this.state.text_17} 
// onChangeText={(value)=>{
// this.setState({text_17 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_17}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_17:this.state.text_17 ,modalVisible_17:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_18} 
// onChangeText={(value)=>{
// this.setState({text_18 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_18}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_18:this.state.text_18 ,modalVisible_18:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>

// <TextInput 
// value={this.state.text_19} 
// onChangeText={(value)=>{
// this.setState({text_19 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_19}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_19:this.state.text_19 ,modalVisible_19:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>

// <TextInput 
// value={this.state.text_20} 
// onChangeText={(value)=>{
// this.setState({text_20 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_20}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text_20:this.state.text_20 ,modalVisible_20:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>




// <Modal
// visible ={this.state.modalVisible_1}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_1:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_1}</Text>
// </Modal>



// <Modal
// visible ={this.state.modalVisible_2}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_2:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_2}</Text>
// </Modal>




// <Modal
// visible ={this.state.modalVisible_3}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_3:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_3}</Text>
// </Modal>



// <Modal
// visible ={this.state.modalVisible_4}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_4:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_4}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_5}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_5:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_5}</Text>
// </Modal>

// <Modal
// visible ={this.state.modalVisible_6}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_6:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_6}</Text>
// </Modal>

// <Modal
// visible ={this.state.modalVisible_7}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_7:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_7}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_8}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_8:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_8}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_9}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_9:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_9}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_10}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_10:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_10}</Text>
// </Modal>

// <Modal
// visible ={this.state.modalVisible_11}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_11:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_11}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_12}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_12:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_12}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_13}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_13:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_13}</Text>
// </Modal>



// <Modal
// visible ={this.state.modalVisible_14}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_14:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_14}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_15}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_15:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_15}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_16}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_16:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_16}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_17}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_17:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_17}</Text>
// </Modal>

// <Modal
// visible ={this.state.modalVisible_18}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_18:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_18}</Text>
// </Modal>

// <Modal
// visible ={this.state.modalVisible_19}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_19:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_19}</Text>
// </Modal>


// <Modal
// visible ={this.state.modalVisible_20}
// >
// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible_20:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>{this.state.text_20}</Text>
// </Modal>





// </ScrollView>
// </>

// );
//   }
// }
// const styles = StyleSheet.create({
// });

// */










// import * as React from 'react';
// import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight,Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';


// export default class Task2 extends React.Component {

// constructor(){
//   super();
//   this.state={
//     text:'',
//    text_1:'',
//    modalVisible:false,
//     text_2:'',
//     text_3:'',
//     text_4:'',
//     text_5:'',
//     text_6:'',
//     text_7:'',
//     text_8:'',
//     text_9:'',
//     text_10:'',
//     text_11:'',
//     text_12:'',
//     text_13:'',
//     text_14:'',
//     text_15:'',
//    text_16:'', 
//    text_17:'',
//    text_18:'',
//    text_19:'',
//    text_20:'',



//   }
// }

// /*
// change(index){
//   let data=this.state.modalText
//   data[index].text =this.state.text
//   this.setState({modalText :data})
// }
// */
// render() {
//     return (
// <>
// <ScrollView>
// <TextInput 
// value={this.state.text_1} 
// onChangeText={(value)=>{
// this.setState({text_1 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_1}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_1 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_2} 
// onChangeText={(value)=>{
// this.setState({text_2 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_2}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_2 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_3} 
// onChangeText={(value)=>{
// this.setState({text_3 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_3}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_3 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>



// <TextInput 
// value={this.state.text_4} 
// onChangeText={(value)=>{
// this.setState({text_4 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_4}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_4 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_5} 
// onChangeText={(value)=>{
// this.setState({text_5 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_5}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_5 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_6} 
// onChangeText={(value)=>{
// this.setState({text_6 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_6}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_6 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_7} 
// onChangeText={(value)=>{
// this.setState({text_7 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_7}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_7 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_8} 
// onChangeText={(value)=>{
// this.setState({text_8 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_8}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_8,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_9} 
// onChangeText={(value)=>{
// this.setState({text_9 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_9}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_9 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_10} 
// onChangeText={(value)=>{
// this.setState({text_10 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_10}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_10 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>



// <TextInput 
// value={this.state.text_11} 
// onChangeText={(value)=>{
// this.setState({text_11 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_11}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_11 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_12} 
// onChangeText={(value)=>{
// this.setState({text_12 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_12}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_12 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>



// <TextInput 
// value={this.state.text_13} 
// onChangeText={(value)=>{
// this.setState({text_13 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_13}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_13 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_14} 
// onChangeText={(value)=>{
// this.setState({text_14 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_14}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_14 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_15} 
// onChangeText={(value)=>{
// this.setState({text_15 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_15}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_15 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>

// <TextInput 
// value={this.state.text_16} 
// onChangeText={(value)=>{
// this.setState({text_16 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_16}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_16 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>

// <TextInput 
// value={this.state.text_17} 
// onChangeText={(value)=>{
// this.setState({text_17 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_17}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_17 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>


// <TextInput 
// value={this.state.text_18} 
// onChangeText={(value)=>{
// this.setState({text_18 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_18}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_18 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>

// <TextInput 
// value={this.state.text_19} 
// onChangeText={(value)=>{
// this.setState({text_19 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_19}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_19 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>

// <TextInput 
// value={this.state.text_20} 
// onChangeText={(value)=>{
// this.setState({text_20 :value})
// }}
// style={{width:270,height:45,backgroundColor:'#ddd',alignSelf:'center',marginTop:15,padding:10,fontSize:17,borderRadius:15,borderWidth:2,borderColor:'#000'}}/>

// <Text style={{fontSize:17,marginLeft:33,marginTop:10}}>{this.state.text_20}</Text>

// <TouchableOpacity
// onPress={()=>{
//   this.setState({text:this.state.text_20 ,modalVisible:true})
// }}
// >
// <View style={{width:70,height:40,backgroundColor:'#ddd',marginTop:7,padding:5,borderRadius:10,borderWidth:2,borderColor:'#000',alignSelf:'center'}}>
// </View>
// </TouchableOpacity>






  

// <Modal
// visible ={this.state.modalVisible}
// >

// <TouchableOpacity
// onPress={()=>{
//   this.setState({modalVisible:false})
// }}
// >
// <Icon name="angle-left" size={25}style={{marginLeft:7,marginTop:10,color:'#F0A500'}}/>
// </TouchableOpacity>
// <Text style={{fontSize:17,marginLeft:33,marginTop:20,alignSelf:'center'}}>
// {this.state.text}</Text>

// </Modal>


// </ScrollView>
// </>

// );
//   }
// }
// const styles = StyleSheet.create({
// });

/////////////////////////////////////////////////////////////////////
    // project  2
import * as React from 'react';
import {
  Text, StyleSheet, View, Image, ScrollView,StatusBar,
  ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator
} from 'react-native';


import Timer from 'react-compound-timer'
export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
         number1: Math.floor(Math.random() * 10),
      number2: Math.floor(Math.random() * 10),
      number3: Math.floor(Math.random() * 10),
      number4: Math.floor(Math.random() * 10),
       photo : require("../img/mp2.png"),
      
       editIndex:'',
       solution:'',
       result :0,
       text:'',
        counter: 1,
     name:'',
     tirmnate : true ,
    }
  }

 componentDidMount(){
   let counter= this.props.navigation.getParam('counter')
       this.setState({counter :counter})
  let name= this.props.navigation.getParam('name')
       this.setState({name :name}) 
 }

renderText(){
    this.state.number1 + this.state.number2 * this.state.number3 - this.state.number4 == this.state.solution ?
     this.setState({text :'الاجابة : صح',result :1,counter :(this.state.counter +1)})  :   
     ( this.setState({text :'الاجابة : خطأ',result:0,
     counter :this.state.counter}) 
    
     )
     
}

counterPage (counter=this.state.counter,name=this.state.name ) {
  this.props.navigation.navigate('page5',{
       counter :counter,
       name :name,
  })

}


 render() {
    return (
 <>

<StatusBar 
 backgroundColor ='#16697a'
 barStyle='light-content'
 //transucent ={true}
 //transparent
 />
  <View  style={{flex:1,backgroundColor:'#ffa700',}}>
<ScrollView>

<View style={{alignSelf:'center', marginTop:20,width:'27%',height:'7%',backgroundColor:'#fff',
borderColor:'#16697a',
borderWidth:2,}}>
  {
    this.state.tirmnate == true ? 

    <Timer
    initialTime={16 * 1000}
    direction="backward"
    timeToUpdate={10}
    checkpoints={[
        {

            time:  0,
          
            callback: () =>{ 
            this.renderText()
            this.counterPage()
            }
        },
    ]}
>
    <Text style={{ fontFamily: 'Helvetica Neue',alignSelf:'center',marginTop:3 }}>
        <Text style={{ fontSize: 26 ,alignSelf:'center',marginTop:20,marginRight:20}}>
            <Timer.Seconds />
        </Text>
        
    </Text>
</Timer>


:

<Text style={{ fontSize: 26 ,alignSelf:'center',marginTop:5,marginRight:0}}>0</Text>

  }

</View>

 <View style={{width:'85%',height:270,backgroundColor:'#ffa700', marginTop:18, alignSelf:'center',}}>
    <Image source={this.state.photo} 
    style={{
      width:'100%',
      height:'100%',
      borderRadius:30,
     
      resizeMode:'stretch',
    }}
    />
    </View>

    <View  style={{width:'85%',height:'55%',backgroundColor:'#ffa700',alignSelf:'center'}}>

              <View style={{
                width: '95%', height: 50, backgroundColor: '#16697a', justifyContent: 'center', alignSelf: 'center',marginTop:35,
                borderRadius:20,
              }}>
              
                <Text style={{ fontSize: 22,alignSelf:'center',marginTop:3,fontWeight:'bold', }}>
                {this.state.number1} + {this.state.number2} x {this.state.number3} - {this.state.number4}</Text>
                 </View>
           
               <TextInput 
                value={this.state.solution}
                onChangeText={(value)=>{
                  this.setState({solution:value})
                }}

               style={{
                width: '95%' , height: 50, backgroundColor: '#fff', justifyContent: 'center', alignSelf: 'center',marginTop:35,
                fontSize:22,textAlign:'center',borderRadius:20,borderColor:'#16697a',borderWidth:1
               }} placeholder="   الحل " keyboardType ="number-pad"/>




       <View style={{flexDirection:'row',alignSelf:'center',marginTop:17,justifyContent:'space-between'}}>
              <TouchableOpacity
              onPress={()=>{

                this.counterPage()
                this.setState({tirmnate :false})
               
              }}
              >
               <View style={{width:100,height:48,backgroundColor:'#0f0',marginTop:20,alignSelf :'center',
              borderColor:'#16697a',borderWidth:2,borderRadius:10}}>
               <Text style={{ fontSize: 20,alignSelf:'center',marginTop:7, }}>التالى</Text>
               </View>
              </TouchableOpacity>

                <TouchableOpacity
              onPress={()=>{
                this.renderText()
              
              }}
              >
               <View style={{width:100,height:48,backgroundColor:'#0f0',marginTop:20,alignSelf :'center',
               borderRadius:10,borderColor:'#16697a',borderWidth:2,marginLeft:100,}}>
               <Text style={{ fontSize: 20,alignSelf:'center',marginTop:7, }}>ارسال</Text>
               </View>
              </TouchableOpacity>
        </View>
             
               <Text style={{ fontSize: 30,alignSelf:'center',marginTop:15,color:'#0278ae',
               fontWeight:'bold'}}>{this.state.text}</Text>
             
               </View>
  </ScrollView>
      </View>
    </>
    );
  }
 }









