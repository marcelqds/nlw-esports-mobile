import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { AdsInfo } from './AdsInfo';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../../theme';



export interface AdsProps{
    id: string;
    name: string;
    hoursStart:string;
    hoursEnd: string;
    useVoiceChannel:boolean;
    weekDays:string[];
    yearsPlaying: string;
}

interface Props{
    data: AdsProps;
    onConnect: () => void;
}

export const AdsCard = ({data, onConnect}: Props) => {
    let timePlaying = "";
    if(parseInt(data.yearsPlaying) < 1)
        timePlaying = "Menos de 1 ano";
    else if(parseInt(data.yearsPlaying) == 1)
        timePlaying = "1 ano";
    else
        timePlaying = `${data.yearsPlaying} anos`;

    let colorVoiceCall = data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT;
    let voiceCall = data.useVoiceChannel ? "SIM" : "NÃO";

    return(
        <View style={styles.container}>             
            <AdsInfo label='Nome' value={data.name} />
            <AdsInfo label='Tempo de jogo' value={timePlaying} />
            <AdsInfo label='Disponibilidade' value={`${data.weekDays.length} dias \u2022 ${data.hoursStart}-${data.hoursEnd}`} />
            <AdsInfo label='Chamada de áudio?' value={voiceCall} colorValue={colorVoiceCall} />
            
            <TouchableOpacity 
                style={styles.button}
                onPress={onConnect}
            >
                <Ionicons style={ styles.icon} name='game-controller-outline' size={24} />
                <Text style={styles.text}> Conectar</Text>
            </TouchableOpacity>
        </View>
    );
}