import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, View, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {Entypo} from '@expo/vector-icons';

import { AdsCard, Background, Heading } from '../../components';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';

export const Game = () =>{
    const route = useRoute();
    const game = route.params as GameParams;
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }
    const [ads, setAds] = useState();

    useEffect(() => {
        fetch(`http://192.168.1.107:3200/game/${id}/ads`)
        .then(response => response.json())
        .then(data => {
            setAds(data);
        });
    },[]);

    return(
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={handleGoBack}
                    >
                        <Entypo name="chevron-thin-left"
                        color={THEME.COLORS.CAPTION_300}
                        size={20} />
                        
                    </TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={logoImg}
                        resizeMode='cover'
                    />

                    <View style={styles.right}></View>
                </View>
                <Image 
                    style={styles.cover} 
                    source={{ uri: game.bannerUrl }}
                    resizeMode='cover'
                />

                <Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />

                <AdsCard />

            </SafeAreaView>
        </Background>
    );
}