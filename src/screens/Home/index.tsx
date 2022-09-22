import { useEffect, useState } from 'react';
import { Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { GameCard, Heading, GameCardProps, Background } from '../../components';
import { GAMES } from '../../utils/games';

import logoImg from '../../assets/logo-nlw-esports.png';

export function Home(){
    const [games, setGames ] = useState<GameCardProps[]|[]>();

    const navigation = useNavigation();

    function handleOpenGame({id, title, bannerUrl}: GameCardProps){
        navigation.navigate('game',{id, title, bannerUrl});
    }

    useEffect(() => {
        fetch('http://192.168.1.107:3200/game')
        .then(response => response.json())
        .then(data => {
            setGames(data);
        });
    },[]);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image 
                    style={styles.logo}
                    source={logoImg} 
                />
                <ScrollView>
                    <Heading
                        title="Encontre seu duo!"
                        subtitle="Selecione o game que deseja jogar..."
                    />
                    
                    <FlatList 

                        data={games}
                        keyExtractor={item => item.id}
                        renderItem={( {item} ) => (
                            <GameCard 
                                data={item}
                                onPress={() => handleOpenGame(item)}
                            /> 
                        )}
                        
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.contentList}
                    />
                </ScrollView>
            </SafeAreaView>
        </Background>
    )
}