import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

const TextInputModule = props => {
    const {
        control,
        error,
        name,
        parentStyling,
        style,
        placeholder,
        placeholderTextColor,
        rules,
        errorStyling,
        isProtectedInput
    } = props;
    return (
        <View style={parentStyling}>
            <View>
                <Controller
                    control={control}
                    rules={rules}
                    render={({ field: { onChange, onBlur, value, ref }, fieldState: { isDirty, invalid } }) => (
                        <TextInput
                            style={[
                                style,
                                props?.isBorderEnabled ? props?.borderStyling : null,
                                !invalid ? (!isDirty ? null : { borderColor: 'green' }) : { borderColor: '#EE4B2B' }
                            ]}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderTextColor}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            ref={ref}
                            secureTextEntry={isProtectedInput}
                        />
                    )}
                    name={name}
                />
            </View>
            {error?.[name] ? <Text style={errorStyling}>{error?.[name].message}</Text> : null}
        </View>
    );
};

export default TextInputModule;
