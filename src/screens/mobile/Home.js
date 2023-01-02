import React from 'react'
import { Span, Slider, Press, ScrollSlider, Icon } from '../../Components/Html'

function Home(p) {
  return (
    <Span>
      <Slider id='slider' {...p} onClick={() => { alert(8) }}
        img1={require('../../assets/images/a1.jpg')}
        img2={require('../../assets/images/a2.jpg')}
        img3={require('../../assets/images/a3.jpg')}
        img4={require('../../assets/images/a7.jpg')}
        img5={require('../../assets/images/a1.jpg')}
        img6={require('../../assets/images/a2.jpg')}
        img7={require('../../assets/images/a3.jpg')}
        img8={require('../../assets/images/a7.jpg')}
      />

      <ScrollSlider {...p} id='scroll2' >
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} ><Press onClick={() => alert(9)} bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
      </ScrollSlider>

      <Span>

        <ScrollSlider {...p}  id='scrollIcon' >
        <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
          <Icon name='eye' size={60} style={{padding:15}} />
        </ScrollSlider>

      </Span>
    </Span>
  )
}

export default Home

