import React from 'react'
import { Img, Span } from '../Html'

const card2 = (p) => {

  const {coulumn1,coulumn2,coulumn3,coulumn4,h} =p

  return (
    <Span h={h?h:300} w={'90%'} as={'center'} br={4} mt={55} border={[1]} {...p} >

      <Span h={'45%'} >
        <Img style={{height:'100%', borderTopRightRadius:4, borderTopLeftRadius:4}}  src={p.src} />
      </Span>

      <Span h={'54%'} mt={8}>
        {coulumn1 && <Span f={1}>{coulumn1}</Span>}
        {coulumn2 && <Span f={1}>{coulumn2}</Span>}
        {coulumn3 && <Span f={1}>{coulumn3}</Span>}
        {coulumn4 && <Span f={1}>{coulumn4}</Span>}
      </Span>

    </Span>
  )
}

export default card2