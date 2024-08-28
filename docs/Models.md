
# MoneyHash SDK Models Documentation (React Native)

This document provides a detailed explanation of each model within the MoneyHash SDK for React Native. These models represent various aspects of payment intents, methods, transactions, and more.

---

### 1. `DiscountData`

```typescript
export class DiscountData {
  discount?: DiscountItem;
  amount?: string;
}
```

- **Description**: Represents data related to a discount applied to an intent.
- **Properties**:
    - `discount`: The `DiscountItem` object containing details of the discount.
    - `amount`: The total discount amount.

---

### 2. `DiscountItem`

```typescript
export class DiscountItem {
  title?: Map<Language, string>;
  type?: DiscountType;
  value?: string;
}
```

- **Description**: Represents an individual discount item applied within an intent.
- **Properties**:
    - `title`: A map containing translations of the discount title in different languages.
    - `type`: The type of discount (`DiscountType`).
    - `value`: The value of the discount.

---

### 3. `DiscountType`

```typescript
export enum DiscountType {
  AMOUNT = 'amount',
  PERCENTAGE = 'percentage',
}
```

- **Description**: Enum representing the type of discount.
- **Enum Cases**:
    - `AMOUNT`: The discount is a fixed amount.
    - `PERCENTAGE`: The discount is a percentage of the total.

---

### 4. `MHErrorType`

```typescript
export enum MHErrorType {
  NETWORK = 'network',
  UNKNOWN = 'unknown',
  CARD_VALIDATION = 'cardValidation',
  CANCELLED = 'cancelled',
  APPLE_PAY_TRANSACTION_FAILED = 'applePayTransactionFailed',
  NOT_COMPATIBLE_WITH_APPLE_PAY = 'notCompatibleWithApplePay',
}
```

- **Description**: Enum representing different types of errors that can occur.
- **Enum Cases**:
    - `NETWORK`: Network-related error.
    - `UNKNOWN`: Unknown error.
    - `CARD_VALIDATION`: Error related to card validation.
    - `CANCELLED`: Error when the action is cancelled.
    - `APPLE_PAY_TRANSACTION_FAILED`: Error specific to Apple Pay transaction failures.
    - `NOT_COMPATIBLE_WITH_APPLE_PAY`: Error when the device is not compatible with Apple Pay.

---

### 5. `ErrorDetail`

```typescript
export class ErrorDetail {
  key: string;
  message: string;
}
```

- **Description**: Represents an individual error detail.
- **Properties**:
    - `key`: The key identifying the error.
    - `message`: A human-readable message describing the error.

---

### 6. `MHError`

```typescript
export class MHError extends Error {
  message: string;
  errors: ErrorDetail[];
  type: MHErrorType;
}
```

- **Description**: Represents an error that can be thrown within the SDK.
- **Properties**:
    - `message`: The main error message.
    - `errors`: A list of detailed errors (`ErrorDetail`).
    - `type`: The type of error (`MHErrorType`).

---

### 7. `FeeItem`

```typescript
export class FeeItem {
  title: Map<Language, string>;
  value: string;
}
```

- **Description**: Represents a fee item associated with an intent.
- **Properties**:
    - `title`: A map of titles by language, describing the fee.
    - `value`: The value of the fee.

---

### 8. `FeesData`

```typescript
export class FeesData {
  amount?: string;
  fees?: FeeItem[];
}
```

- **Description**: Represents the fees data associated with the intent.
- **Properties**:
    - `amount`: The total amount of the fees.
    - `fees`: A list of `FeeItem` objects representing individual fees.

---

### 9. `Language`

```typescript
export enum Language {
  ARABIC = 'ar',
  ENGLISH = 'en',
  FRENCH = 'fr',
}
```

- **Description**: Enum representing different languages supported by the SDK.
- **Enum Cases**:
    - `ARABIC`: Arabic language.
    - `ENGLISH`: English language.
    - `FRENCH`: French language.

---

### 10. `LogLevel`

```typescript
export enum LogLevel {
  VERBOSE = 'VERBOSE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  ASSERTION = 'ASSERT',
}
```

- **Description**: Enum representing different logging levels.
- **Enum Cases**:
    - `VERBOSE`: Verbose level logging.
    - `DEBUG`: Debug level logging.
    - `INFO`: Info level logging.
    - `WARN`: Warning level logging.
    - `ERROR`: Error level logging.
    - `ASSERTION`: Assertion level logging.

