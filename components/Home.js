import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData'
import { SafeAreaView } from 'react-native-safe-area-context';
import profile from '../assets/images/batman.png';
import {FlatList, TouchableOpacity} from 'react-native';

Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {

    const renderDiscoverItem = ({item}) =>{
        return (
            <TouchableOpacity
            onPress={()=> navigation.navigate('Details', {
                item:item,
            })}
            >
                <ImageBackground
                 source={item.image}
                 style={[styles.discoverItem, {marginLeft: item.id === 'discover-1' ? 20 : 0}]}
                 imageStyle={styles.discoverItemImage}
                 >
                     <Text style={styles.discoverItemTitle}>{item.title}</Text>
                     <View style={styles.discoverItemsLocationWrapper}>
                         <Entypo name='location-pin' size={18} color={colors.white}/>
                         <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                     </View>

                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderActivityItem = ({item}) => {
        return (
            <View style={[styles.activityItemWrapper, {marginLeft :item.id === 'activities-1' ? 20 : 0}]}>
                <Image source ={item.image} style={styles.activityItemImage} />
            <Text style={styles.activityItemText}>{item.title}</Text>
        </View>
        )
    }

    const renderLearnMoreItem = ({item}) => {
        return (
            <ImageBackground
            source={item.image}
            style={[styles.learnMoreItem, {marginLeft:item.id === "learnMore-1" ? 20:0}]}
            imageStyle={styles.learnMoreItemImage}
           >
               <Text style={styles.learnMoreItemsText}>{item.title}</Text>
            </ImageBackground>
        )
    }
    return (
        <View style={styles.container}>
           <ScrollView>

               {/* HEADER */}
               <SafeAreaView>
                   <View style={styles.menuWrapper}>
                       <Feather name='menu' size={32} color='black' style={styles.menuIcon} />
                       <Image source={profile} style={styles.profileImage} />
                   </View>
               </SafeAreaView>

               {/* DISCOVER */}
               <View style={styles.discoverWrapper}>
                   <Text style={styles.discoverTitle}> Discover </Text>
                   <View style={styles.discoverWrapperCategories}>
                       <Text style={[styles.discoverCategoryText, {color:colors.orange}]}>All</Text>
                       <Text style={styles.discoverCategoryText}>Destinations</Text>
                       <Text style={styles.discoverCategoryText}>Cities</Text>
                       <Text style={styles.discoverCategoryText}>Experiences</Text>
                   </View>

                   <View style={styles.discoverItemsWrapper}>
                       <FlatList
                       data={discoverData}
                       renderItem={renderDiscoverItem}
                       keyExtractor={(item) => item.id}
                       horizontal
                       showsHorizontalScrollIndicator={false}
                       />
                   </View>
               </View>

               {/*ACTIVITY*/}
               <View style={styles.activitiesWrapper}>
                   <Text style={styles.activitiesTitle}>Activities</Text>
                   <View style={styles.activitiesItemsWrapper}>
                       <FlatList
                       data={activitiesData}
                       renderItem={renderActivityItem}
                       keyExtractor={(item) => item.id}
                       horizontal
                       showsHorizontalScrollIndicator={false}
                       />
                   </View>
               </View>

               {/* LEARN MORE */}
               <View style={styles.learnMoreWrapper}>
                   <Text style={styles.learnMoreTitle}>Learn More</Text>
                   <View style={styles.learnMoreItemsWrapper}>
                       <FlatList
                       data={learnMoreData}
                       renderItem={renderLearnMoreItem}
                       keyExtractor={(item) => item.id}
                       horizontal
                       showsHorizontalScrollIndicator={false}
                       />
                   </View>

               </View>
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        color: colors.white,
    },
    menuWrapper:{
        marginHorizontal:20,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    menuIcon:{

    },
    profileImage:{
        width:52,
        height:52,
        borderRadius:8
    },
    discoverWrapper:{
        
        marginTop:20
    },
    discoverTitle:{
        marginHorizontal:20,
        fontFamily:'Lato-Bold',
        fontSize: 32
    },
    discoverWrapperCategories:{
        marginHorizontal:20,
        flexDirection:'row',
        marginTop:20,
    },
    discoverCategoryText:{
        marginRight:30,
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:colors.grey
    },
    discoverItemsWrapper:{
        paddingVertical:20
    },
    discoverItem:{
        width:170,
        height:250,
        justifyContent:'flex-end',
        paddingHorizontal:10,
        paddingVertical:15,
        marginRight:20,
    },
    discoverItemImage:{
        borderRadius:20,
    },
    discoverItemTitle:{
        fontFamily:'Lato-Bold',
        fontSize: 18,
        color:colors.white,
    },
    discoverItemsLocationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    },
    discoverItemLocationText:{
        marginLeft:5,
        fontFamily:'Lato-Bold',
        fontSize:16,
        color:colors.white,
    },
    activitiesItemsWrapper:{
        paddingVertical:20
    },
    activitiesWrapper:{
        marginTop:10
    },
    activitiesTitle:{
        marginHorizontal:20,
        fontFamily: 'Lato-Bold',
        fontSize:24,
        color: colors.black
    },
    activityItemWrapper:{
        justifyContent:'flex-end',
        alignItems:'center',
        marginRight:20,

    },
    activityItemImage:{
        width:36
    },
    activityItemText:{
        marginTop:5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color:colors.grey
    },
    learnMoreWrapper:{
        marginTop:10
    },
    learnMoreTitle:{
        marginHorizontal:20,
        fontFamily:'Lato-Bold',
        fontSize:24,
        color:colors.black,
    },
    learnMoreItemsWrapper:{
        paddingVertical:20
    },
    learnMoreItem:{
        width:170,
        height:180,
        justifyContent:'flex-end',
        marginRight:20
    },
    learnMoreItemImage:{
        borderRadius:20
    },
    learnMoreItemsText:{
        fontFamily:'Lato-Bold',
        fontSize:18,
        color:colors.white,
        marginHorizontal:10,
        marginVertical:20
    }
    
})

export default Home;