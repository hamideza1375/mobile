import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import { Button, Div, Dropdown, Icon, Img, Input, Modal, P, Press, Scroll, Span } from '../Html'
import { context } from '../../utils/context/contexts'

function SearchInput({ array, setarray, Allarray, Register, icon, src, iconPress, sort, setshowFilterModal, showFilterModal }) {


  const p = context()
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
    <Span h={57} pt={2} w={'100%'} as='center' >
      <Span style={[styles.containHead]}>
        {src && <Span /* onClick={iconPress} */ mr={10} ml={5} ><Img w={50} h={45} mt={3} br={4} src={src} /></Span>}
        {icon && <Icon size={26} style={styles.iconHome} name={icon} onPress={iconPress} />}
        <Input fg={1} icon="search" pColor={'#777'} border={[1, '#ccc']} autoCapitalize='none' autoCorrect={false} spellCheck={true} value={textSearch} onChangeText={text => { settextSearch(text.toLowerCase()); searcher(text.toLowerCase()) }} placeholder="جستجو" mh={8} h={'85%'} mt={6} dr='rtl' />
        {sort && <Span style={styles.containAscDesc}>
          <Icon onPress={foodAsc} size={21} style={{ padding: 4 }} name="arrow-down" color='#555' />
          <Span ph={6}></Span>
          <Icon onPress={foodDesc} size={21} style={{ padding: 4 }} name="arrow-up" color='#555' />
        </Span>}

        {Register && <Span style={[styles.containAscDesc, { minWidth: 100, maxWidth: 130 }]}>
          <Span w={'100%'} h={40} br={5} mt={3} bgcolor="#fff" border={[1, 'silver']} jc='center' ai='center' scale={.9} >ورود | ثبت نام</Span>
        </Span>}

      </Span>
      <Modal 
      onClick={() => { p.setshowDropdownFilter(!p.showDropdownFilter); /* setTimeout(() => {p.setshowDropdownFilter(false);}, 200);  */}} 
      style={{ width: '100%', height: 'auto' }} setshow={p.setshowFilterModal} show={p.showFilterModal} >
        <Scroll w='100%' fd='row' ccStyle={{ alignItems: 'center', flexGrow: 1 }} >


          <Span id='1'>
          <Span ai='flex-start' w={270}>
              <Span f={1} mt={15}><P textAlign='right' >قیمت</P></Span>
              <Span w='100%' fd='row'  >
   

          <Dropdown
          onClick={()=>{let arrayId = ['1','2','3','4','5']; arrayId.map((id)=>p.$.id(id) && p.$.id(id).$({zIndex:1}) );p.$.id('1').$({zIndex:10})}}
              show={p.showDropdownFilter}
              setshow={p.setshowDropdownFilter}
              style={{marginTop:'auto'}}
            >
              <Span ph={9}>

              <Span style={{padding:5, borderBottomWidth:1,borderColor:'silver'}} >
              {/* <P onClick={()=>{ p.$input.get('input1FromTextId').setNativeProps({text:'sddcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcs'}) }} fs={12}>زیر 1 ملیون</P > */}
              <P onClick={()=>{ p.$input.get('input1FromTextId').setNativeProps({text:'sddcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcs'}) }} fs={12}>زیر 1 ملیون</P >
              </Span>

              <Span style={{padding:5, borderBottomWidth:1,borderColor:'silver'}} >
              <P fs={12} >از 1 ملیون تا 2 ملیون</P >
              </Span>

              <Span style={{padding:5, borderBottomWidth:1,borderColor:'silver'}} >
              <P fs={12} >از 2 ملیون تا 4 ملیون</P >
              </Span>

              <Span style={{padding:5, borderBottomWidth:1,borderColor:'silver'}} >
              <P fs={12} >از 4 ملیون تا 8 ملیون</P >
              </Span>

              <Span style={{padding:5, borderBottomWidth:1,borderColor:'silver'}} >
              <P fs={12} >از 8 ملیون تا 16 ملیون</P >
              </Span>


              <Span style={{padding:5, borderBottomWidth:1,borderColor:'silver'}} >
              <P fs={12} >از 16 ملیون به بالا</P >
              </Span>

              <Span style={{padding:5}} >
              <P fs={12} >وارد کردن به صورت دستی</P >
              </Span>

              </Span>
            </Dropdown>

{/* //! اگه غیر از عدد چیز دیگه ای وارد کرد به صورت قرمز بنویس فقط عدد وارد کنید */}

                <Input  keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.priceFilter} onChangeText={(text) => { p.setpriceFilter(text) }} />
                <Input $input={p.$input} textId='input1FromTextId' keyboardType='numeric' fs={11} w={100} placeholder='تا' value={p.priceFilterTo} onChangeText={(text) => { p.setpriceFilterTo(text) }} />
                <Span mr={3} ai='center' jc='center' >تومان</Span>
              </Span>
            </Span>
          </Span>


          <Span id='2'>
          <Span ai='flex-start' w={270}>
              <Span f={1} mt={15}><P textAlign='right' >حافظه</P></Span>
              <Span w='100%' fd='row' jc='flex-start' >
          <Dropdown
          onClick={()=>{let arrayId = ['1','2','3','4','5']; arrayId.map((id)=>p.$.id(id) && p.$.id(id).$({zIndex:1}));p.$.id('2').$({zIndex:10})}}
              show={p.showDropdownFilter}
              setshow={p.setshowDropdownFilter}
              style={{marginTop:'auto'}}
            >
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
            </Dropdown>
                <Input keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.sdCardFilter} onChangeText={(text) => { p.setsdCardFilter(text) }} />
                <Input keyboardType='numeric' fs={11} w={100} placeholder='تا' value={p.sdCardFilterTo} onChangeText={(text) => { p.setsdCardFilterTo(text) }} />
                <Span mr={3} ai='center' jc='center' >گیگابایت</Span>
              </Span>
            </Span>
          </Span>

          <Span id='3'>
          <Span ai='flex-start' w={270}>
            <Span f={1} mt={15}><P textAlign='right' >رم</P></Span>
            <Span w='100%' fd='row' >
            <Dropdown
          onClick={()=>{let arrayId = ['1','2','3','4','5']; arrayId.map((id)=>p.$.id(id) && p.$.id(id).$({zIndex:1}));p.$.id('3').$({zIndex:10})}}
              show={p.showDropdownFilter}
              setshow={p.setshowDropdownFilter}
              style={{marginTop:'auto'}}
            >
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
            </Dropdown>
              <Input keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.ramFilter} onChangeText={(text) => { p.setramFilter(text) }} />
              <Input keyboardType='numeric' fs={11} w={100} placeholder='تا' value={p.ramFilterTo} onChangeText={(text) => { p.setramFilterTo(text) }} />
              <Span mr={3} ai='center' jc='center' >گیگابایت</Span>
            </Span>
          </Span>
          </Span>


          <Span id='4'>
          <Span ai='flex-start' w={270}>
            <Span f={1} mt={15}><P textAlign='right' >cpu</P></Span>
            <Span w='100%' fd='row'>
            <Dropdown
          onClick={()=>{let arrayId = ['1','2','3','4','5']; arrayId.map((id)=>p.$.id(id) && p.$.id(id).$({zIndex:1}));p.$.id('4').$({zIndex:10})}}
              show={p.showDropdownFilter}
              setshow={p.setshowDropdownFilter}
              style={{marginTop:'auto'}}
            >
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
            </Dropdown>
              <Input keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.cpuCoreFilter} onChangeText={(text) => { p.setcpuCoreFilter(text) }} />
              <Input keyboardType='numeric' fs={11} w={100} placeholder='تا' value={p.cpuCoreFilterTo} onChangeText={(text) => { p.setcpuCoreFilterTo(text) }} />
              <Span mr={3} ai='center' jc='center' >هسته</Span>
            </Span>
          </Span>
          </Span>


          <Span id='5'>
          <Span ai='flex-start' w={270}>
            <Span f={1} mt={15}><P textAlign='right' >دوربین</P></Span>
            <Span w='100%' fd='row' >
            <Dropdown
          onClick={()=>{let arrayId = ['1','2','3','4','5']; arrayId.map((id)=>p.$.id(id) && p.$.id(id).$({zIndex:1}));p.$.id('5').$({zIndex:10})}}
              show={p.showDropdownFilter}
              setshow={p.setshowDropdownFilter}
              style={{marginTop:'auto'}}
            >
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
              <Span>efefe</Span>
            </Dropdown>
              <Input keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.cameraFilter} onChangeText={(text) => { p.setcameraFilter(text) }} />
              <Input keyboardType='numeric' fs={11} w={100} placeholder='تا' value={p.cameraFilterTo} onChangeText={(text) => { p.setcameraFilterTo(text) }} />
              <Span mr={3} ai='center' jc='center' >مگاپیکسل</Span>
            </Span>
          </Span>
          </Span>

          {/* //! کادر اول رو که وارد میکنه تشخیص بده که کادر دوم رو گزینه هایی که میاره بالا تر از اون باشه */}

          <Span ai='flex-start' w={270} mr={30}>
            <Span f={1} mt={15}><P textAlign='right' >نوع شبکه اینترنت</P></Span>
            <Span fd='row' w={200} jc='center'>
              <Press border={[1, 'silver']} w={60} h={60} br={4} ai='center' jc='center' bgcolor={p.fourG ? '#0de' : 'white'} onClick={() => p.setfourG(!p.fourG)} >4G</Press>
              <Press border={[1, 'silver']} w={60} h={60} br={4} mr={10} ai='center' jc='center' bgcolor={p.fiveG ? '#0de' : 'white'} onClick={() => p.setfiveG(!p.fiveG)} >5G</Press>
            </Span>
          </Span>


          <Span ai='flex-start' w={270} mr={30}>
            <Span fd='row' w={200} jc='center'>
              <Button mt={10} w={100}
                onClick={() => {
                  const filterArray = array.filter((f) =>
                    ((f.price >= p.priceFilter) && (p.priceFilterTo ? (f.price <= p.priceFilterTo) : f.price <= 9999999999999999)) &&
                    ((f.sdCard >= p.sdCardFilter) && (p.sdCardFilterTo ? f.sdCard <= p.sdCardFilterTo : f.sdCard <= 9999999999999999)) &&
                    ((f.ram >= p.ramFilter) && (p.ramFilterTo ? f.ram <= p.ramFilterTo : f.ram <= 9999999999999999)) &&
                    ((f.cpuCore >= p.cpuCoreFilter) && (p.cpuCoreFilterTo ? f.cpuCore <= p.cpuCoreFilterTo : f.cpuCore <= 9999999999999999)) &&
                    ((f.camera >= p.cameraFilter) && (p.cameraFilterTo ? f.camera <= p.cameraFilterTo : f.camera <= 9999999999999999)) &&
                    ((!p.fourG && !p.fiveG) ? f.network : (p.fourG && f.network === '4G') || (p.fiveG && f.network === '5G'))
                  )
                  console.log(filterArray);
                  p.setshowFilterModal(false)
                }}
              >تایید</Button>
            </Span>
          </Span>


          {/* p.setarray(filterArray) */}


        </Scroll>
      </Modal>
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