---

### 11. `AmountData`

```typescript
export class AmountData {
  value?: string;
  formatted?: number;
  currency?: string;
  maxPayout?: number;
}
```

- **Description**: Represents the monetary value related to an intent.
- **Properties**:
    - `value`: The raw value of the amount.
    - `formatted`: The formatted amount value.
    - `currency`: The currency code (e.g., "USD").
    - `maxPayout`: The maximum payout amount allowed.

---

### 12. `CardTokenData`

```typescript
export class CardTokenData {
  bin?: string;
  brand?: string;
  cardHolderName?: string;
  country?: string;
  expiryMonth?: string;
  expiryYear?: string;
  issuer?: string;
  last4?: string;
  logo?: string;
  paymentMethods?: string[];
  requiresCvv?: boolean;
}
```

- **Description**: Represents token data for a card used in payment processing.
- **Properties**:
    - `bin`: Bank Identification Number of the card.
    - `brand`: Brand of the card (e.g., Visa, MasterCard).
    - `cardHolderName`: Name of the cardholder.
    - `country`: Country where the card was issued.
    - `expiryMonth`: Expiry month of the card.
    - `expiryYear`: Expiry year of the card.
    - `issuer`: Issuer of the card.
    - `last4`: Last four digits of the card number.
    - `logo`: Logo associated with the card brand.
    - `paymentMethods`: List of payment methods associated with the card.
    - `requiresCvv`: Boolean indicating if CVV is required for transactions.

---

### 13. `InputField`

```typescript
export class InputField {
  type: InputFieldType;
  name?: string;
  value?: string;
  label?: string;
  maxLength?: number;
  isRequired: boolean;
  optionsList?: OptionItem[];
  optionsMap?: { [key: string]: OptionItem[] };
  hint?: string;
  minLength?: number;
  readOnly: boolean;
  dependsOn?: string;
}
```

- **Description**: Represents a field in a form used for collecting user input.
- **Properties**:
    - `type`: Type of the input field (e.g., text, email).
    - `name`: Name of the input field.
    - `value`: Current value of the input field.
    - `label`: Label for the input field.
    - `maxLength`: Maximum length of the input.
    - `isRequired`: Indicates if the field is required.
    - `optionsList`: List of selectable options.
    - `optionsMap`: Map of selectable options.
    - `hint`: Hint message for the input field.
    - `minLength`: Minimum length of the input.
    - `readOnly`: Indicates if the field is read-only.
    - `dependsOn`: Specifies another field that this field depends on.

---

### 14. `InputFieldType`

```typescript
export enum InputFieldType {
  TEXT = 'text',
  EMAIL = 'email',
  PHONE_NUMBER = 'phone_number',
  DATE = 'date_field',
  NUMBER = 'number_field',
  SELECT = 'choice_field',
}
```

- **Description**: Enum representing the type of an input field.
- **Enum Cases**:
    - `TEXT`: Standard text input field.
    - `EMAIL`: Email input field.
    - `PHONE_NUMBER`: Phone number input field.
    - `DATE`: Date input field.
    - `NUMBER`: Numeric input field.
    - `SELECT`: Dropdown or select input field.

---

### 15. `IntentData`

```typescript
export class IntentData {
  amount?: AmountData;
  secret?: string;
  expirationDate?: string;
  isLive?: boolean;
  id?: string;
  status?: IntentStatus;
}
```

- **Description**: Represents the core details of an intent.
- **Properties**:
    - `amount`: The total amount for the intent (`AmountData`).
    - `secret`: A secret key associated with the intent.
    - `expirationDate`: The date when the intent expires.
    - `isLive`: Indicates if the intent is in live mode.
    - `id`: The unique identifier for the intent.
    - `status`: The current status of the intent (`IntentStatus`).

---

### 16. `IntentDetails`

```typescript
export class IntentDetails {
  selectedMethod?: string;
  intent?: IntentData;
  walletBalance?: number;
  transaction?: TransactionData;
  intentState?: IntentStateDetails

;
  productItems?: ProductItem[];
}
```

