import { useState } from 'react';
import { 
    Modal, ModalProps, View, Text, Alert, 
    TouchableOpacity, ActivityIndicator 
} from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';
import * as Clipboard from 'expo-clipboard';

export interface Props extends ModalProps{
    discord: string;
    onClose: () => void;
}

export const AdsMatch = ({discord, onClose,...rest}:Props) => {
    const [isCopping, setIsCopping ] = useState(false);

    const handleCopyDiscordToClipboard = async () => {
        setIsCopping(true);
        await Clipboard.setStringAsync(discord);
        Alert.alert("Discord Copiado!","Usuário copiado para você buscar o usuário no discord.");
        setIsCopping(false);
    }

    return(
        <Modal 
            {...rest}
            animationType="fade"
            transparent
            statusBarTranslucent
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity 
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons 
                            name="close" 
                            size={20} 
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>
                    <View style={styles.contentMain}>
                        <Octicons name="check-circle" size={48} style={styles.checkIcon}/>

                        <Text style={styles.title}>
                            Let's play
                        </Text>
                        <Text style={styles.subTitle}>
                            Agora é só começar a jogar!
                        </Text>

                        <Text style={styles.labelDiscord}>
                            Adicione no Discord
                        </Text>
                        <TouchableOpacity 
                            style={styles.discordButton}
                            onPress={handleCopyDiscordToClipboard}
                            disabled={isCopping}
                        >
                            <Text style={styles.discord}>
                                { isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}