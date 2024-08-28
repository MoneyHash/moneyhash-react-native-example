import {Button, StyleSheet, Text, View} from 'react-native';
import {
    LogLevel,
    MoneyHashSDKBuilder,
    SecureCardForm,
    SecureTextField,
    useSecureCardForm,
} from '@moneyhash/reactnative-sdk';

const moneyHashSDK = MoneyHashSDKBuilder.build();
moneyHashSDK.setLogLevel(LogLevel.VERBOSE);

export default function App() {
    const {cardFormRef, collect, isValid, onFormValidityChange} =
        useSecureCardForm();

    return (
        <View style={styles.container}>
            <SecureCardForm
                ref={cardFormRef}
                onFormValidityChange={onFormValidityChange}
            >
                <SecureTextField
                    name="cardHolderName"
                    style={({isFocused, isError}) => [
                        styles.input,
                        isFocused && styles.inputFocused,
                        isError && styles.inputError,
                    ]}
                    placeholder="John Doe"
                    // onChange={() => {
                    //   console.log('Change');
                    // }}
                    // onFocus={() => {
                    //   console.log('Focus')
                    // }}
                    // onBlur={() => {
                    //   console.log('Blur');
                    // }}
                    // onErrorChange={({ isValid, errorMessage }) => {
                    //   console.log({ isValid, errorMessage });
                    // }}
                />
                <SecureTextField
                    name="cardNumber"
                    style={({isFocused, isError}) => [
                        styles.input,
                        isFocused && styles.inputFocused,
                        isError && styles.inputError,
                    ]}
                    placeholder="#### #### #### ####"
                    onCardBrandChange={(cardInfo) => {
                        console.log('cardBrand', cardInfo);
                    }}
                />
                <View style={styles.row}>
                    <SecureTextField
                        name="expiryMonth"
                        style={({isFocused, isError}) => [
                            styles.input,
                            isFocused && styles.inputFocused,
                            isError && styles.inputError,
                            {flex: 1},
                        ]}
                        placeholder="MM"
                    />
                    <SecureTextField
                        name="expiryYear"
                        style={({isFocused, isError}) => [
                            styles.input,
                            isFocused && styles.inputFocused,
                            isError && styles.inputError,
                            {flex: 1},
                        ]}
                        placeholder="YY"
                    />
                    <SecureTextField
                        name="cvv"
                        style={({isFocused, isError}) => [
                            styles.input,
                            isFocused && styles.inputFocused,
                            isError && styles.inputError,
                            {flex: 2},
                        ]}
                        placeholder="***"
                    />
                </View>
            </SecureCardForm>
            <Text>Valid {String(isValid)}</Text>
            <Button
                title="Submit"
                onPress={async () => {
                    const vaultData = await collect({
                        intentId: 'Your intent id goes here',
                        accessToken:
                            'FormFields.tokenizeCardInfo.accessToken should go here, it will coming from the intent state',
                        shouldSaveCard: false,
                    });

                    console.log('vaultData', {vaultData});
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        gap: 8,
    },
    row: {display: 'flex', flexDirection: 'row', gap: 8},
    input: {
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
    },
    inputFocused: {
        borderColor: 'blue',
    },
    inputError: {
        borderColor: 'red',
    },
});
