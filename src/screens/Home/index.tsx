import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';
import { GameCard, Heading } from '../../components';
import { GAMES } from '../../utils/games';

import logoImg from '../../assets/logo-nlw-esports.png';


export function Home(){
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={logoImg} 
            />
            <Heading
                title="Encontre seu duo!"
                subtitle="Selecione o game que deseja jogar..."
            />
            
            <FlatList 

                data={GAMES}
                keyExtractor={item => item.id}
                renderItem={( item ) => (
                    <GameCard 
                        data={item.item}
                    /> 
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentList}
            />

            

        </View>
    )
}