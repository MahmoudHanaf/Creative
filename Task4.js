


// import * as React from 'react';
// import {
//   Text, StyleSheet, View, Image, ScrollView,
//   ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import axios from 'axios'


// export default class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       posts: [],
//       pageLoading: true,
//     }
//   }

//   componentDidMount() {
//     axios.get('http://192.168.1.5/api/test.php').then(response => {
//       this.setState({
//         posts: response.data,
//         pageLoading: false,
//       })

//     })
//   }

//   page2 = postItem =>{
//        this.props.navigation.navigate('page2',{
//          postItem : postItem ,
//        })
         
       
//   }

  
//   render() {
//     return (
// <>
//       <View>
//         {this.state.pageLoading == true ?

//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5,marginTop:'50%' }}>
//             <ActivityIndicator color='#00f' size={45} />
//           </View> :

//           <View>
//             {
//               this.state.posts.map((postItem,index) => (
//             <>
//               <TouchableOpacity
//               onPress={()=>{
//                   this.page2(postItem)
//               }}
//               >
//                 <View style={{
//                   width: 300, height: 45, alignSelf: 'center', marginTop: 40, borderWidth: 1, borderRadius: 50,
//                   borderColor: '#000', backgroundColor: '#ddd', paddingRight: 15
//                 }}>
//                   <Text style={{ marginTop: 9 }} >{postItem.user_name}</Text>
//                 </View>
//                 </TouchableOpacity>
//              </>        
//           ))
//            }
// </View>
//         }


//       </View>
// </>
//     );
//   }
// }
  
  ///////////////////////////////////////////////////////////////
       // project  2

import * as React from 'react';
import {
  Text, StyleSheet, View, Image, ScrollView,StatusBar,
  ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator
} from 'react-native';



import Timer from 'react-compound-timer'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
         number1: Math.floor(Math.random() * 10),
      number2: Math.floor(Math.random() * 10),
      number3: Math.floor(Math.random() * 10),
       photo : require("../img/mp2.png"),
      
       editIndex:'',
       solution:'',
       counter :0,
       text:'',
       result :0,
       name:'',
       tirmnate : true ,
    }
  }

componentDidMount(){
   let name= this.props.navigation.getParam('name')
       this.setState({name :name}) 
 }

renderText(){
    this.state.number1 + this.state.number2 * this.state.number3 == this.state.solution ?
     this.setState({text :'الاجابة : صح',result :1,counter :1})  : ( 
       this.setState({text :'الاجابة : خطأ',result:0,counter :0})
       
     )
}
counterPage (counter=this.state.counter, name= this.state.name) {
  this.props.navigation.navigate('page2',{
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
                {this.state.number1} + {this.state.number2} x {this.state.number3}</Text>
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
/////////////////////////////////////////////////////////////////////////////
     // project   3


// import * as React from 'react';
// import {
//   Text, StyleSheet, View, Image, ScrollView,
//   ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal, ActivityIndicator
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import axios from 'axios'


// export default class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//     note_item :{},
//   }
// }

// componentDidMount(){
//   let note_item = this.props.navigation.getParam('note_item')
//   this.setState({note_item:
//     note_item,
//   })
// }

// render() {
//     return (
// <>
//             <Text style={{ marginTop: 30,fontSize:20,fontWeight :'bold',alignSelf:'center' }} >ID :  {this.state.note_item.id}</Text>
//             <View style={{
//                   width: 300, height: 45, alignSelf: 'center', marginTop: 40, borderWidth: 1, borderRadius: 50,
//                   borderColor: '#000', backgroundColor: '#ddd', paddingRight: 15,
//                 }}>
//                   <Text style={{ marginTop: 9 }} >{this.state.note_item.note_text}</Text>
//                 </View>

              
//                 <TouchableOpacity 
//                 onPress={()=>{
//                   this.props.navigation.goBack()
//                 }}

//                 >
//                 <View style={{width:180,height:50,alignSelf :'center' ,justifyContent:'center',borderRadius:15,backgroundColor:'#0ff',
//                 alignItem:'center',marginTop:100}}>
//                 <Text style={{fontSize:18,marginTop:5, alignSelf:'center'}}>Go Back </Text>
//                 </View>

//                 </TouchableOpacity>

// </>
//     );
//   }
// }


