import React from 'react'
import { ScrollView } from 'react-native'
import { Span, Slider, Press, ScrollSlider, Icon, M_icon, Scroll, B_icon, Img, P, Card2 } from '../../Components/Html'
import LinearGradient from '../../Components/other/LinearGradient'

function Home(p) {
  return (
    <Scroll id='containScroll' onLayout={() => { if (p.$?.id('containScroll')) { p.$.id('containScroll').scrollTo({ x: 0, y: 20, animated: true }) } }}  >
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


<ScrollSlider bgcolor='#d29' {...p} id='scrollCard1' h={200} style={{marginTop:12, borderRadius:40, width:'98%'}} ccStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', height: 150 }} >

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

<Span w={155} ai='center' jc='center' >
  <Card2 h={150} w={150} style={{ borderColor: 'silver', backgroundColor:'white' }} src={require('../../assets/images/a1.jpg')}
    coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
    coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
  />
</Span>

</ScrollSlider>



      <ScrollSlider {...p} id='scrollGradient' h={190} mb={10} pb={77} ccStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', height: 180 }} >
     
        <Span w={180} h={150} as='center'>
          <Span w={150} h={150} as='center'>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
            </LinearGradient>
            <Span style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
              <Img w={137} h={137} br={80} src={require('../../assets/images/a1.jpg')} />

            </Span>
          </Span>
        </Span>

        <Span w={180} h={150} as='center'>
          <Span w={150} h={150} as='center'>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
            </LinearGradient>
            <Span style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
              <Img w={137} h={137} br={80} src={require('../../assets/images/a2.jpg')} />

            </Span>
          </Span>
        </Span>

        <Span w={180} h={150} as='center'>
          <Span w={150} h={150} as='center'>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
            </LinearGradient>
            <Span style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
              <Img w={137} h={137} br={80} src={require('../../assets/images/a3.jpg')} />

            </Span>
          </Span>
        </Span>

        <Span w={180} h={150} as='center'>
          <Span w={150} h={150} as='center'>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
            </LinearGradient>
            <Span style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
              <Img style={{ objectFit: 'contain' }} w={137} h={137} br={80} src={require('../../assets/images/a7.jpg')} />
              {/* <p style={{objectFit}}></p> */}
            </Span>
          </Span>
        </Span>


        <Span w={180} h={150} as='center'>
          <Span w={150} h={150} as='center'>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
            </LinearGradient>
            <Span style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
              <Img w={137} h={137} br={80} src={require('../../assets/images/a1.jpg')} />

            </Span>
          </Span>
        </Span>

        <Span w={180} h={150} as='center'>
          <Span w={150} h={150} as='center'>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
            </LinearGradient>
            <Span style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
              <Img w={137} h={137} br={80} src={require('../../assets/images/a2.jpg')} />

            </Span>
          </Span>
        </Span>

        <Span w={180} h={150} as='center'>
          <Span w={150} h={150} as='center'>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
            </LinearGradient>
            <Span style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
              <Img w={137} h={137} br={80} src={require('../../assets/images/a3.jpg')} />

            </Span>
          </Span>
        </Span>

        <Span w={180} h={150} as='center'>
          <Span w={150} h={150} as='center'>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >
            </LinearGradient>
            <Span style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 10, backgroundColor: 'white', position: 'absolute' }} >
              <Img style={{ objectFit: 'contain' }} w={137} h={137} br={80} src={require('../../assets/images/a7.jpg')} />
              {/* <p style={{objectFit}}></p> */}
            </Span>
          </Span>
        </Span>



      </ScrollSlider>


      {/* <ScrollView indicatorStyle='default' showsHorizontalScrollIndicator showsVerticalScrollIndicator></ScrollView> */}




      <ScrollSlider {...p} id='scrollCard' h={250} mb={10} pb={77} ccStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', height: 180 }} >

        <Span w={230} ai='center' jc='center' >
          <Card2 h={200} w={200} sh={{ r: 8, o: 1, c: 'blue', of: { width: 0, height: 1 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
            coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
            coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
            coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
          />
        </Span>

        <Span w={230} ai='center' jc='center' >
          <Card2 h={200} w={200} sh={{ r: 8, o: 1, c: 'blue', of: { width: 0, height: 1 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
            coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
            coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
            coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
          />
        </Span>

        <Span w={230} ai='center' jc='center' >
          <Card2 h={200} w={200} sh={{ r: 8, o: 1, c: 'blue', of: { width: 0, height: 1 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
            coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
            coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
            coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
          />
        </Span>

        <Span w={230} ai='center' jc='center' >
          <Card2 h={200} w={200} sh={{ r: 8, o: 1, c: 'blue', of: { width: 0, height: 1 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
            coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
            coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
            coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
          />
        </Span>

        <Span w={230} ai='center' jc='center' >
          <Card2 h={200} w={200} sh={{ r: 8, o: 1, c: 'blue', of: { width: 0, height: 1 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
            coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
            coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
            coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
          />
        </Span>

        <Span w={230} ai='center' jc='center' >
          <Card2 h={200} w={200} sh={{ r: 8, o: 1, c: 'blue', of: { width: 0, height: 1 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
            coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
            coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
            coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
          />
        </Span>

        <Span w={230} ai='center' jc='center' >
          <Card2 h={200} w={200} sh={{ r: 8, o: 1, c: 'blue', of: { width: 0, height: 1 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
            coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
            coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
            coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
          />
        </Span>

      </ScrollSlider>




      <ScrollSlider {...p} id='scrollIcon' h={180} mb={10} pb={77} ccStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', height: 180 }} >

      <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} iconSize={32} color="white" bgcolor="red" icon='mobile' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} color="white" bgcolor="green" m_icon='phonelink-setup' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} color="white" bgcolor="blue" icon='headphones' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} color="white" bgcolor="yellow" icon='tablet' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} color="white" bgcolor="silver" icon='shopping-cart' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} iconSize={32} color="white" bgcolor="red" icon='mobile' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} color="white" bgcolor="green" m_icon='phonelink-setup' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} color="white" bgcolor="blue" icon='headphones' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} color="white" bgcolor="yellow" icon='tablet' />
        </Span>

        <Span w={180} h={150} ai='center' jc='center'>
          <B_icon scale={1.9} color="white" bgcolor="silver" icon='shopping-cart' />
        </Span>

      </ScrollSlider>



    </Scroll>

  )
}

export default Home

