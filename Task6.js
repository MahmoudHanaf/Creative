
import * as React from 'react';
import {
  Text, StyleSheet, View, Image, ScrollView,StatusBar,
  ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator
} from 'react-native';



export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        name:'',
        counter:1,
    }
  }
componentDidMount(){
   let counter= this.props.navigation.getParam('counter')
       this.setState({counter :counter})
  let name= this.props.navigation.getParam('name')
       this.setState({name :name}) 
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
 <View style={{flex:1,backgroundColor:'#ffe05d',}}>

 <View style={{width:'100%',height:'30%',backgroundColor:'#ffa700',}}>

      {this.state.counter >2 ?  //ℂ𝕠𝕟𝕘𝕣𝕒𝕥𝕦𝕝𝕒𝕥𝕚𝕠𝕟𝕤
         <Text style={{fontSize:30,alignSelf:'center',marginTop :60,fontWeight:'bold',color:'#16697a'}}>congratulations</Text>
         :
         <Text style={{fontSize:25,alignSelf:'center',marginTop :60,fontWeight:'bold',color:'#16697a'}}>I'm Sorry You Lose</Text>
     }
     </View>
     
     <View style={{backgroundColor:'#cad315',width:'90%',height:'50%',alignSelf:'center',
     marginTop:-55,borderRadius:30,}}>
      
     <Text style={{fontSize:34,alignSelf:'center',margin :10,fontWeight:'bold',color:'#fff'}}>شهادة</Text>

     {this.state.counter ==5 ?  
         <Text style={{fontSize:30,alignSelf:'center',margin :10,fontWeight:'bold',color:'#16697a'}}>ممتاز </Text>
         :
         <View>
         {
         this.state.counter ==4 ? 
         <Text style={{fontSize:25,alignSelf:'center',marginTop :10,fontWeight:'bold',color:'#16697a'}}>جيد جد</Text>
         :
         <View>
         {
         this.state.counter ==3 ?
         <Text style={{fontSize:25,alignSelf:'center',marginTop :10,fontWeight:'bold',color:'#16697a'}}>جيد</Text>
         :
         <Text style={{fontSize:25,alignSelf:'center',marginTop :10,fontWeight:'bold',color:'#16697a'}}>لقد خسرت</Text> 
         }
         </View>
         }
         </View>
     }

     {this.state.name != '' ?
        <Text style={{fontSize:28,alignSelf:'center',marginTop :10,fontWeight:'bold',color:'#fff'}}>يا  {this.state.name}  ! </Text>
        : 
        <Text style={{fontSize:28,alignSelf:'center',marginTop :10,fontWeight:'bold',color:'#16697a'}}></Text>
      }
   


 <View style={{flexDirection :'row',alignSelf:'center',width:'90%',height:'50%',justifyContent:'center',marginTop:10}}>   

<Text style={{fontSize:28,alignSelf:'center',marginTop :0,fontWeight:'bold',color:'#16697a'}}>  الدرجة  :</Text>

<View style={{flexDirection :'column',marginLeft:20}}>
<View  style={{width:60,height:60,backgroundColor:'#fff',marginTop:20,alignSelf :'center',
borderColor:'#16697a',borderWidth:2,borderRadius:7,justifyContent:'center'}}>
<Text style={{fontSize:26,alignSelf:'center',fontWeight:'bold',color:'#16697a'}}>{this.state.counter}</Text>
</View>
<View  style={{width:60,height:60,backgroundColor:'#fff',alignSelf :'center',
borderColor:'#16697a',borderWidth:2,borderRadius:7,justifyContent:'center'}}>
<Text style={{fontSize:26,alignSelf:'center',fontWeight:'bold',color:'#16697a'}}>5</Text>
</View>
</View>

</View>
    
    </View>

<View style={{width:'100%',height:'30%',backgroundColor:'#ffa700',borderTopLeftRadius:20,borderTopRightRadius:20}}>
</View>

</View>

 </>
    );
  }
 }
//////////////////////////////////////////////////////////////////////////////////


// import * as React from 'react';
// import {
//   Text, StyleSheet, View, Image, ScrollView,StatusBar,
//   ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import axios from 'axios'

// export default class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       items:{},
     
//    }
//  }

// componentDidMount(){
//    let items =this.props.navigation.getParam("items")
//    this.setState({items : items})
// }





//  render() {
//    return (
//    <>
    
//     <StatusBar 
//        backgroundColor ='#31FFF3'
//        barStyle='dark-content'
//     />

       
       
         
//             <TouchableOpacity>
//            <View style={{
//              width:"90%",
//              height:50,
//              alignSelf:'center',
//              marginTop:40,
//              backgroundColor:'#31FFF3',
//              borderRadius:20,
//            }}>
//                <Text style ={{fontSize:25 ,alignSelf:'center',marginTop:10,fontWeight:'bold'}}>{this.state.items.name_makers.name}</Text>
//            </View>
//            </TouchableOpacity>


//    </>

//    );
//  }
// }



















