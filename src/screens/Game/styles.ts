import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,        
    },
    header:{
        paddingHorizontal: 32,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 28,
        justifyContent: 'space-between'
    },
    logo:{
        width: 72,
        height: 42,
    },
    right:{
        width: 20,
        height:20,
    },
    cover:{
        width: 312,
        height: 160,
        borderRadius:8,
        marginTop: 32,        
        marginHorizontal: 32
    },
    containerList:{
        width:'100%',
    },
    contentList:{
        paddingLeft: 32,
        paddingRight: 64,
        alignItems:'flex-start'
    },
    emptyListText:{
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    },
    emptyListContent:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }




});