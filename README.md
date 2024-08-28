# How to Use MoneyHash V2 React Native

Welcome to the MoneyHash SDK documentation for React Native! This guide provides an overview of the core functionalities of the MoneyHash SDK, including intent states, API methods, and models.

---

### Intent States and Corresponding Actions

Here’s a summary of the different intent states defined in the React Native SDK and the actions associated with them:

| State                              | Action                                                                                                                                                                                                                                                              |
| :--------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **MethodSelection**                | [Handle this state](#steps-to-handle-method-selection) by rendering the payment methods provided in `methods`. After user selection, proceed with the selected method by calling [`moneyHashSDK.proceedWithMethod`](./docs/APIs.md#6-proceed-with-selected-method). |
| **FormFields**                     | [Handle this state](#handling-the-formfields-state) by rendering form fields from `billingFields`, `shippingFields`, and `tokenizeCardInfo`. Submit the completed data using [`moneyHashSDK.submitForm`](./docs/APIs.md#7-submit-form).                             |
| **UrlToRender**                    | Use the [`moneyHashSDK.renderForm`](./docs/APIs.md#1-render-moneyhash-embed-form) to display the embed based on the URL provided.                                                                                                                                   |
| **SavedCardCVV**                   | Render a CVV input field using `cvvField`. Optionally, display card information from [`cardTokenData`](./docs/Models.md#12-cardtokendata). Submit the CVV using [`moneyHashSDK.submitCardCVV`](./docs/APIs.md#8-submit-card-cvv).                                   |
| **IntentForm**                     | Display the MoneyHash embed form using [`moneyHashSDK.renderForm`](./docs/APIs.md#1-render-moneyhash-embed-form).                                                                                                                                                   |
| **IntentProcessed**                | Render a success confirmation UI indicating the payment or payout completion with provided intent details.                                                                                                                                                          |
| **TransactionWaitingUserAction**   | Show a UI element indicating the transaction awaits user action. If available, show any external action message required from `Transaction`.                                                                                                                        |
| **TransactionFailed**              | Display a UI element indicating transaction failure. If `recommendedMethods` are provided, show these as alternative options for the user to retry the payment or payout.                                                                                           |
| **Expired**                        | Show a message indicating that the intent has expired.                                                                                                                                                                                                              |
| **Closed**                         | Show a message indicating that the intent has been closed and no further actions can be taken.                                                                                                                                                                      |

---

### How to Handle Method Selection

Handling method selection is a crucial part of integrating the MoneyHash SDK. This process involves rendering available payment methods and managing the user's choice. Here’s how you can handle method selection effectively:

#### Steps to Handle Method Selection

1. **Display Payment Methods**:
   - When the SDK state is `MethodSelection`, extract the `methods` object which contains the available payment options for the intent.
   - Use your UI components to render these payment methods in a list or grid format, allowing the user to choose one.

2. **Capture User Selection**:
   - Implement an interactive element for each payment method. When a user selects a method, capture this selection and prepare to proceed with that method.

3. **Proceed with the Selected Method**:
   - Use the [`moneyHashSDK.proceedWithMethod`](./docs/APIs.md#6-proceed-with-selected-method) API call to initiate the payment process with the selected method.
   - Pass the necessary parameters, such as `intentId`, `intentType`, `selectedMethodId`, and `methodType` to this function. Optionally, include any `methodMetaData` if required by the payment process.

#### Example Implementation

Here’s an example of how you might implement this in your React Native application:

```typescript
moneyHash
  .proceedWithMethod(
    'Intent id is here',
    IntentType.Payment,
    'Selected Method id is here',
    MethodType.PaymentMethod,
    new MethodMetaData('CVV can be here') // Optional and will be considered only in case of saved card
  )
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

---

### Handling the `FormFields` State

When handling the `FormFields` state in MoneyHash, you will deal with two primary scenarios: managing billing or shipping data and handling card tokenization. These scenarios are broken down into steps for clarity.

#### Handling Billing or Shipping Data

1. **Rendering Input Fields**:
   - Use `InputField` data to render form fields. Each field type corresponds to an attribute like name, address, etc., and comes with specific properties to guide the rendering.

2. **Collecting User Input**:
   - Capture input from these fields in the form of a map where the key is the field name and the value is the user input.

Example of handling billing data:

```typescript
const billingData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com"
};
```

---

### Handling Card Tokenization

Card tokenization securely captures sensitive card information and converts it into a token that can be safely stored and transmitted. Below is an example approach for handling card tokenization in React Native.

#### Example Implementation

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  SecureCardForm,
  SecureTextField,
  useSecureCardForm
} from 'moneyhash-react-native-sdk';

export default function App() {
  const { cardFormRef, collect, isValid, onFormValidityChange } = useSecureCardForm();

  return (
    <View style={styles.container}>
      <SecureCardForm ref={cardFormRef} onFormValidityChange={onFormValidityChange}>
        <SecureTextField
          name="cardHolderName"
          style={({ isFocused, isError }) => [
            styles.input,
            isFocused && styles.inputFocused,
            isError && styles.inputError,
          ]}
          placeholder="John Doe"
        />
        <SecureTextField
          name="cardNumber"
          style={({ isFocused, isError }) => [
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
            style={({ isFocused, isError }) => [
              styles.input,
              isFocused && styles.inputFocused,
              isError && styles.inputError,
              { flex: 1 },
            ]}
            placeholder="MM"
          />
          <SecureTextField
            name="expiryYear"
            style={({ isFocused, isError }) => [
              styles.input,
              isFocused && styles.inputFocused,
              isError && styles.inputError,
              { flex: 1 },
            ]}
            placeholder="YY"
          />
          <SecureTextField
            name="cvv"
            style={({ isFocused, isError }) => [
              styles.input,
              isFocused && styles.inputFocused,
              isError && styles.inputError,
              { flex: 2 },
            ]}
            placeholder="***"
          />
        </View>
      </SecureCardForm>
      <Button
        title="Submit"
        onPress={async () => {
          const vaultData = await collect({
            intentId: 'IntentID',
            accessToken:
              'Access Tocken',
            shouldSaveCard: true  // or false,
          });

          console.log('vaultData', vaultData);

          const intentDetails = await moneyHashSDK.submitForm(
            'IntentID',
            'METHOD_ID',
            {}, // Billing Data Record
            {}, // Shipping Data Record
            vaultData,
          );

          console.log('intentDetails', intentDetails);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 4,
  },
  inputFocused: {
    borderColor: '#007BFF',
  },
  inputError: {
    borderColor: '#FF0000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
```

#### SecuredTextField Events

You can listen to different text field event like when the text field
- Changed `onChange`
- Focused `onFocus`
- Blured `onBlur`
- Error Changed `onErrorChange`
- Card Brand Change (Available on cardNumber field only) `onCardBrandChange`

```typescript
<SecureTextField
  name="cardNumber"
  style={({ isFocused, isError }) => [
    styles.input,
    isFocused && styles.inputFocused,
    isError && styles.inputError,
  ]}
  placeholder="#### #### #### ####"
  onChange={() => {
    console.log('Change');
  }}
  onFocus={() => {
    console.log('Focus');
  }}
  onBlur={() => {
    console.log('Blur');
  }}
  onErrorChange={({ isValid, errorMessage }) => {
    console.log({ isValid, errorMessage });
  }}
  onCardBrandChange={(cardInfo) => { // available on CardNumber Only
    console.log('cardBrand', cardInfo);
  }}
/>
```

#### Collecting the Card Data

Once the card form is rendered and filled out by the user, you can collect and tokenize the card data.

```typescript
const vaultData = await collect({
  intentId: 'IntentID',
  accessToken: 'Access Tocken',
  shouldSaveCard: true  // or false,
});

console.log('vaultData', vaultData);
```


---

### Updating the Fees

In some scenarios, you may need to update the fees associated with a particular intent. Here’s how you can do it using the MoneyHash SDK in React Native:

#### Example Implementation

```typescript
const feeItems: FeeItem[] = [
  new FeeItem(
    new Map<Language, string>([
      [Language.ENGLISH, "Service Fee"],
      [Language.ARABIC, "رسوم الخدمة"]
    ]),
    "2"
  ),
  new FeeItem(
    new Map<Language, string>([
      [Language.ENGLISH, "Processing Fee"],
      [Language.ARABIC, "رسوم المعالجة"]
    ]),
    "5"
  ),
  new FeeItem(
    new Map<Language, string>([
      [Language.ENGLISH, "Delivery Fee"],
      [Language.ARABIC, "رسوم التوصيل"]
    ]),
    "6"
  )
];

try {
  const feesData = await moneyHashSDK.updateFees('ZpmnoP9', feeItems);
  console.log("Fees updated successfully:", feesData);
} catch (error) {
  console.error("Error updating fees:", error);
}
```

This example demonstrates how to update multiple fees associated with an intent by specifying the fee names and

amounts in different languages.

---

### Updating the Discount

You can also update the discount associated with an intent using the MoneyHash SDK. Here’s an example of how to do that:

#### Example Implementation

```typescript
const discountItem = new DiscountItem(
  new Map<Language, string>([
    [Language.ENGLISH, "Service Fee"],
    [Language.ARABIC, "رسوم الخدمة"]
  ]),
  DiscountType.AMOUNT,
  "2"
);

try {
  const discountData = await moneyHashSDK.updateDiscount('ZpmnoP9', discountItem);
  console.log("Discount updated successfully:", discountData);
} catch (error) {
  console.error("Error updating discount:", error);
}
```

This example shows how to update a discount by specifying the discount name in different languages, the type (amount or percentage), and the value.

---

### Additional Requirements for Android

To use the MoneyHash SDK on Android, you must include the following activities in your AndroidManifest.xml file:

```xml
<activity android:name="com.moneyhash.sdk.android.payment.PaymentActivity"
        android:theme="@style/Theme.AppCompat.Light.NoActionBar.FullScreen"/>
```

```xml
<activity android:name="com.moneyhash.sdk.android.payout.PayoutActivity"
    android:theme="@style/Theme.AppCompat.Light.NoActionBar.FullScreen"/>
```

To ensure these activities are displayed in full-screen mode, you can define a custom style in your styles.xml file, as shown below:

```xml
<style name="Theme.AppCompat.Light.NoActionBar.FullScreen" parent="@style/Theme.AppCompat.Light.NoActionBar">
    <item name="android:windowNoTitle">true</item>
    <item name="android:windowActionBar">false</item>
    <item name="android:windowFullscreen">true</item>
    <item name="android:windowContentOverlay">@null</item>
</style>
```

---

### Overview of MoneyHash APIs

For a detailed guide to all available APIs in the MoneyHash SDK for React Native, including parameters, return types, and usage examples, refer to the [API Documentation](./docs/APIs.md).

---

### Overview of MoneyHash Models

The MoneyHash SDK for React Native features various models to represent data structures like intents, payment methods, transactions, and card information. For comprehensive details on these models, including their properties and usage within the SDK, see the [Model Documentation](./docs/Models.md).

---

### Questions and Issues

Please provide any feedback via a [GitHub Issue](https://github.com/MoneyHash/moneyhash-react-native-example/issues/new?template=bug_report.md).

---

This guide now includes sections for updating fees and discounts with practical examples. Let me know if there’s anything else you’d like to add!
