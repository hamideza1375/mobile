import React, { useRef, useState } from 'react'
import { Animated } from 'react-native';
import { Div, Img, ScrollHorizontal, Span, Button, Scroll } from '../../Components/Html'

var count = 1

function Home(p) {
  // const [count, setcount] = useState(1)



  const open = () => {
     p.$ && p.$.id('scroll').scrollTo({ x: -p.width * count, y: 0, animated: true }); 
     count += 1
  };




  return (
    <Span>
      <ScrollHorizontal id='scroll' onLayout={()=>{
        var interval = setInterval(sum,6000); 
        function sum(){
          open()
          if(count === 8) count = 0
        }
        }} style={{ height: 300 }} >
      <Img w={p.width} h={300} src={require('../../assets/images/a1.jpg')} />
        <Img w={p.width} h={300} src={require('../../assets/images/a3.jpg')} />
        <Img w={p.width} h={300} src={require('../../assets/images/a1.jpg')} />
        <Img w={p.width} h={300} src={require('../../assets/images/a2.jpg')} />
        <Img w={p.width} h={300} src={require('../../assets/images/a1.jpg')} />
        <Img w={p.width} h={300} src={require('../../assets/images/a3.jpg')} />
        <Img w={p.width} h={300} src={require('../../assets/images/a1.jpg')} />
        <Img w={p.width} h={300} src={require('../../assets/images/a2.jpg')} />
      </ScrollHorizontal>

      {/* <Button onClick={() => { p.$ && p.$.id('scroll').scrollTo({ x: -p.width * count, y: 0, animated: true }); setcount(count => count + 1) }} ></Button> */}
      <Button onClick={() => { console.log(p.$.id('scroll').nameID); }} ></Button>
      {/* <Button onClick={()=>{console.log(p.$.id('scroll').nameID);}} ></Button> */}
      {/* <Button onClick={()=>{p.$.id('scroll').scrollToEnd({ animated: true })}} ></Button> */}
      <Span></Span>
      <Span></Span>
    </Span>
  )

  
}

export default Home

