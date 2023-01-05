import React from 'react'
import { Span, Slider, Press, ScrollSlider, Icon, M_icon, Scroll, B_icon, Img } from '../../Components/Html'
import LinearGradient from '../../Components/other/LinearGradient'

function Home(p) {
  return (
    <Scroll>
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


      <ScrollSlider {...p} id='scroll' >
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
        <Press w={150} h={130} bgcolor='silver' ><Press bgcolor='red' w={'95%'} h={'100%'}></Press></Press>
      </ScrollSlider>



      <ScrollSlider {...p} id='scrollIcon' h={180} mb={10} pb={77} ccStyle={{alignItems:'center', justifyContent:'center', height:180}} border={[2,'red']} >
        <Span w={180} h={150} as='center'>
        <Span w={150} h={150} as='center'>
          <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
          </LinearGradient>
          <Span style={{ alignItems:'center',justifyContent:'center',borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
        <Img w={137}h={137} br={80} src={require('../../assets/images/a1.jpg')} />
         
          </Span>
        </Span>
        </Span>

        <Span w={180} h={150} as='center'>
        <Span w={150} h={150} as='center'>
          <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
          </LinearGradient>
          <Span style={{ alignItems:'center',justifyContent:'center',borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
        <Img w={137}h={137} br={80} src={require('../../assets/images/a1.jpg')} />
         
          </Span>
        </Span>
        </Span>


      </ScrollSlider>





      <ScrollSlider {...p} id='scrollIcon' h={180} mb={10} pb={77} ccStyle={{alignItems:'center', justifyContent:'center', height:180}} border={[2,'red']} >
       
        <Span w={180} h={150} ai='center' jc='center'>
        <B_icon scale={1.9} color="white" bgcolor="green" icon='mobile' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
        <B_icon scale={1.9} color="white" bgcolor="green" m_icon='phonelink-setup' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
        <B_icon scale={1.9} color="white" bgcolor="green" icon='headphones' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
        <B_icon scale={1.9} color="white" bgcolor="green" icon='tablet' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
        <B_icon scale={1.9} color="white" bgcolor="green" icon='shopping-cart' />
        </Span>

      </ScrollSlider>



    </Scroll>

  )
}

export default Home

