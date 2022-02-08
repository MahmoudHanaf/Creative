/*



*/


/*
import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage'


export default class Task3 extends React.Component {

  constructor() {
    super();
    this.state = {
      number1: Math.floor(Math.random() * 10),
      number2: Math.floor(Math.random() * 10),
      number3: Math.floor(Math.random() * 10),
       photo : require("../img/mp2.png"),
       modalVisible:false,
       editIndex:'',
       solution:'',
       result :'',
       text:'',

      Operation: [
        {
          number1: 0,
          number2: 0,
          number3: 0,
        },
        
      ]
    }

  }

 

AddOperation(index){
 let data= this.state.Operation
  let obj={
   number1:  Math.floor(Math.random() * 10) ,
   number2:  Math.floor(Math.random() * 10),
   number3:  Math.floor(Math.random() * 10),
  }

  data.push(obj)

this.setState({Operation :data})
}



  render() {
    return ( 
  
<>

<View  style={{flex:1,backgroundColor:'#ffa700',}}>
<ScrollView>
<Image source={require("../img/mp3.jpg")} 
    style={{
      width:320,
      height:340,
      borderRadius:50,
      marginTop:40,
      marginLeft:20,
    }}
    />

<TextInput 
               style={{
                width: 300, height: 50, backgroundColor: '#fff', justifyContent: 'center', alignSelf: 'center',marginTop:20,
                fontSize:22,textAlign:'center'
               }} placeholder="   اكتب اسمك " />





<TouchableOpacity
              onPress={()=>{
                this.setState({modalVisible:true})
              }}
              >
               <View style={{width:200,height:45,backgroundColor:'#0f0',marginTop:40,alignSelf :'center'}}>
               <Text style={{ fontSize: 25,alignSelf:'center',marginTop:5, }}>ابدأ</Text>
               </View>
              </TouchableOpacity>



</ScrollView>
</View>






<Modal 
visible ={this.state.modalVisible}
onRequestClose ={()=>{
  this.setState({modalVisible:false})
}}
>

 <View  style={{flex:1,backgroundColor:'#ffa700',flexDirection:'row'}}>
<ScrollView>

    <Image source={this.state.photo} 
    style={{
      width:305,
      height:320,
      borderRadius:50,
      alignSelf:'center',
      marginTop:20,
    }}
    />
          





        {
          this.state.Operation.map((operation, index) => (
            
         <>
         
              <View style={{
                width: 300, height: 50, backgroundColor: '#f00', justifyContent: 'center', alignSelf: 'center',marginTop:60,
              }}>
              
                <Text style={{ fontSize: 22,alignSelf:'center',marginTop:3, }}>
                {operation.number1} + {operation.number2} * {operation.number3}</Text>
                 </View>
           
               <TextInput 
                value={this.state.solution}
                onChangeText={(value)=>{
                  this.setState({solution:value})
                }}

               style={{
                width: 300, height: 50, backgroundColor: '#fff', justifyContent: 'center', alignSelf: 'center',marginTop:20,
                fontSize:22,textAlign:'center'
               }} placeholder="   الحل " keyboardType ="number-pad"/>





             <TouchableOpacity
              onPress={()=>{
               operation.number1 + operation.number2 * operation.number3 == this.state.solution ? 
               this.setState({result :true}) : this.setState({result :false})

               {this.state.result == true ?  this.state.text=" Well Done " :this.state.text= " Wrong"}

              }}
              >
               <View style={{width:100,height:45,backgroundColor:'#0f0',marginTop:20,alignSelf :'center'}}>
               <Text style={{ fontSize: 20,alignSelf:'center',marginTop:5, }}>ارسال</Text>
               </View>
              </TouchableOpacity>




              <TouchableOpacity
              onPress={()=>{
                this.AddOperation(index)
              }}
              >
               <View style={{width:100,height:45,backgroundColor:'#0f0',marginTop:20,alignSelf :'center'}}>
               <Text style={{ fontSize: 20,alignSelf:'center',marginTop:5, }}>التالى</Text>
               </View>
              </TouchableOpacity>
             
               <Text style={{ fontSize: 22,alignSelf:'center',marginTop:3,}}>{this.state.text}</Text>
             
          </>
          ))
        }


  





  </ScrollView>
      </View>





</Modal>


 
</>
  )
  }
}
*/

