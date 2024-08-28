# MoneyHash SDK API Documentation

The MoneyHash SDK for React Native provides a robust set of APIs for managing payment intents, handling payment methods, and processing transactions. This documentation covers the available methods within the `MoneyHashSDK` class.

---

### API Methods of MoneyHashSDK

#### 1. Render MoneyHash Embed Form

```typescript
renderForm(
  intentId: string,
  intentType: IntentType,
  embedStyle?: EmbedStyle
): Promise<IntentDetails>
```

- **Purpose**: Renders the MoneyHash embed form within the React Native application.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `intentType`: The type of the intent (`IntentType`), either payment or payout.
    - `embedStyle`: Optional styling configuration for the embed form.
- **Returns**: A promise that resolves to `IntentDetails` if successful.
- **Throws**: An `MHError` if something went wrong while rendering the intent.
- **Example**:

```typescript
moneyHashSDK.renderForm("currentIntentId", IntentType.Payment)
  .then(intentDetails => {
    console.log("Form rendered with details: ", intentDetails);
  })
  .catch(error => {
    console.error("Failed to render form: ", error);
  });
```

---

#### 2. Retrieve Available Methods

```typescript
getIntentMethods(intentId: string, intentType: IntentType): Promise<IntentMethods>
```

- **Purpose**: Retrieves available payment methods for a specified intent.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `intentType`: The type of the intent (`IntentType`), either payment or payout.
- **Returns**: A promise that resolves to `IntentMethods` containing available methods.
- **Throws**: An `MHError` if failed to retrieve the methods.
- **Example**:

```typescript
moneyHashSDK.getIntentMethods("Z1ED7zZ", IntentType.Payment)
  .then(methods => {
    console.log("Available methods: ", methods);
  })
  .catch(error => {
    console.error("Error retrieving methods: ", error);
  });
```

---

#### 3. Retrieve Intent Details

```typescript
getIntentDetails(intentId: string, intentType: IntentType): Promise<IntentDetails>
```

- **Purpose**: Retrieves the details of a specified intent.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `intentType`: The type of the intent (`IntentType`), either payment or payout.
- **Returns**: A promise that resolves to `IntentDetails`.
- **Throws**: An `MHError` if failed to retrieve the intent details.
- **Example**:

```typescript
moneyHashSDK.getIntentDetails("Z1ED7zZ", IntentType.Payment)
  .then(intentDetails => {
    console.log("Intent details: ", intentDetails);
  })
  .catch(error => {
    console.error("Error retrieving intent details: ", error);
  });
```

---

#### 4. Delete a Saved Card

```typescript
deleteSavedCard(cardTokenId: string, intentSecret: string): Promise<void>
```

- **Purpose**: Deletes a saved card using its token ID and associated intent secret.
- **Parameters**:
    - `cardTokenId`: The token ID of the card to be deleted.
    - `intentSecret`: The secret associated with the intent.
- **Throws**: An `MHError` if failed to delete the card.
- **Example**:

```typescript
moneyHashSDK.deleteSavedCard("card_token_123", "secret_456")
  .then(() => {
    console.log("Card deleted successfully");
  })
  .catch(error => {
    console.error("Error deleting card: ", error);
  });
```

---

#### 5. Reset Selected Method

```typescript
resetSelectedMethod(intentId: string, intentType: IntentType): Promise<IntentResult>
```

- **Purpose**: Resets the selected payment or payout method for a specified intent.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `intentType`: The type of the intent (`IntentType`), either payment or payout.
- **Returns**: A promise that resolves to `IntentResult` with the reset result.
- **Throws**: An `MHError` if failed to reset the selected method.
- **Example**:

```typescript
moneyHashSDK.resetSelectedMethod("Z1ED7zZ", IntentType.Payment)
  .then(result => {
    console.log("Method reset successfully: ", result);
  })
  .catch(error => {
    console.error("Error resetting method: ", error);
  });
```

