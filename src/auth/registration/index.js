import React from 'react';

import { View, Text, StatusBar, TouchableOpacity, Keyboard } from 'react-native';
import TextInputModule from '../../modules/textinput';
import { useForm, Controller } from 'react-hook-form';

const RegistrationScreen = props => {
    // https://disposable.debounce.io/?email=aa942a6e80@mymaily.lol for verifying disposable emails

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: '',
            name: '',
            password: '',
            cnfPassword: ''
        },
        shouldUnregister: true
    });

    const onSubmit = data => {
        Keyboard.dismiss();
        console.log(data);
        props.navigation.navigate('Home')
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
            <View style={{}}>
                <Text style={{ color: '#dddddd', textAlign: 'center', padding: 10, fontSize: 32 }}>
                    New Registration
                </Text>
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
                    name={'name'}
                    placeholder={'Name'}
                    placeholderTextColor={'#dddddd'}
                    style={{ color: '#dddddd', padding: 5 }}
                    parentStyling={{ width: '80%', marginVertical: 5 }}
                    errorStyling={{ color: '#EE4B2B', padding: 5 }}
                    errorColor={'#EE4B2B'}
                    rules={{
                        required: 'Name Is Required',
                        minLength: {
                            value: 3,
                            message: 'Name should not be less than 3 characters'
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
                    parentStyling={{ width: '80%', marginVertical: 5 }}
                    errorStyling={{ color: '#EE4B2B', padding: 5 }}
                    errorColor={'#EE4B2B'}
                    isProtectedInput={true}
                    rules={{
                        required: 'Password Is Required',
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
                            message:
                                'Password should be a combination of uppercase, lowercase, numerics and special characters'
                        }
                    }}
                    isBorderEnabled={true}
                    borderStyling={{ borderRadius: 10, borderWidth: 1, borderColor: '#aaaaaa', padding: 10 }}
                />
                <TextInputModule
                    control={control}
                    error={errors}
                    name={'cnfPassword'}
                    placeholder={'Confirm Password'}
                    placeholderTextColor={'#dddddd'}
                    style={{ color: '#dddddd', padding: 5 }}
                    parentStyling={{ width: '80%', marginVertical: 5 }}
                    errorStyling={{ color: '#EE4B2B', padding: 5 }}
                    errorColor={'#EE4B2B'}
                    isProtectedInput={true}
                    rules={{
                        validate: {
                            isSameAsPassword: data => {
                                return data !== watch('password') ? 'Password do not match' : null;
                            }
                        }
                    }}
                    isBorderEnabled={true}
                    borderStyling={{ borderRadius: 10, borderWidth: 1, borderColor: '#aaaaaa', padding: 10 }}
                />
                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    activeOpacity={0.6}
                    style={{
                        width: '80%',
                        borderRadius: 10,
                        marginVertical: 10,
                        padding: 5,
                        backgroundColor: '#dddddd'
                    }}>
                    <Text
                        style={{ color: '#222222', padding: 10, fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
                        Register
                    </Text>
                </TouchableOpacity>
                <View style={{ width: '80%', alignItems: 'center' }}>
                    <Text style={{ color: '#dddddd' }}>Already a user? Login</Text>
                </View>
            </View>
        </View>
    );
};

export default RegistrationScreen;