- **Description**: Provides detailed information about an intent.
- **Properties**:
    - `selectedMethod`: The payment method selected for the intent.
    - `intent`: The `IntentData` object containing core details of the intent.
    - `walletBalance`: The wallet balance associated for the current customer.
    - `transaction`: Details about the transaction (`TransactionData`).
    - `intentState`: The current state of the intent (`IntentStateDetails`).
    - `productItems`: A list of product items related to the intent.

---

### 17. `TransactionData`

```typescript
export class TransactionData {
  billingData?: string;
  amount?: number;
  externalActionMessage?: string[];
  amountCurrency?: string;
  id?: string;
  methodName?: string;
  method?: string;
  createdDate?: string;
  status?: string;
  customFields?: string;
  providerTransactionFields?: string;
  customFormAnswers?: string;
}
```

- **Description**: Represents details about a transaction within an intent.
- **Properties**:
    - `billingData`: Billing data associated with the transaction.
    - `amount`: The amount involved in the transaction.
    - `externalActionMessage`: External action messages, if any.
    - `amountCurrency`: The currency of the transaction amount.
    - `id`: The unique identifier of the transaction.
    - `methodName`: The name of the method used for the transaction.
    - `method`: The method used for the transaction.
    - `createdDate`: The date when the transaction was created.
    - `status`: The current status of the transaction.
    - `customFields`: Custom fields related to the transaction.
    - `providerTransactionFields`: Fields specific to the transaction provider.
    - `customFormAnswers`: Answers to any custom forms associated with the transaction.

---

### 18. `IntentStatus`

```typescript
export enum IntentStatus {
  PROCESSED = 'PROCESSED',
  UNPROCESSED = 'UNPROCESSED',
  TIME_EXPIRED = 'TIME_EXPIRED',
  CLOSED = 'CLOSED',
}
```

- **Description**: Enum representing the possible statuses of an intent.
- **Enum Cases**:
    - `PROCESSED`: The intent has been processed.
    - `UNPROCESSED`: The intent remains unprocessed.
    - `TIME_EXPIRED`: The intent has expired due to time constraints.
    - `CLOSED`: The intent has been closed.

---

### 19. `CustomerBalance`

```typescript
export class CustomerBalance {
  balance?: number;
  id?: string;
  icon?: string;
  isSelected?: boolean;
  type?: MethodType;
}
```

- **Description**: Represents a customer balance available for use in an intent.
- **Properties**:
    - `balance`: The balance amount.
    - `id`: The unique identifier of the customer balance.
    - `icon`: An icon associated with the balance.
    - `isSelected`: Indicates if this balance is selected.
    - `type`: The type of method (`MethodType`).

---

### 20. `PaymentMethod`

```typescript
export class PaymentMethod {
  id?: string;
  title?: string;
  isSelected?: boolean;
  confirmationRequired?: boolean;
  icons?: string[];
  type?: MethodType;
}
```

- **Description**: Represents a payment method available for the user.
- **Properties**:
    - `id`: The unique identifier of the payment method.
    - `title`: The title or name of the payment method.
    - `isSelected`: Indicates if this method is selected.
    - `confirmationRequired`: Indicates if confirmation is required for this method.
    - `icons`: Icons associated with the payment method.
    - `type`: The type of method (`MethodType`).

---

### 21. `PayoutMethod`

```typescript
export class PayoutMethod {
  id?: string;
  title?: string;
  isSelected?: boolean;
  confirmationRequired?: boolean;
  icons?: string[];
  type?: MethodType;
}
```

- **Description**: Represents a payout method available for the user.
- **Properties**:
    - `id`: The unique identifier of the payout method.
    - `title`: The title or name of the payout method.
    - `isSelected`: Indicates if this method is selected.
    - `confirmationRequired`: Indicates if confirmation is required for this method.
    - `icons`: Icons associated with the payout method.
    - `type`: The type of method (`MethodType`).

---

### 22. `ExpressMethod`

```typescript
export class ExpressMethod {
  id?: string;
  title?: string;
  isSelected?: boolean;
  confirmationRequired?: boolean;
  icons?: string[];
  type?: MethodType;
}
```

- **Description**: Represents an express payment method.
- **Properties**:
    - `id`: The unique identifier of the express method.
    - `title`: The title or name of the express method.
    - `isSelected`: Indicates if this method is selected.
    - `confirmationRequired`: Indicates if confirmation is required for this method.
    - `icons`: Icons associated with the express method.
    - `type`: The type of method (`MethodType`).

---

### 23. `SavedCard`

