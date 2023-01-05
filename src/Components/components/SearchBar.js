import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Icon, Img, Input, Press, Span } from '../Html'

function SearchInput({ array, Allarray,setarray, Register, navigate, icon, src, navigation, sort }) {


  const [getValueSearch, setgetValueSearch] = useState([])
  const [textSearch, settextSearch] = useState('')


  const foodAsc = () => {
    setarray(array => (array.sort((a, b) => a.price - b.price)))
    console.log(array);
  }


  const foodDesc = () => {
    setarray(array => array.sort((a, b) => b['price'] - a['price']))
    console.log(array);
  }



  useEffect(() => {
    console.log(getValueSearch);
  }, [getValueSearch])


  const searcher = (textSearch) => {
    console.log(textSearch);
    const f = []
    let fd1 = Allarray.filter((f) => f.title.toLowerCase().includes(textSearch))
    f.push(...fd1)
    let fd2 = Allarray.filter((f) => (f.title.toLowerCase().includes(textSearch[0]) && f.title.toLowerCase().includes(textSearch[1])) || (f.title.toLowerCase().includes(textSearch[1]) && f.title.toLowerCase().includes(textSearch[2])) || (f.title.toLowerCase().includes(textSearch[2]) && f.title.toLowerCase().includes(textSearch[3])) || (f.title.toLowerCase().includes(textSearch[3]) && f.title.toLowerCase().includes(textSearch[4])) || (f.title.toLowerCase().includes(textSearch[4]) && f.title.toLowerCase().includes(textSearch[5])) || (f.title.toLowerCase().includes(textSearch[5]) && f.title.toLowerCase().includes(textSearch[6])) || (f.title.toLowerCase().includes(textSearch[6]) && f.title.toLowerCase().includes(textSearch[7])) || (f.title.toLowerCase().includes(textSearch[7]) && f.title.toLowerCase().includes(textSearch[8])) || (f.title.toLowerCase().includes(textSearch[8]) && f.title.toLowerCase().includes(textSearch[9])) || (f.title.toLowerCase().includes(textSearch[9]) && f.title.toLowerCase().includes(textSearch[10])) || (f.title.toLowerCase().includes(textSearch[10]) && f.title.toLowerCase().includes(textSearch[11])))
    for (let i in fd1) {
      for (let n in fd2) {
        if (fd1[i]._id !== fd2[n]._id) {
          let find = f.find((f) => f._id === fd2[n]._id)
          if (!find) { textSearch[1] && f.push(fd2[n]) }
        }
      }
    }
    for (let n in fd2) {
      let find = f.find((f) => f._id === fd2[n]._id)
      if (!find) { textSearch[1] && f.push(fd2[n]) }
    }
    setgetValueSearch(f)

  }





  return (
    <Span h={57} pt={2} w={'100%'} as='center' style={{ maxWidth: '99.9%' }} >
      <Span style={[styles.containHead]}>
        {icon && <Icon size={26} style={styles.iconHome} name={icon} onPress={() => navigation.navigate(navigate)} />}
        {src && <Press onClick={() => navigation.navigate(navigate)} mr={10} ml={5} ><Img w={50} h={45} mt={3} br={4} src={src} /></Press>}
        <Input w={'60%'} fg={1} icon="search" pColor={'#777'} border={[1, '#ccc']} autoCapitalize='none' autoCorrect={false} spellCheck={true} value={textSearch} onChangeText={text => { settextSearch(text.toLowerCase()); searcher(text.toLowerCase()) }} placeholder="جستجو" mh={8} h={'85%'} mt={6} dr='rtl' />
        {sort && <Span style={styles.containAscDesc}>
          <Icon onPress={foodAsc} size={21} style={{ padding: 4 }} name="arrow-down" color='#555' />
          <Span ph={6}></Span>
          <Icon onPress={foodDesc} size={21} style={{ padding: 4 }} name="arrow-up" color='#555' />
        </Span>}

        {Register && <Span style={[styles.containAscDesc, { minWidth: 100, maxWidth: 130 }]}>
          <Span w={'100%'} h={40} br={5} mt={3} bgcolor="#fff" border={[1, 'silver']} jc='center' ai='center' scale={.9} >ورود | ثبت نام</Span>
        </Span>}

      </Span>
    </Span>);
}
export default SearchInput

const styles = StyleSheet.create({
  iconHome: {
    paddingHorizontal: 10,
    textAlign: 'center',
    paddingTop: 10,
    color: '#777',
  },
  containHead: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    minHeight: 55,
    maxHeight: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgb(222, 221, 221)',
    borderTopWidth: 0,
    justifyContent: 'space-around',
    paddingBottom: 7,
  },
  containAscDesc: {
    width: '15%',
    minWidth: 65,
    maxWidth: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 4,
  }

})