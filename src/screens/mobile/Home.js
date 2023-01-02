import React from 'react'
import { Span, Slider, Press, ScrollSlider } from '../../Components/Html'

function Home(p) {
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
      <ScrollSlider {...p}>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
      </ScrollSlider>
    </Span>
  )
}

export default Home

