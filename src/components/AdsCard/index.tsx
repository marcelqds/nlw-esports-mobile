import { View } from 'react-native';
import { styles } from './styles';
import { AdsInfo } from './AdsInfo';

export const AdsCard = () => {
    return(
        <View style={styles.container}>
            <AdsInfo label='Nome' value="Marcelo Queiroz" />
            <AdsInfo label='Nome' value="Marcelo Queiroz" />
                        
        </View>
    );
}