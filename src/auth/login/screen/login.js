import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import TextInputModule from '../../../modules/textinput';

const LoginScreen = props => {
    const { loginData, setUserDataForLogin } = props;
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        shouldUnregister: true
    });
    const onSubmit = data => {
        Keyboard.dismiss();
        console.log(data);
        props.navigation.navigate('Home')
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
            <View style={{}}>
                <Text style={{ color: '#dddddd', textAlign: 'center', padding: 10, fontSize: 32 }}>Login</Text>
            </View>
            <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInputModule
                    control={control}
                    error={errors}
                    name={'email'}
                    placeholder={'Email Id'}
                    placeholderTextColor={'#dddddd'}
                    style={{ color: '#dddddd', padding: 5 }}
                    parentStyling={{ width: '80%', marginVertical: 5 }}
                    errorStyling={{ color: '#EE4B2B', padding: 5 }}
                    errorColor={'#EE4B2B'}
                    rules={{
                        required: 'Email Is Required',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email'
                        }
                    }}
                    isBorderEnabled={true}
                    borderStyling={{ borderRadius: 10, borderWidth: 1, borderColor: '#aaaaaa', padding: 10 }}
                />
                <TextInputModule
                    control={control}
                    error={errors}
                    name={'password'}
                    placeholder={'Password'}
                    placeholderTextColor={'#dddddd'}
                    style={{ color: '#dddddd', padding: 5 }}
                    errorStyling={{ color: '#EE4B2B', padding: 5 }}
                    parentStyling={{ width: '80%', marginVertical: 5, alignSelf: 'center' }}
                    isBorderEnabled={true}
                    borderStyling={{ borderRadius: 10, borderWidth: 1, borderColor: '#aaaaaa', padding: 10 }}
                    rules={{
                        required: 'Password Is Required',
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
                            message:
                                'Password should be a combination of uppercase, lowercase, numerics and special characters'
                        }
                    }}
                />
                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    activeOpacity={0.6}
                    style={{
                        width: '80%',
                        borderRadius: 10,
                        marginVertical: 10,
                        padding: 5,
                        backgroundColor: '#dddddd',
                        alignSelf: 'center'
                    }}>
                    <Text
                        style={{ color: '#222222', padding: 10, fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#dddddd' }}>Don't Have an account? Register Now</Text>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