```typescript
export class SavedCard {
  id?: string;
  brand?: string;
  last4?: string;
  expiryMonth?: string;
  expiryYear?: string;
  country?: string;
  logo?: string;
  requireCvv?: boolean;
  cvvConfig?: CvvConfig;
  type?: MethodType;
  bin?: string;
}
```

- **Description**: Represents a saved card used in transactions.
- **Properties**:
    - `id`: The unique identifier of the saved card.
    - `brand`: The brand of the card (e.g., Visa, MasterCard).
    - `last4`: The last four digits of the card number.
    - `expiryMonth`: The expiry month of the card.
    - `expiryYear`: The expiry year of the card.
    - `country`: The country where the card was issued.
    - `logo`: The logo associated with the card brand.
    - `requireCvv`: Indicates if CVV is required for this card.
    - `cvvConfig`: Configuration related to CVV input (`CvvConfig`).
    - `type`: The type of method (`MethodType`).
    - `bin`: The Bank Identification Number of the card.

---

### 24. `CvvConfig`

```typescript
export class CvvConfig {
  digitsCount?: number;
}
```

- **Description**: Configuration details for entering the CVV during a transaction.
- **Properties**:
    - `digitsCount`: The number of digits required for the CVV.

---

### 25. `IntentMethods`

```typescript
export class IntentMethods {
  customerBalances?: CustomerBalance[];
  paymentMethods?: PaymentMethod[];
  expressMethods?: ExpressMethod[];
  savedCards?: SavedCard[];
  payoutMethods?: PayoutMethod[];
}
```

- **Description**: Represents different payment methods available for an intent.
- **Properties**:
    - `customerBalances`: A list of available customer balances.
    - `paymentMethods`: A list of available payment methods.
    - `expressMethods`: A list of available express methods.
    - `savedCards`: A list of saved cards.
    - `payoutMethods`: A list of available payout methods.

---

### 26. `IntentResult`

```typescript
export class IntentResult {
  methods?: IntentMethods | null;
  details?: IntentDetails | null;
}
```

- **Description**: Represents the result of available methods for an intent.
- **Properties**:
    - `methods`: Contains the available payment methods (`IntentMethods`).
    - `details`: Provides detailed information about the intent (`IntentDetails`).

---

### 27. `IntentStateDetails`

```typescript
export type IntentStateDetails =
  | MethodSelection
  | IntentForm
  | IntentProcessed
  | TransactionWaitingUserAction
  | TransactionFailed
  | Expired
  | Closed
  | FormFields
  | UrlToRender
  | SavedCardCVV
  | NativePay;
```

- **Description**: Represents the different states an intent can be in.
- **Subclasses**:
    - `MethodSelection`: Represents the method selection state.
    - `IntentForm`: Represents the state where the MoneyHash form is rendered.
    - `IntentProcessed`: Represents the state where the intent has been processed.
    - `TransactionWaitingUserAction`: Represents the state where the transaction is waiting for user action.
    - `TransactionFailed`: Represents the state where the transaction has failed, with recommended methods provided.
    - `Expired`: Represents the state where the intent has expired.
    - `Closed`: Represents the state where the intent has been closed.
    - `FormFields`: Represents the state where form fields are being filled out.
    - `UrlToRender`: Represents the state where a URL is being redirected.
    - `SavedCardCVV`: Represents the state where a saved card's CVV is being entered.
    - `NativePay`: Represents the use of native payment methods like Apple Pay.

---

### 28. `MethodType`

```typescript
export enum MethodType {
  ExpressMethod = 'expressMethod',
  CustomerBalance = 'customerBalance',
  SavedCard = 'savedCard',
  PaymentMethod = 'paymentMethod',
  PayoutMethod = 'payoutMethod',
}
```

- **Description**: Enum representing different types of methods available for an intent.
- **Enum Cases**:
    - `

ExpressMethod`: Represents an express payment method.
    - `CustomerBalance`: Represents a customer balance method.
    - `SavedCard`: Represents a saved card method.
    - `PaymentMethod`: Represents a standard payment method.
    - `PayoutMethod`: Represents a payout method.

---

### 29. `MethodMetaData`

```typescript
export class MethodMetaData {
  cvv?: string;
}
```

- **Description**: Contains metadata related to a payment method, such as CVV.
- **Properties**:
    - `cvv`: The CVV code for a card.

