import React from 'react'
import { Pressable, ScrollView } from 'react-native';
import { Span, Slider, Press, ScrollHorizontal } from '../../Components/Html'

var count = 150,
  interval,
  width,
  scroll = true

function Home(p) {

  // const open = () => {
  //   if (scroll) {
  //     { p.$ && p.$.id('scroll2').scrollTo({ x: count, y: 0, animated: true }); }
  //     count += 150
  //   }
  // };
  


  // if (interval && p.width !== width) {
  //   clearInterval(interval)
  // }


  return (
    <Span>
      <Slider {...p} onClick={() => { alert(8) }}
        img1={require('../../assets/images/a1.jpg')}
        img2={require('../../assets/images/a2.jpg')}
        img3={require('../../assets/images/a3.jpg')}
        img4={require('../../assets/images/a7.jpg')}
        img5={require('../../assets/images/a1.jpg')}
        img6={require('../../assets/images/a2.jpg')}
        img7={require('../../assets/images/a3.jpg')}
        img8={require('../../assets/images/a7.jpg')}
      />

      <Press style={{width:'100%',height:150}} onMoveShouldSetResponder={()=>{scroll=false}} onClick={()=>{scroll=false}}>
        {/* <ScrollHorizontal dir='ltr' id='scroll2' 
        onLayout={() => {width = p.width;interval = setInterval(sum, 4000);function sum() { open(); if (p.width !== width) clearInterval(interval) }}}
         style={{ height: 150, width: p.width - 4, marginTop: 2, alignSelf: 'center', borderRadius: 5, flexWrap: 'wrap' }} >
          <Press w={150} ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
          <Press w={150} ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
          <Press w={150} ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
          <Press w={150} ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
          <Press w={150} ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
          <Press w={150} ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
          <Press w={150} ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
          <Press w={150} ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        </ScrollHorizontal> */}

      </Press>
    </Span>
  )
}

export default Home

