import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, ImageBackground, TextInput, TouchableWithoutFeedback, FlatList} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-anchor-carousel';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'
   

const Home = () => {

  const [background,setBackground] = useState({
    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    name: 'Avengers: End Game',
    stat: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  })

  const [gallery, setgallery] = useState([
 
    { image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game',released: '2019 ‧ Action/Sci-fi ‧ 3h 2m' ,key: '1' , desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.' },
    {
    image:'data:image/jpeg;base64,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', title: 'Frozen II',released: '2019 ‧ Animation/Musical ‧ 1h 43m',  key: '2' , desc: 'Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled.' },
    { image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', title: 'Alita: Battle Angel',released: '2019 ‧ Action/Sci-fi ‧ 2h 2m',key: '3', desc: 'Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.' },
    { image:'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man',released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '4', desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.' },
    { image:'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3',released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '5', desc: 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.' },
  ]);




  const [list, setList] = useState([
    { image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD', key: '1' },
    { image:'https://m.media-amazon.com/images/I/71evgDWqu9L.jpg',key: '2' },
    { image:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg', key: '3'},
    { image:'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/spies-in-disguise-et00072276-10-03-2018-03-41-39.jpg', key: '4', },
    { image:'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg', key: '5' },
  ]);

  const carouselRef = useRef(null);

  const {width, height} = Dimensions.get('window')

  const routeRecents = () => {
      props.navigation.navigate('Recents')
  }
  const renderItem = ({item, index}) => {
    return (
    <View>
          <TouchableOpacity
            onPress={() => 
                { 
                carouselRef.current.scrollToIndex(index);
                setBackground({
                    uri: item.image,
                    name: item.title,
                    stat: item.released,
                    desc: item.desc
                })
                }
            }
      >
        <Image source={{uri: item.image}} style={styles.carouselImage} />
        <Text style={styles.carouselText}>{item.title}</Text>
        <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} />
      </TouchableOpacity>
     
    </View>
    
    )
  }


  return (
    <ScrollView style={{backgroundColor: '#000'}} blurRadius={100}>
        
        <StatusBar backgroundColor='#000' barStyle='light-content' />

        <View style={styles.carouselContentContainer}>
          <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
            <ImageBackground source={{ uri: background.uri  }} style={styles.ImageBg} blurRadius={10}>
              <View style={styles.SearchboxContainer}>
                <TextInput
                placeholder='Search Movies'
                placeholderTextColor='#666'
                style={styles.Searchbox}
                >
              </TextInput>
                <Feather name='search' size={22} color='#666' style={styles.SearchboxIcon} />
              </View>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical:     10 }}>Top Picks this Week</Text>
            <View style={styles.carouselContainerView}>
                <Carousel style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20} 
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
                //pagingEnable={false}
                //minScrollDistance={20}
            />
      </View>


      <View style={styles.movieInfoContainer}>
        <View style={{ justifyContent: 'center'}}>
            <Text style={styles.movieName}>{background.name}</Text>
            <Text style={styles.movieStat}>{background.stat}</Text>
        </View>
        <TouchableOpacity style={styles.playIconContainer}>
            <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 14, marginTop: 14}}>
          <Text style={{color: 'white', opacity: 0.8, lineHeight: 20}}>
              {background.desc}
          </Text>
      </View>
   </ImageBackground>
 </View>
</View>
    <View style={{marginHorizontal: 14}}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold',marginBottom: 24}}>Continue Watching</Text>
        <ImageBackground
        style={{height: 250, width: '100%', backgroundColor: '000'}}
        resizeMode='cover'
        source={{uri: 'https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon'
    }}
        >

        <Text style={{color: 'white', padding: 14}}>How to Train Your Dragon: The Hidden World</Text>

          <TouchableOpacity style={{...styles.playIconContainer, position: 'absolute',top: '40%', right: '40%'}}>
            <FontAwesome5  name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
        </TouchableOpacity>
        {/* <View style={{height: 4, backgroundColor: '#666', position: 'absolute', bottom: 0, width: '100%'}}></View>
        <View style={{height: 4, borderRadius: 10, backgroundColor: '#02ad94', position: 'absolute', bottom: 0, width: '40%'}}></View> */}
        </ImageBackground>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom: 24, marginTop: 36}}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold',}}>My List</Text>
        <Text style={{color: '#02ad94', fontSize: 14, fontWeight: 'normal'}}>View All</Text>
        </View>
      
        <FlatList 
        style={{marginBottom: 30}}
        horizontal={true}
        data={list}
        renderItem={({item}) => {
          return(
            <TouchableOpacity style={{marginRight: 20}}>
              <Image source={{uri: item.image}} style={{height: 300, width: 200}} />
              <View style={{position: "absolute", height: 5, width: '100%', backgroundColor: '#02ad94',opacity: 0.8}}></View>
              <FontAwesome5  name='play' size={38} color='#fff' style={{position: 'absolute',top: '45%', left: '45%',opacity: 0.9}} />
            </TouchableOpacity>
          )
        }}
        />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({


// CAROUSEL STYLES

carouselImage: {
    width: 200, 
    height: 320, 
    borderRadius: 10, 
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
},
carouselText: {
    paddingLeft: 14,
    color: 'white', 
    position: 'absolute', 
    bottom: 10, 
    left: 2, 
    fontWeight: 'bold'
},
carouselIcon: {
    position: 'absolute', 
    top: 15, 
    right: 15
},
carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },
SearchboxContainer: {
    flexDirection: 'row',
    marginVertical: 20, 
    width: '95%',
    alignSelf: 'center', 
    backgroundColor: '#fff', 
    elevation: 10,
    borderRadius: 4,
  },
  Searchbox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  SearchboxIcon: {
    position: 'absolute', 
    right: 20, 
    top: 14
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',  
  },
  carouselContainerView: {
    width: '100%',
    height:350 ,
    justifyContent: 'center',
    alignItems: 'center',
},
  carousel: {
    flex:1,
    overflow: 'visible',
} ,
movieInfoContainer: {
  flexDirection: 'row', 
  marginTop: 16, 
  justifyContent: 'space-between', 
  width: Dimensions.get('window').width - 14
},
movieName: {
  paddingLeft: 14,
  color: 'white', 
  fontWeight: 'bold', 
  fontSize: 20,
  marginBottom: 6
},
movieStat: {
  paddingLeft: 14,
  color: 'white', 
  fontWeight: 'bold', 
  fontSize: 14, 
  opacity: 0.8
},
playIconContainer: {
  backgroundColor: '#212121',
  padding: 18,
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 25,
  borderWidth: 4,
  borderColor: 'rgba(2, 173, 148, 0.2)',
  marginBottom: 14
}
});

export default Home;