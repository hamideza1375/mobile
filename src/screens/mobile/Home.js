import React, { useRef, useState } from 'react'
import { Div, Img, ScrollHorizontal, Span, Button, Scroll, Icon, M_icon } from '../../Components/Html'

var count = 1,
  interval,
  width

function Home(p) {

  const open = () => {
    p.$ && p.$.id('scroll').scrollTo({ x: p.width * count, y: 0, animated: true });
    count += 1
  };

  const right = () => {
    if(count !== 0) count = count - 1
    p.$ && p.$.id('scroll').scrollTo({ x: p.width * count, y: 0, animated: true });
  };

  const left = () => {
    if(count !== 8) count += 1
    p.$ && p.$.id('scroll').scrollTo({ x: p.width * count, y: 0, animated: true });
  };


  if (interval && p.width !== width) {
    clearInterval(interval)
  }
  return (
    <Span>

      <Span>
        <ScrollHorizontal dir='ltr' id='scroll' onLayout={() => {
          width = p.width
          interval = setInterval(sum, 6000);
          function sum() {
            open()
            if (count === 8) count = 0
            if (p.width !== width) {
              clearInterval(interval)
            }
          }
        }} style={{ height: 260, overflow: 'hidden', flexWrap: 'wrap' }} >
          <Img w={p.width} h={300} src={require('../../assets/images/a1.jpg')} />
          <Img w={p.width} h={300} src={require('../../assets/images/a3.jpg')} />
          <Img w={p.width} h={300} src={require('../../assets/images/a1.jpg')} />
          <Img w={p.width} h={300} src={require('../../assets/images/a2.jpg')} />
          <Img w={p.width} h={300} src={require('../../assets/images/a1.jpg')} />
          <Img w={p.width} h={300} src={require('../../assets/images/a3.jpg')} />
          <Img w={p.width} h={300} src={require('../../assets/images/a1.jpg')} />
          <Img w={p.width} h={300} src={require('../../assets/images/a2.jpg')} />


        </ScrollHorizontal>
        <M_icon onClick={left} size={30} name="arrow-back-ios" style={{ position: 'absolute', zIndex: 10, left: 10, top: 130, color: '#222' }} />
        <M_icon onClick={right} size={30} name="arrow-forward-ios" style={{ position: 'absolute', zIndex: 10, right: 10, top: 130, color: '#222' }} />
      </Span>


      <Span></Span>
      <Span></Span>
    </Span>
  )


}

export default Home

