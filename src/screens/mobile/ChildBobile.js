import React from 'react'
import { Platform } from 'react-native'
import { A_icon, Badge, Button, Card, Card2, Icon, Img, M_icon, P, Press, Scroll, ScrollSlider, Span } from '../../Components/Html'

const ChildBobile = (p) => {
  return (
    <Span f={1} style={{ maxHeight: Platform.OS === 'web' ? '100vh' : '100%' }} >
      <Scroll >

        <Span>
          <P mt={25} fw='bold' mr={14} >گوشی موبایل شیایومی مدل 12</P>
        </Span>

        <Span fd='row-reverse' w='100%' jc='space-between' bgcolor='#fff' ai='center' p={15} mt={25} >
          <Span w={400} as='flex-end' ai='center' jc='center' >
            <Card2 h={400} w={400} style={{ borderColor: 'silver', backgroundColor: 'white' }}
              coulumn1={
                <Span w={'100%'} f={1} >

                  <Span fd='row' f={1} w={'100%'}>
                    <Span bbw={2} w='20%' fg={1} mh={4} />
                    <P mt={19}>ارسال سریع</P>
                    <Span bbw={2} w='20%' fg={1} mh={4} />
                  </Span>


                  <Span f={2}  >
                    <P mb={-6}>تحویل حد اکثر یکساعت بعد از خرید</P>
                  </Span >

                </Span>
              }
              c2={3} coulumn2={
                <Span w={'100%'} f={1}>


                  <Span fg={1} border={[1]} >
                    <P mb={-6}>گارانتی</P>
                  </Span >

                  <Span fg={1} border={[1]} >
                    <P mb={-6}>موجود در انبار</P>
                  </Span >

                  <Span fg={1} border={[1]} >
                    <P mb={-6}>انتخاب رنگ</P>
                  </Span >

                  <Span fg={1} border={[1]} mb={10}  >
                    <Button w='70%' bgcolor='#909' style={{ alignSelf: 'center', position: 'absolute', bottom: 5 }} >افزودن به سبد خرید</Button>
                  </Span >


                </Span>}
            />
          </Span>






          <Span w={300} as='flex-end' ai='center' jc='center' >

            <Card2 h={400} w={300} style={{ borderColor: 'silver', backgroundColor: 'white' }}

              c1={4} coulumn1={
                <Span f={1} >
                  <Span f={1} >
                    <Img id='img' f={1} src={require('../../assets/images/a1.jpg')} />
                  </Span>
                </Span>
              }
              c2={1} coulumn2={
                <Span f={1} fd='row' jc='center' >
                  <Press onClick={() => { p.$.id('img').$({ src: require('../../assets/images/a1.jpg') }) }} f={1} ai='center' jc='center' >
                    <Img w='90%' h='90%' br={4} src={require('../../assets/images/a1.jpg')} />
                  </Press>
                  <Press onClick={() => { p.$.id('img').$({ src: require('../../assets/images/a2.jpg') }) }} f={1} ai='center' jc='center' >
                    <Img w='90%' h='90%' br={4} src={require('../../assets/images/a2.jpg')} />
                  </Press>
                  <Press onClick={() => { p.$.id('img').$({ src: require('../../assets/images/a3.jpg') }) }} f={1} ai='center' jc='center' >
                    <Img w='90%' h='90%' br={4} src={require('../../assets/images/a3.jpg')} />
                  </Press>
                  <Press onClick={() => { p.$.id('img').$({ src: require('../../assets/images/a7.jpg') }) }} f={1} ai='center' jc='center' >
                    <Img w='90%' h='90%' br={4} src={require('../../assets/images/a7.jpg')} />
                  </Press>

                </Span>
              }

            >

            </Card2>
          </Span>








          <Span w={300} as='flex-end' ai='center' jc='center' >

            <Span as='flex-start' >
              <P>مشخصات</P>
            </Span>

            <Card2 h={400} w={300} style={{ borderColor: 'silver', backgroundColor: 'white' }}

              coulumn1={
                <Span mt={10} >
                  <Span mr={12} >
                    <P>نوع پردازنده cpu:</P>
                  </Span>
                </Span>
              }
              coulumn2={
                <Span>
                  <Span mr={12} >
                    <P>رم:</P>
                  </Span>
                </Span>
              }
              coulumn3={
                <Span>
                  <Span mr={12} >
                    <P>حافظه ی داخلی:</P>
                  </Span>
                </Span>
              }
              coulumn4={
                <Span>
                  <Span mr={12} >
                    <P>دوربین:</P>
                  </Span>
                </Span>
              }

              c5={.5} coulumn5={
                <Span f={.8} jc='center'>
                  <Span ml={12} as='flex-end'>
                    <P >نمایش مشخصات کامل کلیک کنید ></P>
                  </Span>
                </Span>
              }

            >

            </Card2>







            <Span fd='row' mt={10}>
              <Span f={1}>
                <Card2 h={'auto'}
                  coulumn1={
                    <Span jc='center' ai='center' ><Icon name='eye' size={30} /></Span>
                  }
                  coulumn2={
                    <P ta='center' fs={9}>هفت روز فرصت بازگشت کالا</P>
                  }
                />
              </Span>
              <Span f={1}>
                <Card2 h={'auto'}
                  coulumn1={
                    <Span jc='center' ai='center' ><Icon name='eye' size={30} /></Span>
                  }
                  coulumn2={
                    <P fs={9} ta='center'>هفت روز فرصت بازگشت کالا</P>
                  }
                />
              </Span>
              <Span f={1}>
                <Card2 h={'auto'}
                  coulumn1={
                    <Span jc='center' ai='center' ><Icon name='eye' size={30} /></Span>
                  }
                  coulumn2={
                    <P fs={9} ta='center'>هفت روز فرصت بازگشت کالا</P>
                  }
                />
              </Span>
              <Span f={1}>
                <Card2 h={'auto'}
                  coulumn1={
                    <Span jc='center' ai='center' ><Icon name='eye' size={30} /></Span>
                  }
                  coulumn2={
                    <P fs={9} ta='center'>هفت روز فرصت بازگشت کالا</P>
                  }
                />
              </Span>

            </Span>
          </Span>

        </Span>








        <Span bgcolor='#fef' >
          <Span><P mt={10} mr={10}>محصولات مشابه</P></Span>

          <Span>

            <ScrollSlider {...p} id='scrollCard' h={250} mb={10} pb={77} ccStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', height: 230 }} >



              <Span w={230} ai='center' jc='center' >
                <Card2 h={200} w={200} bgcolor={'#fff'} sh={{ r: 8, o: .5 }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
                  coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
                  coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
                  coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
                  coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
                />
              </Span>

              <Span w={230} ai='center' jc='center' >
                <Card2 h={200} w={200} bgcolor={'#fff'} sh={{ r: 8, o: .5 }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
                  coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
                  coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
                  coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
                  coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
                />
              </Span>

              <Span w={230} ai='center' jc='center' >
                <Card2 h={200} w={200} bgcolor={'#fff'} sh={{ r: 8, o: .5 }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
                  coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
                  coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
                  coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
                  coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
                />
              </Span>

              <Span w={230} ai='center' jc='center' >
                <Card2 h={200} w={200} bgcolor={'#fff'} sh={{ r: 8, o: .5 }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
                  coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
                  coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
                  coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
                  coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
                />
              </Span>

              <Span w={230} ai='center' jc='center' >
                <Card2 h={200} w={200} bgcolor={'#fff'} sh={{ r: 8, o: .5 }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
                  coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
                  coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
                  coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
                  coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
                />
              </Span>

              <Span w={230} ai='center' jc='center' >
                <Card2 h={200} w={200} bgcolor={'#fff'} sh={{ r: 8, o: .5 }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
                  coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
                  coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
                  coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
                  coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
                />
              </Span>

              <Span w={230} ai='center' jc='center' >
                <Card2 mt={0} h={200} w={200} sh={{ r: 8, o: .5 }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
                  coulumn1={<Span fd='row' jc='space-between' w={'100%'}><P>111</P><P>1111</P></Span>}
                  coulumn2={<Span fd='row' jc='center' w={'100%'}><P> 2222 </P><P> 2222 </P></Span>}
                  coulumn3={<Span fd='row' jc='space-around' w={'100%'}><P>3333</P><P>3333</P></Span>}
                  coulumn4={<Span fd='row' jc='space-evenly' w={'100%'}><P>4444</P><P>4444</P></Span>}
                />
              </Span>

            </ScrollSlider>
          </Span>


        </Span>



        <Span>
          <Span mt={15} mr={12} >
            <P>نظر ها</P>
            <Span />
          </Span>

          <Scroll h={500} >

            <Span flex={1} mv={8} >
              <Card dr='rtl' headerRow={
                <Span fd='row-reverse' w='100%' >
                  <Span  ><P>2/5/33</P></Span>
                  <Span><P> | </P></Span>
                  <Span><P> 4 ستاره </P></Span>
                  <Span mt={-4} ><Icon name='star' color='orange' size={27} /></Span>


                  <Span ml='auto' > <P>محمد جعفر ساتر</P> </Span>

                </Span>
              } body={<P>jj</P>} footerRow={
                <Span fd='row-reverse' >
                  <Span bgcolor='silver' p={7} pv={4} pl={2} w={50} mh={2} br={5} jc='center' ai='center' fd='row' ><Badge bgcolor='gray' text={0} top={8} right={1} scale={.5}  /><A_icon name='dislike2' size={23} /></Span>
                  <Span bgcolor='silver' p={7} pv={4} pl={2} w={50} mh={2} br={5} jc='center' ai='center' fd='row' ><Badge bgcolor='gray' text={1} top={8} right={1} scale={.5} /><A_icon name='like2' size={23} /></Span>
                  <Span bgcolor='silver' p={7} pv={4} mh={2} br={5} jc='center' ai='center' ><P fs={12} >پاسخ »</P></Span>
                </Span>
              } />
            </Span>

          </Scroll>

        </Span>


      </Scroll>

      <Span sh={{ r: 6, o: .5 }} jc='center' ai='center' br={70} bgcolor='#909' h={50} w={50} pos='absolute' b={30} r={40} > <M_icon color='#fff' name='chat' size={30} /></Span>
    </Span>
  )
}

export default ChildBobile


// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
