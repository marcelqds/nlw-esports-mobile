import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container:{
        width: 200,
        // height: 292,
        backgroundColor:THEME.COLORS.SHAPE,
        borderRadius: 8,
        padding:20,
        marginRight:16
    },
    button:{
        width: '100%',
        height:36,
        backgroundColor: THEME.COLORS.PRIMARY,        
        borderRadius: 6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',        
    },
    icon:{
        color: THEME.COLORS.TEXT,
        marginRight:8
    },
    text:{        
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM
    }

});