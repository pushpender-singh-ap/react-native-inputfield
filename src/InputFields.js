import React, { Component, useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export default class InputFields extends Component {

    render() {
        const {
            label,
            editable,
            multiline,
            disabled,
            right,
            ActivityIndicatorShow,
            IonIconsShow, IoniconsName, IoniconsColor, IoniconsSize, IoniconsStyle,
            AntDesignShow, AntDesignName, AntDesignColor, AntDesignSize, AntDesignStyle,
            EntypoShow, EntypoName, EntypoColor, EntypoSize, EntypoStyle,
            EvilIconsShow, EvilIconsName, EvilIconsColor, EvilIconsSize, EvilIconsStyle,
            FeatherShow, FeatherName, FeatherColor, FeatherSize, FeatherStyle,
            FontAwesomeShow, FontAwesomeName, FontAwesomeColor, FontAwesomeSize, FontAwesomeStyle,
            FontAwesome5Show, FontAwesome5Name, FontAwesome5Color, FontAwesome5Size, FontAwesome5Style,
            FontAwesome5ProShow, FontAwesome5ProName, FontAwesome5ProColor, FontAwesome5ProSize, FontAwesome5ProStyle,
            FontistoShow, FontistoName, FontistoColor, FontistoSize, FontistoStyle,
            FoundationShow, FoundationName, FoundationColor, FoundationSize, FoundationStyle,
            MaterialCommunityIconsShow, MaterialCommunityIconsName, MaterialCommunityIconsColor, MaterialCommunityIconsSize, MaterialCommunityIconsStyle,
            MaterialIconsShow, MaterialIconsName, MaterialIconsColor, MaterialIconsSize, MaterialIconsStyle,
            OcticonsShow, OcticonsName, OcticonsColor, OcticonsSize, OcticonsStyle,
            SimpleLineIconsShow, SimpleLineIconsName, SimpleLineIconsColor, SimpleLineIconsSize, SimpleLineIconsStyle,
            ZocialShow, ZocialName, ZocialColor, ZocialSize, ZocialStyle,
            color,
            externalOnPress,
            internalDisable,
            internalOnPress,
            placeholder_label,
            style,
            borderRadius,
            ...props
        } = this.props;

        return (
            <View style={[style, { paddingVertical: 15 }]}>
                {
                    label ? <Text allowFontScaling={false} style={{
                        position: 'absolute',
                        top: hp('0.8%'),
                        fontSize: hp('1.6%'),
                        backgroundColor: colors.white,
                        color: color ? color : colors.black,
                        marginLeft: hp('3%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10,
                        paddingHorizontal: hp('0.3%'),
                        fontFamily: 'Roboto-Regular',
                    }}>{label}</Text> : null
                }
                <TouchableOpacity
                    {...this.props}
                    onPress={externalOnPress}
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    <TextInput
                        {...this.props}
                        editable={editable}
                        placeholder={placeholder_label ? placeholder_label : label}
                        placeholderTextColor={colors.gray80}
                        style={
                            multiline === true ?
                                [styles.MultiLineTextInput, { borderRadius: borderRadius ? borderRadius : hp('5%'), color: color ? color : colors.black, borderColor: color ? color : colors.gray80 }]
                                :
                                [styles.textInput, { borderRadius: borderRadius ? borderRadius : hp('5%'), color: color ? color : colors.black, borderColor: color ? color : colors.gray80, paddingRight: ActivityIndicatorShow ? hp('7%') : hp('1.7%') }]
                        }
                        multiline={multiline}
                        allowFontScaling={false}
                        autoCompleteType="off"
                        autoCorrect={false}
                    />

                    <TouchableOpacity
                        disabled={internalDisable}
                        onPress={externalOnPress ? externalOnPress : internalOnPress}

                        style={{ position: "absolute", right: right ? right : hp('1.5%') }}>

                        {ActivityIndicatorShow && <ActivityIndicator color={colors.primary} size="small" />}

                        {IonIconsShow &&
                            <Ionicons
                                name={IoniconsName}
                                color={IoniconsColor ? IoniconsColor : colors.primary}
                                size={IoniconsSize ? IoniconsSize : hp('3.5%')}
                                style={IoniconsStyle}
                            />
                        }

                        {AntDesignShow &&
                            <AntDesign
                                name={AntDesignName}
                                color={AntDesignColor ? AntDesignColor : colors.primary}
                                size={AntDesignSize ? AntDesignSize : hp('3.5%')}
                                style={AntDesignStyle}
                            />
                        }

                        {EntypoShow &&
                            <Entypo
                                name={EntypoName}
                                color={EntypoColor ? EntypoColor : colors.primary}
                                size={EntypoSize ? EntypoSize : hp('3.5%')}
                                style={EntypoStyle}
                            />
                        }

                        {EvilIconsShow &&
                            <EvilIcons
                                name={EvilIconsName}
                                color={EvilIconsColor ? EvilIconsColor : colors.primary}
                                size={EvilIconsSize ? EvilIconsSize : hp('3.5%')}
                                style={EvilIconsStyle}
                            />
                        }

                        {FeatherShow &&
                            <Feather
                                name={FeatherName}
                                color={FeatherColor ? FeatherColor : colors.primary}
                                size={FeatherSize ? FeatherSize : hp('3.5%')}
                                style={FeatherStyle}
                            />
                        }

                        {FontAwesomeShow &&
                            <FontAwesome
                                name={FontAwesomeName}
                                color={FontAwesomeColor ? FontAwesomeColor : colors.primary}
                                size={FontAwesomeSize ? FontAwesomeSize : hp('3.5%')}
                                style={FontAwesomeStyle}
                            />
                        }

                        {FontAwesome5Show &&
                            <FontAwesome5
                                name={FontAwesome5Name}
                                color={FontAwesome5Color ? FontAwesome5Color : colors.primary}
                                size={FontAwesome5Size ? FontAwesome5Size : hp('3.5%')}
                                style={FontAwesome5Style}
                            />
                        }

                        {FontAwesome5ProShow &&
                            <FontAwesome5Pro
                                name={FontAwesome5ProName}
                                color={FontAwesome5ProColor ? FontAwesome5ProColor : colors.primary}
                                size={FontAwesome5ProSize ? FontAwesome5ProSize : hp('3.5%')}
                                style={FontAwesome5ProStyle}
                            />
                        }

                        {FontistoShow &&
                            <Fontisto
                                name={FontistoName}
                                color={FontistoColor ? FontistoColor : colors.primary}
                                size={FontistoSize ? FontistoSize : hp('3.5%')}
                                style={FontistoStyle}
                            />
                        }

                        {FoundationShow &&
                            <Foundation
                                name={FoundationName}
                                color={FoundationColor ? FoundationColor : colors.primary}
                                size={FoundationSize ? FoundationSize : hp('3.5%')}
                                style={FoundationStyle}
                            />
                        }

                        {MaterialCommunityIconsShow &&
                            <MaterialCommunityIcons
                                name={MaterialCommunityIconsName}
                                color={MaterialCommunityIconsColor ? MaterialCommunityIconsColor : colors.primary}
                                size={MaterialCommunityIconsSize ? MaterialCommunityIconsSize : hp('3.5%')}
                                style={MaterialCommunityIconsStyle}
                            />
                        }

                        {MaterialIconsShow &&
                            <MaterialIcons
                                name={MaterialIconsName}
                                color={MaterialIconsColor ? MaterialIconsColor : colors.primary}
                                size={MaterialIconsSize ? MaterialIconsSize : hp('3.5%')}
                                style={MaterialIconsStyle}
                            />
                        }

                        {OcticonsShow &&
                            <Octicons
                                name={OcticonsName}
                                color={OcticonsColor ? OcticonsColor : colors.primary}
                                size={OcticonsSize ? OcticonsSize : hp('3.5%')}
                                style={OcticonsStyle}
                            />
                        }

                        {SimpleLineIconsShow &&
                            <SimpleLineIcons
                                name={SimpleLineIconsName}
                                color={SimpleLineIconsColor ? SimpleLineIconsColor : colors.primary}
                                size={SimpleLineIconsSize ? SimpleLineIconsSize : hp('3.5%')}
                                style={SimpleLineIconsStyle}
                            />
                        }

                        {ZocialShow &&
                            <Zocial
                                name={ZocialName}
                                color={ZocialColor ? ZocialColor : colors.primary}
                                size={ZocialSize ? ZocialSize : hp('3.5%')}
                                style={ZocialStyle}
                            />
                        }
                    </TouchableOpacity>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: hp('1.7%'),
        fontSize: hp('1.6%'),
        paddingVertical: hp('1.5%'),
        borderWidth: hp('0.1%'),
        paddingLeft: hp('3.3%'),
        fontFamily: 'Roboto-Regular',
    },
    MultiLineTextInput: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: hp('1.7%'),
        fontSize: hp('1.6%'),
        paddingVertical: hp('1.5%'),
        paddingLeft: hp('3.3%'),
        borderWidth: hp('0.1%'),
        fontFamily: 'Roboto-Regular',
        maxHeight: hp('10%')
    }
})