/*

import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage'


export default class Task3 extends React.Component {

  constructor() {
    super();
    this.state = {
      number1: Math.floor(Math.random() * 10),
      number2: Math.floor(Math.random() * 10),
      number3: Math.floor(Math.random() * 10),
      photo: require("../img/mp2.png"),
      modalVisible2: false,
      editIndex: '',
      solution: '',
      result: '',
      text: '',

      Operation: [
        {
          number1: Math.floor(Math.random() * 10),
          number2: Math.floor(Math.random() * 10),
          number3: Math.floor(Math.random() * 10),
          text: '',
        },
        {
          number1: Math.floor(Math.random() * 10),
          number2: Math.floor(Math.random() * 10),
          number3: Math.floor(Math.random() * 10),
          text: '',
        },
        {
          number1: Math.floor(Math.random() * 10),
          number2: Math.floor(Math.random() * 10),
          number3: Math.floor(Math.random() * 10),
          text: '',
        },

      ]
    }

  }







  render() {
    return ( 
  
<>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: '#ffa700', }}>
          <ScrollView>




            <Image source={this.state.photo}
              style={{
                width: 305,
                height: 320,
                borderRadius: 50,
                alignSelf: 'center',
                marginTop: 20,
              }}
              />

            <View style={{
              width: 300, height: 50, backgroundColor: '#f00', justifyContent: 'center', alignSelf: 'center', marginTop: 60,
            }}>

              <Text style={{ fontSize: 22, alignSelf: 'center', marginTop: 3, }}>
                {this.state.number1} + {this.state.number2} * {this.state.number3}</Text>
            </View>

            <TextInput
              value={this.state.solution}
              onChangeText={(value) => {
                this.setState({ solution: value })
              } }

              style={{
                width: 300, height: 50, backgroundColor: '#fff', justifyContent: 'center', alignSelf: 'center', marginTop: 20,
                fontSize: 22, textAlign: 'center'
              }} placeholder="   الحل " keyboardType="number-pad" />





            <TouchableOpacity
              onPress={() => {

                (this.state.number1 + this.state.number2 * this.state.number3) == this.state.solution ?
                  this.setState({ text: " Well Done " }) : this.setState({ text: " Wrong " })
                  

              } }
              >
              <View style={{ width: 100, height: 45, backgroundColor: '#0f0', marginTop: 20, alignSelf: 'center' }}>
                <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 5, }}>ارسال</Text>
              </View>
            </TouchableOpacity>

            <Text style={{ fontSize: 22, alignSelf: 'center', marginTop: 3, marginBottom: 100 }}>{this.state.text}</Text>





<Image source={this.state.photo}
              style={{
                width: 305,
                height: 320,
                borderRadius: 50,
                alignSelf: 'center',
                marginTop: 20,
              }}
              />

            <View style={{
              width: 300, height: 50, backgroundColor: '#f00', justifyContent: 'center', alignSelf: 'center', marginTop: 60,
            }}>

              <Text style={{ fontSize: 22, alignSelf: 'center', marginTop: 3, }}>
                {this.state.number1} + {this.state.number2} * {this.state.number3}</Text>
            </View>

            <TextInput
              value={this.state.solution}
              onChangeText={(value) => {
                this.setState({ solution: value })
              } }

              style={{
                width: 300, height: 50, backgroundColor: '#fff', justifyContent: 'center', alignSelf: 'center', marginTop: 20,
                fontSize: 22, textAlign: 'center'
              }} placeholder="   الحل " keyboardType="number-pad" />





            <TouchableOpacity
              onPress={() => {
               
                (this.state.number1 + this.state.number2 * this.state.number3) == this.state.solution ?
                  this.setState({ text: " Well Done " }) : this.setState({ text: " Wrong " })


              } }
              >
              <View style={{ width: 100, height: 45, backgroundColor: '#0f0', marginTop: 20, alignSelf: 'center' }}>
                <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 5, }}>ارسال</Text>
              </View>
            </TouchableOpacity>

            <Text style={{ fontSize: 22, alignSelf: 'center', marginTop: 3, marginBottom: 100 }}>{this.state.text}</Text>








          </ScrollView>
        </View>

      </View>






 
</>
  )
  }
}
*/
/*

import * as React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from'react-native-axios'


export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name1: "",
      name2: "",
      password: 0,
      confirmpassword: '',
      email: '',
      birthday: 0,
      modalVisible1: false,
      modalVisible2: false,
      username: "",
      passwordSignIn: "",
    }
  }



getData(){
  axios.get("http://192.168.43.125/api/test.php").then( res=>{
   console.log(res.data) 
  })
}





  render() {
    return (

<>




     
     

        <ImageBackground source={require("../img/me2.jpg")} style={{
          flex :1,
          resizeMode:'contain'
        }}>


          <Text style={{ fontSize: 34, color: '#ff5722', textAlign: 'center', marginTop: 50,fontWeight:'bold' }}>𝕎𝔼𝕃ℂ𝕆𝕄𝔼</Text>

        <TouchableOpacity
          onPress={() => {
            this.setState({ modalVisible1: true })
          } }

          style={{
            width: 270,
            height: 40,
            backgroundColor: '#ff5722',
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 230,
          }}>
          <Text style={{ fontSize: 20, color: '#F4F9FE', textAlign: 'center', marginTop: 5 }}>SIGN IN</Text>
        </TouchableOpacity >




        <TouchableOpacity
          onPress={() => {
            this.setState({ modalVisible2: true })
          } }
          style={{
            width: 270,
            height: 40,
            backgroundColor: '#ff5722',
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 70,
          }}>
          <Text style={{ fontSize: 20, color: '#F4F9FE', textAlign: 'center', marginTop: 5 }}>SIGN UP</Text>
        </TouchableOpacity >

     </ ImageBackground>

     
      <Modal
        visible={this.state.modalVisible1}
        onRequestClose={() => {
          this.setState({ modalVisible1: false, modalVisible2: false })
        } }
        >
        <ScrollView>
          <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 25, color: '#ff5722' }}>𝕊𝕚𝕘𝕟 𝕌𝕡 </Text>
          <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 30 }}>
            <View style={{
              width: 150, height: 45, backgroundColor: '', borderWidth: 1,
              borderColor: '#ff5722', alignSelf: 'center',
              marginTop: 35, borderRadius: 20, paddingLeft: 10
            }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="user" size={16} style={{ marginLeft: 0, alignSelf: 'center', color: '#00bcd4' }} />
                <TextInput
                  style={{
                    fontSize: 15,
                  }} placeholder="  First Name"
                  Value={this.state.name1}
                  onChangeText={(value) => {
                    this.setState({ name1: value })
                  } }
                  />
              </View>
            </View>

            <View style={{
              width: 150, height: 45, backgroundColor: '', borderWidth: 1,
              borderColor: '#ff5722', alignSelf: 'center', marginLeft: 10,
              marginTop: 35, borderRadius: 20, paddingLeft: 10
            }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="user" size={16} style={{ marginLeft: 0, alignSelf: 'center', color: '#00bcd4' }} />
                <TextInput
                  style={{
                    fontSize: 15,
                  }} placeholder="  Last Name"
                  Value={this.state.name2}
                  onChangeText={(value) => {
                    this.setState({ name2: value })
                  } }
                  />
              </View>
            </View>
          </View>


          <View style={{
            width: 305, height: 45, backgroundColor: '', borderWidth: 1,
            borderColor: '#ff5722', alignSelf: 'center',
            marginTop: 40, borderRadius: 20, paddingLeft: 10
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="envelope" size={18} style={{ marginLeft: 0, alignSelf: 'center', color: '#00bcd4' }} />
              <TextInput style={{
                paddingLeft: 10, fontSize: 15,
              }} placeholder="Enter your E-mail"
                Value={this.state.email}
                onChangeText={(value) => {
                  this.setState({ email: value })
                } } />
            </View>
          </View>

          <View style={{
            width: 305, height: 45, backgroundColor: '', borderWidth: 1,
            borderColor: '#ff5722', alignSelf: 'center',
            marginTop: 40, borderRadius: 20, paddingLeft: 10
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="lock" size={18} style={{ marginLeft: 0, alignSelf: 'center', color: '#00bcd4' }} />
              <TextInput style={{
                paddingLeft: 10, fontSize: 15,
              }} placeholder="Enter your Password" keyboardType="number-pad" secureTextEntry={true}
                Value={this.state.password}
                onChangeText={(value) => {
                  this.setState({ password: value })
                } } />
            </View>
          </View>

          <View style={{
            width: 305, height: 45, backgroundColor: '', borderWidth: 1,
            borderColor: '#ff5722', alignSelf: 'center',
            marginTop: 40, borderRadius: 20, paddingLeft: 10
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="lock" size={18} style={{ marginLeft: 0, alignSelf: 'center', color: '#00bcd4' }} />
              <TextInput style={{
                paddingLeft: 10, fontSize: 15,
              }} placeholder="Enter confirm password" keyboardType="number-pad" secureTextEntry={true}
                Value={this.state.confirmpassword}
                onChangeText={(value) => {
                  this.setState({ confirmpassword: value })
                } } />
            </View>
          </View>


          <View style={{
            width: 305, height: 45, backgroundColor: '', borderWidth: 1,
            borderColor: '#ff5722', alignSelf: 'center',
            marginTop: 40, borderRadius: 20, paddingLeft: 10
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="birthday-cake" size={18} style={{
                marginLeft: 0, alignSelf: 'center',
                color: '#00bcd4'
              }} />
              <TextInput style={{
                paddingLeft: 10, fontSize: 15,
              }} placeholder="Enter your Birthday"
                Value={this.state.birthday}
                onChangeText={(value) => {
                  this.setState({ birthday: value })
                } } />
            </View>
          </View>
          <TouchableOpacity style={{
            width: 160, height: 45, backgroundColor: '#ff5722', borderWidth: 1,
            borderColor: '#ff5722', alignSelf: 'center',
            marginTop: 45, borderRadius: 20, paddingLeft: 0
          }}>
            <Text style={{ fontSize: 20, color: '#00bcd4', textAlign: 'center', marginTop: 2 }}>Sαʋҽ</Text>
          </TouchableOpacity>

        </ScrollView>

      </Modal>
      
      <Modal
        visible={this.state.modalVisible2}
        onRequestClose={() => {
          this.setState({ modalVisible2: false })
        } }
        >

        <View style={{ backgroundColor: '#EFEDF1', flex: 1 }}>



          <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 60, color: '#ff5722' }}>SIGN IN
          </Text>

          <View
            style={{
              width: 310,
              height: 45,
              marginTop: 80,
              paddingLeft: 20,
              backgroundColor: '#DAE0E0',
              marginLeft: 20,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#ff5722'
            }}
            >
            <View style={{ flexDirection: 'row' }}>
              <Icon name="user-alt" size={17} style={{ marginTop: 10, color: '#00f' }} />
              <TextInput
                value={this.state.username}
                onChangeText={(value) => {
                  this.setState({ username: value })
                } }


                style={{
                  fontSize: 16,
                  color: '#00f',
                  marginLeft: 10,
                  marginTop: 3,
                }}
                defaultValue="User Name"
                >
              </TextInput>


            </View>
          </View>



          <View
            style={{
              width: 310,
              height: 45,
              marginTop: 50,
              paddingLeft: 20,
              backgroundColor: '#DAE0E0',
              marginLeft: 20,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#ff5722'

            }}
            >
            <View style={{ flexDirection: 'row' }}>
              <Icon name="lock" size={20} style={{ marginTop: 10 }} />
              <TextInput

                value={this.state.passwordSignIn}
                onChangeText={(value) => {
                  this.setState({ passwordSignIn: value })
                } }

                style={{
                  fontSize: 16,

                  marginLeft: 10,
                  marginTop: 3,
                }}
                defaultValue="Password"
                >
              </TextInput>


            </View>
          </View>
          <Text style={{ fontSize: 16, marginTop: 35, color: '#ff5722', marginRight: 200 }}>Forget Password ?</Text>
          <TouchableOpacity style={{
            width: 270,
            height: 40,
            backgroundColor: '#ff5722',
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 20,
          }}>
            <Text style={{ fontSize: 20, color: '#F4F9FE', textAlign: 'center', marginTop: 5 }}>LOG IN</Text>
          </TouchableOpacity >

          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 60 }}>
            <TouchableOpacity style={{
              width: 120,
              height: 30,
              backgroundColor: '#f00',
              borderRadius: 20,
              alignSelf: 'center',
              marginTop: 10,

            }}>
              <Text style={{ fontSize: 16, color: '#F4F9FE', textAlign: 'center', marginTop: 1 }}>
                <Icon name="google" size={20} style={{ marginTop: 10 }} />   Google </Text>
            </TouchableOpacity >

            <TouchableOpacity style={{
              width: 120,
              height: 30,
              backgroundColor: '#170FA3',
              borderRadius: 20,
              alignSelf: 'center',
              marginTop: 10,
              marginLeft: 20
            }}>
              <Text style={{ fontSize: 16, color: '#F4F9FE', textAlign: 'center', marginTop: 1 }}>
                <Icon name="facebook-f" size={20} style={{ marginTop: 15 }} />   Facebook</Text>
            </TouchableOpacity >

          </View>
          <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 30, fontWeight: 'bold' }}>Don't have an account ? SIGN UP</Text>

        </View>


      </Modal>










</>

     );
  }
}
const styles = StyleSheet.create({
});

*/
/*



import * as React from 'react';
import { Text, StyleSheet, View,Image,ScrollView,ImageBackground,TextInput,TouchableOpacity,TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class App extends React.Component {

     constructor() {
    super()
    this.state = {
      username: "",
      passwordSignIn: "",

    }
     }


  render() {
    return (
<>

<Modal 
visible ={this.state.modalVisible2}
onRequestClose={()=>{
  this.setState({modalVisible2:false})
}}
>

<View style={{backgroundColor:'#EFEDF1',flex:1}}>



<Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',marginTop:50}}>SIGN IN
</Text>
 
<View 
style={{
  width:300,
  height:45,
  marginTop:70,
  paddingLeft:20,
  backgroundColor:'#DAE0E0',
  marginLeft:20,
  borderRadius:20
  
}}
>
<View style={{flexDirection :'row'}}>
<Icon name="user-alt" size ={17} style={{marginTop:10,color:'#00f'}}/> 
<TextInput 
value ={this.state.username}
onChangeText={(value)=>{
  this.setState({username :value})
}}


style={{
  fontSize:16,
  color:'#00f',
  marginLeft:10,
  marginTop:3,
}}
defaultValue="User Name"
>
</TextInput>


</View>
</View>



<View 
style={{
  width:300,
  height:45,
  marginTop:30,
  paddingLeft:20,
  backgroundColor:'#DAE0E0',
  marginLeft:20,
  borderRadius:20
  
}}
>
<View style={{flexDirection :'row'}}>
<Icon name="lock" size ={20} style={{marginTop:10}}/> 
<TextInput

value ={this.state.passwordSignIn}
onChangeText={(value)=>{
  this.setState({passwordSignIn :value})
}}

 style={{
  fontSize:16,
  
  marginLeft:10,
  marginTop:3,
}}
defaultValue="Password"
>
</TextInput>


</View>
</View>
<Text style={{fontSize:16,marginTop:30,color:'#00f',marginRight:200}}>Forget Password ?</Text>
<TouchableOpacity style={{
  width:270,
  height:40,
  backgroundColor:'#00f',
  borderRadius:20,
  alignSelf:'center',
  marginTop:20,
}}>
<Text style={{fontSize:20,color:'#F4F9FE',textAlign:'center',marginTop:5}}>LOG IN</Text>
</TouchableOpacity >

<View style={{flexDirection:'row',alignSelf:'center',marginTop:30}}>
<TouchableOpacity style={{
  width:120,
  height:30,
  backgroundColor:'#f00',
  borderRadius:20,
  alignSelf:'center',
  marginTop:10,
  
}}>
<Text style={{fontSize:16,color:'#F4F9FE',textAlign:'center',marginTop:1}}><Icon name="google" size ={20} style={{marginTop:10}}/>   Google </Text>
</TouchableOpacity >

<TouchableOpacity style={{
  width:120,
  height:30,
  backgroundColor:'#170FA3',
  borderRadius:20,
  alignSelf:'center',
  marginTop:10,
  marginLeft:20
}}>
<Text style={{fontSize:16,color:'#F4F9FE',textAlign:'center',marginTop:1}}>
<Icon name="facebook-f" size ={20} style={{marginTop:15}}/>   Facebook</Text>
</TouchableOpacity >

</View>
<Text style={{fontSize:16,textAlign:'center',marginTop:20,fontWeight:'bold'}}>Don't have an account ? SIGN UP</Text>

</View>


</Modal>
 </>
    );
   }
 }
const styles = StyleSheet.create({
 
  

});
*/


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
//       data: 'empty',
//       loding: true,
//     }
//   }

