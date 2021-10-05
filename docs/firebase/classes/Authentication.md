# Class: Authentication

## Methods

### create

▸ `Static` **create**(`options`, `name?`): [`Authentication`](Authentication.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FirebaseOptions` |
| `name?` | `string` |

#### Returns

[`Authentication`](Authentication.md)

#### Defined in

[auth.ts:28](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/auth.ts#L28)

___

### connectAuthEmulator

▸ **connectAuthEmulator**(`host`, `port`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `options?` | `Object` |
| `options.disableWarnings` | `boolean` |

#### Returns

`void`

#### Defined in

[auth.ts:32](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/auth.ts#L32)

___

### isUserLogin

▸ **isUserLogin**(`nextOrObserver`): `Unsubscribe`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextOrObserver` | `NextOrObserver`<`User`\> |

#### Returns

`Unsubscribe`

#### Defined in

[auth.ts:44](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/auth.ts#L44)

___

### signupWithEmailAndPassword

▸ **signupWithEmailAndPassword**(`email`, `password`, `persistanceType?`): `Promise`<`UserCredential`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `email` | `string` | `undefined` |
| `password` | `string` | `undefined` |
| `persistanceType` | ``"local"`` \| ``"session"`` \| ``"memory"`` | `"local"` |

#### Returns

`Promise`<`UserCredential`\>

#### Defined in

[auth.ts:48](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/auth.ts#L48)

___

### loginWithEmailAndPassword

▸ **loginWithEmailAndPassword**(`email`, `password`): `Promise`<`UserCredential`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `password` | `string` |

#### Returns

`Promise`<`UserCredential`\>

#### Defined in

[auth.ts:75](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/auth.ts#L75)

___

### logout

▸ **logout**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[auth.ts:84](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/auth.ts#L84)

## Constructors

### constructor

• **new Authentication**(`options`, `name?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FirebaseOptions` |
| `name?` | `string` |

#### Defined in

[auth.ts:23](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/auth.ts#L23)
