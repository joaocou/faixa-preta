import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Container = styled.ImageBackground`
    flex: 1;
    padding: 30px;
    background: #111;

    display: flex;
    justify-content: flex-end;
`

export const Heading = styled.Text`
    width: 280px;
    font-size: 38px;
    line-height: 45px;
    color: #fff;
    font-family: 'Poppins-SemiBold';
`

export const Info = styled(TouchableOpacity)`
    width: 220px;
    margin: 30px 0;
`

export const InfoText = styled.Text`
    font-size: 13px;
    color: #999;
    font-family: 'Roboto-Regular';
`

export const Bold = styled.Text`
    font-family: 'Roboto-Bold';
`

export const Button = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #fff;
    border-radius: 25px;
    height: 50px;
`

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #999;
    text-transform: uppercase;
    font-family: 'Roboto-Bold';
`

export const IconWrapper = styled.View`
    position: absolute;
    right: 20px;
`