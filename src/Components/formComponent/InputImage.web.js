import React, { useRef } from "react";
import { Animated, KeyboardAvoidingView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import Swiper from '../components/Swiper'
import { M_icon } from "../Html";


function InputImage({ imIconLeft,imIconRight,imageUrl,setImageUrl,_imageUrl,newObj,img,styles, icon,p,accept}) {
 


    return (
    <KeyboardAvoidingView behavior={"height"} style={[{ height: 70, minHeight: 70, marginVertical: 10,marginTop:7, marginHorizontal:10, flexGrow:1 }]}>


        <View style={{ height:70,minHeight:70,marginVertical:10 }}>
          <Animated.View style={[styles.viewInput, { minHeight: 90 }, { marginBottom: 5 }]} >
            <Swiper cansel={(imIconLeft || imIconRight) ? false : true} style={{  }}
              styleRightIcon={{ top: 37 }}
              styleLeftIcon={{ top: 37 }}
              iconLeft={imIconLeft}
              iconRight={imIconRight}
              >
              <Text style={[styles.textinput, { marginTop: 5 }]} > {p}</Text>
              <Animated.View style={[styles.animatedBorder,
              _imageUrl && !img &&
              {borderWidth: 1.2,borderColor:_imageUrl && !img?'red':'#222'}]} >
                <View style={{border:'1px solid #111', marginBottom: 5,
                  height: 50,
                  backgroundColor:'#fff',
                  justifyContent:'center',
                  minWidth: '90%',borderRadius:5, boxShadow:'1px 1px 4px #0007'}} >
              <View style={{position:'absolute', height:'100%', width:'14.8%',maxWidth:80, left:0,borderRightWidth:.8,borderColor:'#111',alignItems:'center', justifyContent:'center'}} >
               {icon === 'image' ?<Icon style={{}} name={icon} size={22} color={"#222"} />
              :
              <M_icon style={{}} name={icon} size={22} color={"#222"} />
              }

               </View>
               <Text style={{width:'85%',position:'absolute',Top:5,paddingRight:12, color:'#666'}} >{imageUrl?(!imageUrl.name?imageUrl:imageUrl.name):p}</Text>
                <input
                type={'file'}
                accept={`${accept}/*`}
                placeholder={p}
                onChange={(event)=>{setImageUrl(event.target.files[0])}}
                style={{opacity:0, width:'100%',minHeight:'100%',boxSizing:'border-box'}}
                />
                </View>
              </Animated.View>
              {_imageUrl && !img && <Text style={[styles.textinput, { color: 'red' }]} >
                {newObj}
              </Text>}
            </Swiper>
          </Animated.View>
        </View>
                </KeyboardAvoidingView>
    )
  }
  
  export default InputImage