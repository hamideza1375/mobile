import React, { useState } from 'react'
import { ScrollHorizontal } from '../Html'

var count = 150,
  interval,
  width,
  das = [],
  scroll2 = true

function ScrollSlider(p) {

  const [scroll, setscroll] = useState(0)
  const [scrollWidth, setscrollWidth] = useState(0)

  const open = () => {
    if (scroll2) {
      { p.$ && p.$.id('scroll2').scrollTo({ x: count, y: 0, animated: true }); }
      count += 150
    }
  };

  if(scrollWidth && scroll >= scrollWidth){clearInterval(interval)} 
  // console.log(scroll ,scrollWidth)


  return (
    <>
      <ScrollHorizontal
        onLayout={(e) => { setscrollWidth(e.nativeEvent.layout.width);width = p.width; interval = setInterval(sum, 4000); function sum() { open(); } }}
        scrollEventThrottle={0}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        contentInset={{ top: 0 }}
        onScroll={(e) => { setscroll(e.nativeEvent.contentOffset.x) }}
        onMoveShouldSetResponder={(e) => {
          scroll2 = false
          if (das.length > 2) das = []
          das.push(e.nativeEvent.pageX)
          if (das[0] > das[1]) p.$.id('scroll2').scrollTo({ x: scroll + 100, y: 0 })
          if (das[0] < das[1]) p.$.id('scroll2').scrollTo({ x: scroll - 100, y: 0 })
        }} dir='ltr' id='scroll2'

        style={{ overflow: 'auto', height: 150, width: p.width - 4, marginTop: 2, alignSelf: 'center', borderRadius: 5, }} >
        {p.children}
      </ScrollHorizontal>
    </>
  )
}

export default ScrollSlider