---

### 30. `ApplePayData`

```typescript
export class ApplePayData {
  type: 'apple_pay' = 'apple_pay';
  countryCode?: string;
  merchantId?: string;
  currencyCode?: string;
  amount?: number;
  supportedNetworks?: string[];
}
```

- **Description**: Contains data necessary for configuring an Apple Pay transaction.
- **Properties**:
    - `countryCode`: The country code for the transaction (e.g., "US").
    - `merchantId`: The merchant identifier for Apple Pay.
    - `currencyCode`: The currency code for the transaction (e.g., "USD").
    - `amount`: The amount to be charged.
    - `supportedNetworks`: A list of supported networks for Apple Pay (e.g., Visa, MasterCard).

---

### 31. `OptionItem`

```typescript
export class OptionItem {
  label: string;
  value: string;
}
```

- **Description**: Represents an option item in a selectable list within an input field.
- **Properties**:
    - `label`: The label displayed to the user.
    - `value`: The value associated with the option.

---

### 32. `ProductItem`

```typescript
export class ProductItem {
  name?: string;
  type?: string;
  amount?: string;
  category?: string;
  quantity?: number;
  description?: string;
  subcategory?: string;
  referenceId?: string;
}
```

- **Description**: Represents an item associated with a product in an intent.
- **Properties**:
    - `name`: The name of the product item.
    - `type`: The type of the product item.
    - `amount`: The amount associated with the product item.
    - `category`: The category of the product item.
    - `quantity`: The quantity of the product item.
    - `description`: A description of the product item.
    - `subcategory`: The subcategory of the product item.
    - `referenceId`: A reference ID associated with the product item.

---

### 33. `RenderStrategy`

```typescript
export enum RenderStrategy {
  IFRAME = 'iframe',
  POPUP_IFRAME = 'popup_iframe',
  REDIRECT = 'redirect',
  NONE = 'none',
}
```

- **Description**: Enum representing different strategies for rendering web content within the SDK.
- **Enum Cases**:
    - `IFRAME`: Content is rendered within an iframe.
    - `POPUP_IFRAME`: Content is rendered within a popup iframe.
    - `REDIRECT`: Content is rendered via a URL redirect.
    - `NONE`: No rendering strategy is applied.

---

### 34. `SaveCardCheckbox`

```typescript
export class SaveCardCheckbox {
  mandatory?: boolean;
  show?: boolean;
}
```

- **Description**: Represents the configuration for the save card checkbox.
- **Properties**:
    - `mandatory`: Indicates if the save card option is mandatory.
    - `show`: Indicates if the save card checkbox should be shown.

---

### 35. `TokenizeCardInfo`

```typescript
export class TokenizeCardInfo {
  accessToken?: string;
  isLive?: boolean;
  saveCard?: boolean;
  saveCardCheckbox?: SaveCardCheckbox;
}
```

- **Description**: Represents the data needed to tokenize a card in the payment process.
- **Properties**:
    - `accessToken`: An access token used for tokenizing the card.
    - `isLive`: Indicates if the card is in live mode.
    - `saveCard`: Indicates if the card should be saved.
    - `saveCardCheckbox`: Configuration for the save card checkbox (`SaveCardCheckbox`).

---

### 36. `VaultData`

```typescript
export type VaultData = {
  first_six_digits: string;
  last_four_digits: string;
  card_scheme: string;
  card_holder_name: string;
  expiry_year: string;
  expiry_month: string;
  is_live: boolean;
  access_token: string;
  card_token: string;
  cvv: string;
  save_card: boolean;
  fingerprint: string;
};
```

- **Description**: Represents the data stored in the vault for a card used in payment processing.
- **Properties**:
    - `first_six_digits`: The first six digits of the card number.
    - `last_four_digits`: The last four digits of the card number.
    - `card_scheme`: The scheme of the card (e.g., Visa, MasterCard).
    - `card_holder_name`: The name of the cardholder.
    - `expiry_year`: The expiry year of the card.
    - `expiry_month`: The expiry month of the card.
    - `is_live`: Indicates if the card is in live mode.
    - `access_token`: An access token associated with the card.
    - `card_token`: A token representing the card.
    - `cvv`: The CVV code for the card.
    - `save_card`: Indicates if the card should be saved.
    - `fingerprint`: A fingerprint associated with the card for additional security.