---

#### 6. Proceed with Selected Method

```typescript
proceedWithMethod(
  intentId: string,
  intentType: IntentType,
  selectedMethodId: string,
  methodType: MethodType,
  methodMetaData?: MethodMetaData
): Promise<IntentResult>
```

- **Purpose**: Proceeds with the selected payment or payout method for a given intent.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `intentType`: The type of the intent (`IntentType`), either payment or payout.
    - `selectedMethodId`: The ID of the selected method.
    - `methodType`: The type of the method (`MethodType`).
    - `methodMetaData`: Optional metadata related to the method.
- **Returns**: A promise that resolves to `IntentResult` encapsulating the result of the method selection.
- **Throws**: An `MHError` if failed to proceed with the selected method.
- **Example**:

```typescript
moneyHashSDK.proceedWithMethod("Z1ED7zZ", IntentType.Payment, "method_123", MethodType.PaymentMethod)
  .then(result => {
    console.log("Proceeded with method: ", result);
  })
  .catch(error => {
    console.error("Error proceeding with method: ", error);
  });
```

---

#### 7. Submit Form

```typescript
submitForm(
  intentId: string,
  selectedMethodId: string,
  billingData: Record<string, string>,
  shippingData: Record<string, string>,
  vaultData?: VaultData
): Promise<IntentDetails>
```

- **Purpose**: Submits a form with the selected method and optional billing and shipping data.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `selectedMethodId`: The ID of the selected payment method.
    - `billingData`: Optional billing details.
    - `shippingData`: Optional shipping details.
    - `vaultData`: Data from card tokenization (if applicable).
- **Returns**: A promise that resolves to `IntentDetails` if successful.
- **Throws**: An `MHError` if failed to submit the form data.
- **Example**:

```typescript
moneyHashSDK.submitForm(
  "Z1ED7zZ",
  "selectedMethod",
  { "address": "123 Main St", "city": "New York" },
  { "address": "456 Elm St", "city": "Boston" }
)
  .then(intentDetails => {
    console.log("Form submitted successfully: ", intentDetails);
  })
  .catch(error => {
    console.error("Error submitting form: ", error);
  });
```

---

#### 8. Submit Card CVV

```typescript
submitCardCVV(intentId: string, cvv: string): Promise<IntentDetails>
```

- **Purpose**: Submits the CVV for a card associated with a specified intent.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `cvv`: The CVV of the card.
- **Returns**: A promise that resolves to `IntentDetails` if successful.
- **Throws**: An `MHError` if failed to submit the CVV.
- **Example**:

```typescript
moneyHashSDK.submitCardCVV("Z1ED7zZ", "123")
  .then(intentDetails => {
    console.log("CVV submitted successfully: ", intentDetails);
  })
  .catch(error => {
    console.error("Error submitting CVV: ", error);
  });
```

---

#### 9. Set Logging Level

```typescript
setLogLevel(logLevel: LogLevel): void
```

- **Purpose**: Sets the logging level for the SDK.
- **Parameters**:
    - `logLevel`: The desired logging level.
- **Example**:

```typescript
moneyHashSDK.setLogLevel(LogLevel.Debug);
console.log("Log level set to debug");
```

---

#### 10. Submit Payment Receipt

```typescript
submitPaymentReceipt(intentId: string, data: string): Promise<IntentDetails>
```

- **Purpose**: Submits a payment receipt for a specified intent.
- **Parameters**:
    - `intentId`: The unique identifier of the payment intent.
    - `data`: The receipt data to be submitted.
- **Returns**: A promise that resolves to `IntentDetails` if successful.
- **Throws**: An `MHError` if failed to submit the receipt.
- **Example**:

```typescript
moneyHashSDK.submitPaymentReceipt("Z1ED7zZ", "receipt_data_string")
  .then(intentDetails => {
    console.log("Receipt submitted successfully: ", intentDetails);
  })
  .catch(error => {
    console.error("Error submitting receipt: ", error);
  });
``

`

