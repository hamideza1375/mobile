import React from 'react'
import { Platform, ScrollView } from 'react-native'
import { Span, Slider, Press, ScrollSlider, Icon, M_icon, Scroll, B_icon, Img, P, Card2, Div } from '../../Components/Html'
import LinearGradient from '../../Components/other/LinearGradient'

function Home(p) {
  return (
    <Span f={1} >

    <Scroll id='containScroll' onLayout={() => { /* if (p.$?.id('containScroll')) { p.$.id('containScroll').scrollTo({ x: 0, y: 20, animated: true }) }*/ }}  >

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


      <Span>
        <Span fd='row' ai='center' >
          <P mr={15} mt={12} fs={15} mb={-15} color='#444' >دسته ها</P>
          <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginTop: 28, marginHorizontal: 25 }} ></LinearGradient>
        </Span>

        <ScrollSlider {...p} id='scrollGradient' h={180} ccStyle={{ height: 180 }} style={Platform.OS !== 'web' ?{paddingRight:290}:{paddingRight:10}} >


          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >3قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >قطعات موبایل</P>
          </Span>

          <Span w={120} h={130} as='center' >
            <Span w={110} h={110} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height:104, maxHeight: 105 }} >
              <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
                <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
              </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >44قطعات موبایل</P>
          </Span>
        </ScrollSlider>
      </Span>




      <Span bgcolor='#e5e' br={2} w='100%' as='center' mt={10} >

        <Span jc='space-between' fd='row-reverse' >
          {/* <Icon name='percent' size={32} style={{marginTop:10,marginLeft:12}} /> */}
          <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginTop: 29, marginHorizontal: 25 }} ></LinearGradient>
          <P fs={16} mt={15} mr={9} ml='auto' color='#fff' >تخفیف ها</P>
          <Icon name='percent' size={30} color='#fff' style={{ marginTop: 10, marginRight: 12, fontWeight: '100' }} />
        </Span>

        <ScrollSlider  {...p} id='scrollCard1' h={210} style={{ width: '99%', alignSelf: 'center' }} ccStyle={{ height: 180 }} >

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

          <Span w={160} ai='center' jc='center' >
            <Card2 h={170} w={150} mt={25} style={{ borderColor: 'silver', backgroundColor: 'white' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
            />
          </Span>

        </ScrollSlider>

        <P fs={14} mr='auto' ml={12} mb={12} mt={-3} color='#fff' >مشاهده ی همه ی تخفیف ها ↫</P>


      </Span>





      {/* <ScrollView indicatorStyle='default' showsHorizontalScrollIndicator showsVerticalScrollIndicator></ScrollView> */}

      <Span>

        <Span jc='space-between' fd='row-reverse' mb={9} >
          <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginTop: 31, marginHorizontal: 15 }} ></LinearGradient>
          <P fs={16} mt={17} mr={9} ml='auto' color='#444'>فیلتر ها بر اساس بهترین عملکرد</P>
        </Span>


        <ScrollSlider {...p} id='scrollIcon' h={170} mb={10} ccStyle={{ height: 170 }} >

          <Span w={130} h={120} ai='center' jc='center'>
            <Span w={130} h={120} ai='center' jc='center'>
              <B_icon scale={1.4} iconSize={32} style={{opacity:.9}} bgcolor="black" icon='mobile' />
            </Span>
            <P color='#229b' fw='bold' >دوربین قدرتمند</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} color="white" bgcolor="black" style={{opacity:.9}} m_icon='phonelink-setup' />
          </Span>
          <P color='#229b' fw='bold' >ا Ram بالا</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} color="white" bgcolor="black" style={{opacity:.9}} icon='headphones' />
          </Span>
          <P color='#229b' fw='bold' >حافظه ی داخلی بالا</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} color="white" bgcolor="black" style={{opacity:.9}} icon='tablet' />
          </Span>
          <P color='#229b' fw='bold' >ا cpu قوی</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} color="white" bgcolor="black" style={{opacity:.9}} icon='shopping-cart' />
          </Span>
          <P color='#229b' fw='bold' >صفحه نمایش بزرگ</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} iconSize={32} style={{opacity:.9}} bgcolor="black" icon='mobile' />
          </Span>
          <P color='#229b' fw='bold' >دو سیم</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} color="white" bgcolor="black" style={{opacity:.9}} m_icon='phonelink-setup' />
          </Span>
          <P color='#229b' fw='bold' >کیفیت صدا</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} color="white" bgcolor="black" style={{opacity:.9}} icon='headphones' />
          </Span>
          <P color='#229b' fw='bold' >5G</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} color="white" bgcolor="black" style={{opacity:.9}} icon='tablet' />
          </Span>
          <P color='#229b' fw='bold' >4G</P>
          </Span>

          <Span w={130} h={120} ai='center' jc='center'>
          <Span w={130} h={120} ai='center' jc='center'>
            <B_icon scale={1.4} color="white" bgcolor="black" style={{opacity:.9}} icon='shopping-cart' />
          </Span>
          <P color='#229b' fw='bold' > قدرتمند</P>
          </Span>

        </ScrollSlider>

      </Span>




      <Span border={[0]} bgcolor='#ede' >

        <Span jc='space-between' fd='row-reverse' mb={10} >
          <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginTop: 32, marginHorizontal: 25 }} ></LinearGradient>
          <P fs={16} mt={17} mr={9} ml='auto' color='#444'>منتخب ها</P>
        </Span>

        <ScrollSlider {...p} id='scrollCard' h={250} mb={10} ccStyle={{ height: 195 }} >



          <Span w={230} ai='center' jc='center' >
            <Card2 h={200} w={200}  mt={25} sh={{ r: 7, o: .5, c: 'blue', of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
              coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
              coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
            />
          </Span>

          <Span w={230} ai='center' jc='center' >
            <Card2 h={200} w={200}  mt={25} sh={{ r: 7, o: .5, c: 'blue', of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
              coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
              coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
            />
          </Span>

          <Span w={230} ai='center' jc='center' >
            <Card2 h={200} w={200}  mt={25} sh={{ r: 7, o: .5, c: 'blue', of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
              coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
              coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
            />
          </Span>

          <Span w={230} ai='center' jc='center' >
            <Card2 h={200} w={200}  mt={25} sh={{ r: 7, o: .5, c: 'blue', of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
              coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
              coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
            />
          </Span>

          <Span w={230} ai='center' jc='center' >
            <Card2 h={200} w={200}  mt={25} sh={{ r: 7, o: .5, c: 'blue', of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
              coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
              coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
            />
          </Span>

          <Span w={230} ai='center' jc='center' >
            <Card2 h={200} w={200}  mt={25} sh={{ r: 7, o: .5, c: 'blue', of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
              coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
              coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
            />
          </Span>

          <Span w={230} ai='center' jc='center' >
            <Card2 h={200} w={200}  mt={25} sh={{ r: 7, o: .5, c: 'blue', of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
              coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
              coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
              coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
              coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
            />
          </Span>

        </ScrollSlider>
      </Span>



      <Span border={[1]} p={10} bgcolor='#0d1e2d' >

        <Span >
          <Span border={[0, 'white']} bbw={1} mr={9} pb={5} w={'50%'} as='flex-start' >
            <P color='white' >مجوز های ما</P>
          </Span>

          <Span w={70} h={70} mr={7} mt={12} border={[1, 'white']} ></Span>

        </Span>

        <Span border={[0, 'white']} mt={10} btw={1} w={'60%'} pb={4} pt={8} mr={9} >
          <P color='#05a' >درباره ی ما</P>
        </Span>

      </Span>




    </Scroll>
      <Span sh={{r:6,o:.5}} jc='center' ai='center' br={70} bgcolor='#909' h={50} w={50} pos='absolute' b={30} l={40} > 
      <M_icon color='#fff' name='chat' size={30} />
      </Span>
      </Span>

  )
}

export default Home

