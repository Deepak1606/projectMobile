import React, {useEffect} from "react";

import { View, Text, Alert } from "react-native";
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads';

const HomeScreen = (props) => {
    const {navigation} = props
    // const { isLoaded, isClosed, load, show } = useInterstitialAd(TestIds.INTERSTITIAL, {
    //     requestNonPersonalizedAdsOnly: true,
    //   });
    
    //   useEffect(() => {
    //     // Start loading the interstitial straight away
    //     load();
    //   }, [load, isClosed]);
    
    //   useEffect(() => {
    //     if (isClosed) {
    //       // Action after the ad is closed
    //       console.log('Ad Closed')
    //     }
    //     if(isLoaded) {
    //         Alert.alert('','Time for Ads',[{
    //             text: 'Show Ads',
    //             onPress: () => show()
    //         }])
    //     }
    //   }, [isClosed, navigation, isLoaded]);

    return (
        <View style={{flex:1, backgroundColor:'#000000'}}>
            <Text>Home Screen View</Text>
        </View>
    )
}

export default HomeScreen