---

#### 11. Proceed with Apple Pay

> **Note**: This method is only available on iOS.

```typescript
proceedWithApplePay(
  intentId: string,
  depositAmount: number,
  merchantIdentifier: string,
  currencyCode: string,
  countryCode: string
): Promise<IntentDetails>
```

- **Purpose**: Initiates an Apple Pay transaction.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `depositAmount`: The amount to be paid.
    - `merchantIdentifier`: A unique identifier for the merchant.
    - `currencyCode`: The currency code of the transaction (e.g., "USD").
    - `countryCode`: The country code associated with the transaction (e.g., "US").
- **Returns**: A promise that resolves to `IntentDetails` if successful.
- **Throws**: An `MHError` if failed to proceed with Apple Pay.
- **Example**:

```typescript
moneyHashSDK.proceedWithApplePay("intentId", 99.99, "merchant.com.example", "USD", "US")
  .then(intentDetails => {
    console.log("Apple Pay transaction initiated: ", intentDetails);
  })
  .catch(error => {
    console.error("Error initiating Apple Pay transaction: ", error);
  });
```

---

#### 12. Is Device Compatible with Apple Pay

> **Note**: This method is only available on iOS.

```typescript
isDeviceCompatibleWithApplePay(): Promise<boolean>
```

- **Purpose**: Checks if the current device is compatible with Apple Pay.
- **Returns**: A promise that resolves to a boolean indicating whether the device supports Apple Pay (`true` if compatible, `false` otherwise).
- **Example**:

```typescript
moneyHashSDK.isDeviceCompatibleWithApplePay()
  .then(isCompatible => {
    console.log("Device is compatible with Apple Pay: ", isCompatible);
  })
  .catch(error => {
    console.error("Error checking Apple Pay compatibility: ", error);
  });
```

---

#### 13. Set Locale

```typescript
setLocale(locale: Language): void
```

- **Purpose**: Sets the locale for the SDK.
- **Parameters**:
    - `locale`: The `Language` object representing the locale to be set.

---

#### 14. Update Fees

```typescript
updateFees(intentId: string, fees: FeeItem[]): Promise<FeesData>
```

- **Purpose**: Updates the fees associated with a specified intent.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `fees`: A list of `FeeItem` objects representing the fees to be updated.
- **Returns**: A promise that resolves to `FeesData` if successful.
- **Throws**: An `MHError` if the fees cannot be updated.
- **Example**:

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
  )
];

moneyHashSDK.updateFees("ZpmnoP9", feeItems)
  .then(feesData => {
    console.log("Fees updated successfully: ", feesData);
  })
  .catch(error => {
    console.error("Error updating fees: ", error);
  });
```

---

#### 15. Update Discount

```typescript
updateDiscount(intentId: string, discount: DiscountItem): Promise<DiscountData>
```

- **Purpose**: Updates the discount associated with a specified intent.
- **Parameters**:
    - `intentId`: The unique identifier of the intent.
    - `discount`: A `DiscountItem` object representing the discount to be updated.
- **Returns**: A promise that resolves to `DiscountData` if successful.
- **Throws**: An `MHError` if the discount cannot be updated.
- **Example**:

```typescript
const discountItem = new DiscountItem(
  new Map<Language, string>([
    [Language.ENGLISH, "Service Fee"],
    [Language.ARABIC, "رسوم الخدمة"]
  ]),
  DiscountType.AMOUNT,
  "2"
);

moneyHashSDK.updateDiscount("ZpmnoP9", discountItem)
  .then(discountData => {
    console.log("Discount updated successfully: ", discountData);
  })
  .catch(error => {
    console.error("Error updating discount: ", error);
  });
```

---

This documentation should now align well with the Flutter version and cover all the methods available in your React Native SDK. Let me know if you need any further adjustments!