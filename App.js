import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  Animated
} from 'react-native';




const App = () => {
  const [app, setapp] = useState(9)
  const[tex,settex]=useState(0)
  const[abc,setabc]=useState('-43')
  return (
    // <Nav/>
    <View style={styles.body}>
      <View style={styles.line1}></View>
      <View style={styles.line4}></View>
      <View style={styles.male}><Text style={{ fontWeight: 'bold' }}>Male</Text><Text style={{ fontWeight: 'bold', fontSize: 30, top: -5 }}>M</Text></View>
      <View style={styles.male}><Text style={{ fontWeight: 'bold' }}>Male</Text><Text style={{ fontWeight: 'bold', fontSize: 30, top: -5 }}>M</Text></View>
      <View style={styles.female}><Text style={{ fontWeight: 'bold' }}>Female</Text><Text style={{ fontWeight: 'bold', fontSize: 30, top: -5, left: 20 }}>F</Text></View>
      <View style={styles.female}><Text style={{ fontWeight: 'bold' }}>Female</Text><Text style={{ fontWeight: 'bold', fontSize: 30, top: -5, left: 20 }}>F</Text></View>
      <View style={styles.twentyfour}><Pressable onPress={() => { setapp(4);setabc('245');settex(0) }}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>24</Text><Text style={{ fontSize: 15, left: -15 }}>& Younger</Text></Pressable></View>
      <View style={styles.twentyfive}><Pressable onPress={() => { setapp(5);setabc('295');settex(0) }}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>25</Text><Text style={{ fontSize: 15, left: -15 }}>& Older</Text></Pressable></View>
      <View style={styles.twentyfourtwo}><Pressable onPress={() => { setapp(7);setabc('29');settex(0) }}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>24</Text><Text style={{ fontSize: 15, left: -15 }}>& Younger</Text></Pressable></View>
      <View style={styles.twentyfivetwo}><Pressable onPress={() => { setapp(6);setabc('-18');settex(0) }}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>25</Text><Text style={{ fontSize: 15, left: -15 }}>& Older</Text></Pressable></View>
      <Image source={require('./assets/images/for-you_white-border.png')} style={styles.border} />
      <Image source={require('./assets/images/for-you_backgr.png')} style={styles.main} />
      <View style={styles.line2}></View>
      <View style={styles.line3}></View>
      <View>
        <View style={styles.secondpart}>
          <Pressable onPress={() => { setapp(0);setabc('195');settex(0) }}>
            <Image source={require('./assets/images/icon_vets.png')} style={styles.secondpart} />
            <Text style={{ top: 156, left: 35, fontWeight: 'bold' }}>Vets</Text>
          </Pressable>
        </View>
        <View style={styles.thirdpart}>
          <Pressable onPress={() => { setapp(2);setabc('72');settex(0) }}>
            <Image source={require('./assets/images/icon_family.png')} style={styles.secondpart} />
            <Text style={{ top: 156, left: 35, fontWeight: 'bold' }}>Families</Text>
          </Pressable>
        </View>
        <View style={styles.fourthpart}>
          <Pressable onPress={() => { setapp(3);setabc('115');settex(0) }}>
            <Image source={require('./assets/images/icon_foster_youth.png')} style={styles.secondpart} />
            <Text style={{ top: 156, left: 35, fontWeight: 'bold' }}>Foster Youth & Alumni</Text>
          </Pressable>
        </View>
        <View style={styles.fifthpart}>
          <Pressable onPress={() => { setapp(1);setabc('155');settex(0) }}>
            <Image source={require('./assets/images/icon_immigrant.png')} style={styles.secondpart} />
            <Text style={{ top: 156, fontWeight: 'bold' }}>Immigrants & Refugees</Text>
          </Pressable>
        </View>
      </View>
      <View>
        {
          app == 0 ?
            <Image source={require('./assets/images/red_06.png')} style={{ width: 305, height: 305, position: 'absolute', top: 45.5, left: 30 }} />
            :
            null
        }
      </View>
      <View>
        {
          app == 1 ?
            <Image source={require('./assets/images/red_05.png')} style={{ width: 305, height: 305, position: 'absolute', top: 45, left: 28 }} />
            :
            null
        }
      </View>
      <View>
        {
          app == 2 ?
            <Image source={require('./assets/images/red_03.png')} style={{ width: 305, height: 305, position: 'absolute', top: 46, left: 26 }} />
            :
            null
        }
      </View>
      <View>
        {
          app == 3 ?
            <Image source={require('./assets/images/red_04.png')} style={{ width: 305, height: 306, position: 'absolute', top: 44, left: 26 }} />
            :
            null
        }
      </View>
      <View>
        {
          app == 4 ?
            <Image source={require('./assets/images/red_07.png')} style={{ width: 305, height: 306, position: 'absolute', top: 48, left: 30 }} />
            :
            null
        }
      </View>
      <View>
        {
          app == 5 ?
            <Image source={require('./assets/images/red_08.png')} style={{ width: 305, height: 306, position: 'absolute', top: 48, left: 29 }} />
            :
            null
        }
      </View>
      <View>
        {
          app == 6 ?
            <Image source={require('./assets/images/red_01.png')} style={{ width: 305, height: 306, position: 'absolute', top: 48, left: 26 }} />
            :
            null
        }
      </View>
      <View>
        {
          app == 7 ?
            <Image source={require('./assets/images/red_02.png')} style={{ width: 305, height: 306, position: 'absolute', top: 48, left: 26 }} />
            :
            null
        }
      </View>
 
        <View style={{
          width: 80, height: 80, backgroundColor: '#FF8581', position: 'absolute', top: 155, left: 140, borderWidth: 3, borderColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50, borderBottomLeftRadius: 50, borderBottomRightRadius: 50,
          transform: [{ rotate: `${abc}deg` }]
        }}>
          <View style={{ height: 0, width: 0, backgroundColor: "transparent", borderStyle: "solid", borderLeftWidth: 10, borderRightWidth: 10, borderBottomWidth: 20, borderRightColor: "transparent", borderLeftColor: "transparent", borderBottomColor: "#FF8581", position: 'absolute', top: 0, left: 50, transform: [{ rotate: "280deg" }]}}>
          </View>
        </View>
          {tex ==0 ? <Pressable onPress={()=>{settex(1);setabc('-43')}}><View style={{position:'absolute',left:156,top:186}}><Text style={{color:'white',fontWeight:'bold'}}>Services</Text></View></Pressable>:null}
    </View>


  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#48494A',
    height: '100%'
  },
  border: {
    width: 301,
    height: 303,
    position: 'absolute',
    top: 50,
    left: 30

  },
  main: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: 50,
    left: 30

  },
  line1: {
    width: 147,
    height: 3,
    backgroundColor: 'white',
    position: 'absolute',
    top: 47.5,
    left: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  line2: {
    width: 147,
    height: 3,
    backgroundColor: 'white',
    position: 'absolute',
    top: 350.5,
    left: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  line3: {
    width: 146,
    height: 3,
    backgroundColor: 'white',
    position: 'absolute',
    top: 350.5,
    left: 185,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  line4: {
    width: 146,
    height: 3,
    backgroundColor: 'white',
    position: 'absolute',
    top: 47.5,
    left: 184,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  male: {
    position: 'absolute',
    left: 40,
    top: 55,
    zIndex: 1
  },
  female: {
    position: 'absolute',
    left: 280,
    top: 55,
    zIndex: 1

  },
  twentyfour: {
    position: 'absolute',
    left: 90,
    top: 150,
    zIndex: 1
  },
  twentyfive: {
    position: 'absolute',
    left: 143,
    top: 100,
    zIndex: 1
  },
  twentyfourtwo: {
    position: 'absolute',
    left: 240,
    top: 150,
    zIndex: 1
  },
  twentyfivetwo: {
    position: 'absolute',
    left: 205,
    top: 100,
    zIndex: 1
  },
  secondpart: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 110,
    left: 20,
    zIndex: 1
  },
  thirdpart: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 110,
    left: 240,
    zIndex: 1
  },
  fourthpart: {
    width: 80,
    height: 50,
    position: 'absolute',
    top: 150,
    left: 162,
    zIndex: 1

  },
  fifthpart: {
    width: 80,
    height: 50,
    position: 'absolute',
    top: 150,
    left: 99,
    zIndex: 1

  }

});

export default App;
