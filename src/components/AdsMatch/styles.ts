import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.OVERLAY
    },
    content:{
        width: 311,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
    },
    closeIcon:{
        alignSelf: 'flex-end',
        margin: 16
    },
    contentMain:{
        alignItems: 'center',
        marginHorizontal:40,
        marginBottom:32        
    },    
    checkIcon:{
        color: THEME.COLORS.SUCCESS,
        marginBottom:24,        
    },
    title:{
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.LG,
        fontFamily: THEME.FONT_FAMILY.BLACK,
        
    },
    subTitle:{
        color: THEME.COLORS.CAPTION_400,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        marginBottom:24
    },
    labelDiscord:{
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,        
    },
    discordButton:{
        width: '100%',
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4,
        padding:12
    },
    discord:{        
        color: THEME.COLORS.CAPTION_200,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.ROBOTO
    }
});