//   componentDidMount() {
//     // alert("hi")
//     axios.get("http://192.168.43.125/api/test.php").then(res => {
//       console.log(res.data)
//       // console.log(res.status)
//       if (res.status == 200) {
//         if (res.data.length != 0) {
//           this.setState({
//             loding: false,
//             data: res.data,
//           })
//         } else {
//           console.log("Empty")
//         }

//       } else {
//         console.log("Eroooooooooor")
//       }
//     })
//   }

//   // compo









//   render() {
//     return (
// <>


//       <View>
//         {this.state.loding ? (
//           <ActivityIndicator color="green" size={50} />
//         ) : this.state.data != "empty" ? (

//           this.state.data.map(item => (
//           <>
//             <View style={{
//               width: 300, height: 45, alignSelf: 'center', marginTop: 40, borderWidth: 1, borderRadius: 50,
//               borderColor: '#000', backgroundColor: '#ddd', paddingRight: 15
//             }}>
//               <Text style={{ marginTop: 9 }} >{item.user_name}</Text>
//             </View>
//             <View style={{
//               width: 300, height: 45, alignSelf: 'center', marginTop: 40, borderWidth: 1, borderRadius: 50,
//               borderColor: '#000', backgroundColor: '#ddd', paddingRight: 15
//             }}>
//               <Text style={{ marginTop: 9 }} >{item.password}</Text>
//             </View>
//           </>
//         ))
//       )

//           :

//           (
//             <Text>Empty</Text>
//         )}








// </View>

//  </>
//     );
//   }
// }
// const styles = StyleSheet.create({



// });

///////////////////////////////////////////////////////////////////////////////////

     /// project 2
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
    this.state.number1 * this.state.number2 + this.state.number3 - this.state.number4  == this.state.solution ?
     this.setState({text :'الاجابة : صح',result :1,counter :(this.state.counter +1)})  :   
     ( this.setState({text :'الاجابة : خطأ',result:0,
     counter :this.state.counter}) 
     
     )
     
}

counterPage (counter=this.state.counter,name=this.state.name ) {
  this.props.navigation.navigate('page4',{
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
                {this.state.number1} x {this.state.number2} + {this.state.number3} - {this.state.number4}</Text>
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













