# Class: OpportunityCollection

A class to perform CRUD opperations for Event/Opportunity Collection on Firestore.

**Note:** [connectFirestoreEmulator](OpportunityCollection.md#connectfirestoreemulator) is inherited for developing and testing purposes.
DO NOT call [connectFirestoreEmulator](OpportunityCollection.md#connectfirestoreemulator) in production.

Example:

```jsx
const config = { apiKey: ..., authDomain: ..., ...};
const opportunityCollection = OpportunityCollection.create(config);
const allOpportunites = await opportunityCollection.getOpportunities();
```

## Hierarchy

-   `ICFirestoreCollection`

    ↳ **`OpportunityCollection`**

## Methods

### create

▸ `Static` **create**(`options`, `name?`): [`OpportunityCollection`](OpportunityCollection.md)

A static method to create a new `OpportunityCollection` instance. The instance can be used to CRUD opportunities.

#### Parameters

| Name      | Type              | Description                                            |
| :-------- | :---------------- | :----------------------------------------------------- |
| `options` | `FirebaseOptions` | Same as `options` used by initializeApp(options, name) |
| `name?`   | `string`          | Same as `name` used by initializeApp(options, name)    |

#### Returns

[`OpportunityCollection`](OpportunityCollection.md)

A `OpportunityCollection` instance

See [Firebase Documentation](https://firebase.google.com/docs/reference/js/app#initializeapp) for more about initializeApp().

Example:

```typescript
const config = { apiKey: ..., authDomain: ..., ...};
const opportunityCollection = OpportunityCollection.create(config);
const allOpportunites = await opportunityCollection.getOpportunities();
```

#### Defined in

[opportunity.ts:65](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/opportunity.ts#L65)

---

### getOpportunities

▸ **getOpportunities**(`eventQuery?`): `Promise`<{ `id`: `string` }[]\>

Get opportunites based on the given [EventQuery](../interfaces/EventQuery.md).

#### Parameters

| Name          | Type                                        | Description                                              |
| :------------ | :------------------------------------------ | :------------------------------------------------------- |
| `eventQuery?` | [`EventQuery`](../interfaces/EventQuery.md) | The filter and sort type used for fetching opportunities |

#### Returns

`Promise`<{ `id`: `string` }[]\>

An array of opportunities after the filter as [Event](../interfaces/Event.md) with `id` for the event

Example:

```typescript
const eventQuery: EventQuery = defaultEventQuery;
const queriedOpportunites = await opportunityCollection.getOpportunities(
    eventQuery
);
const allOpportunites = await opportunityCollection.getOpportunities();
allOpportunites.forEach((opportunity) => console.log(opportunity));
```

#### Defined in

[opportunity.ts:108](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/opportunity.ts#L108)

---

### getOpportunityById

▸ **getOpportunityById**(`id`): `Promise`<`null` \| { `id`: `string` }\>

Get an exisitng opportunity based on given document id (generated by the Firestore).

#### Parameters

| Name | Type     | Description                                     |
| :--- | :------- | :---------------------------------------------- |
| `id` | `string` | The document id for identifying the opportunity |

#### Returns

`Promise`<`null` \| { `id`: `string` }\>

An opportunity as [Event](../interfaces/Event.md) with `id` if it's found; otherwise, it returns `null`

Example:

```typescript
const id = "utJSlNLCImWrkTuxFpGM";
const opportunity = await opportunityCollection.getOpportunityById(id);
const { id, eventName } = opportunity;
```

#### Defined in

[opportunity.ts:156](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/opportunity.ts#L156)

---

### createOpportunity

▸ **createOpportunity**(`userId`, `event`): `Promise`<`string`\>

The company user create a new opportunity. This requires the company has been created before creating
the opportunity.

#### Parameters

| Name     | Type                              | Description                                     |
| :------- | :-------------------------------- | :---------------------------------------------- |
| `userId` | `string`                          | The Firestore's document id of the company user |
| `event`  | [`Event`](../interfaces/Event.md) | The new event/opportunity the user is creating  |

#### Returns

`Promise`<`string`\>

The document id for the new opportunity

Example:

```typescript
const companyId = "pPn3FypudrthuNbop1wh";
const event: Event = defaultEvent;
const opportunityId = await opportunityCollection.createOpportunity(
    companyId,
    event
);
```

#### Defined in

[opportunity.ts:179](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/opportunity.ts#L179)

---

### updateOpportunity

▸ **updateOpportunity**(`id`, `fields`): `Promise`<`void`\>

Update an existing opportunity, the opportunity is identified as Firestore's document id.

#### Parameters

| Name     | Type                                          | Description                                                                             |
| :------- | :-------------------------------------------- | :-------------------------------------------------------------------------------------- |
| `id`     | `string`                                      | The Firestore's document id of the event to be updated                                  |
| `fields` | `Partial`<[`Event`](../interfaces/Event.md)\> | The fields with new values, it is a subset of [Event](../interfaces/Event.md) interface |

#### Returns

`Promise`<`void`\>

Example:

```typescript
const id = "utJSlNLCImWrkTuxFpGM";
const fields = { eventName: "A new event name" };
await opportunityCollection.updateOpportunity(id, fields);
```

#### Defined in

[opportunity.ts:207](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/opportunity.ts#L207)

---

### deleteOpportunity

▸ **deleteOpportunity**(`id`): `Promise`<`void`\>

Delete an existing opportunity. The opportunity is not actually deleted from the firestore
but its `deleted` field is set to `true`.

#### Parameters

| Name | Type     | Description                                            |
| :--- | :------- | :----------------------------------------------------- |
| `id` | `string` | The Firestore's document id of the event to be deleted |

#### Returns

`Promise`<`void`\>

Example:

```typescript
const id = "utJSlNLCImWrkTuxFpGM";
await opportunityCollection.deleteOpportunity(id);
```

#### Defined in

[opportunity.ts:226](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/opportunity.ts#L226)

---

### connectFirestoreEmulator

▸ **connectFirestoreEmulator**(`host`, `port`, `options?`): `void`

#### Parameters

| Name                     | Type                                   |
| :----------------------- | :------------------------------------- |
| `host`                   | `string`                               |
| `port`                   | `number`                               |
| `options?`               | `Object`                               |
| `options.mockUserToken?` | `string` \| `EmulatorMockTokenOptions` |

#### Returns

`void`

#### Inherited from

ICFirestoreCollection.connectFirestoreEmulator

#### Defined in

[collection.ts:39](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/collection.ts#L39)

---

### createCompany

▸ **createCompany**(`company`): `Promise`<`string`\>

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `company` | `Company` |

#### Returns

`Promise`<`string`\>

#### Inherited from

ICFirestoreCollection.createCompany

#### Defined in

[collection.ts:51](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/collection.ts#L51)

## Constructors

### constructor

• **new OpportunityCollection**(`options`, `name?`)

#### Parameters

| Name      | Type              | Description                                            |
| :-------- | :---------------- | :----------------------------------------------------- |
| `options` | `FirebaseOptions` | Same as `options` used by initializeApp(options, name) |
| `name?`   | `string`          | Same as `name` used by initializeApp(options, name)    |

#### Overrides

ICFirestoreCollection.constructor

#### Defined in

[opportunity.ts:43](https://github.com/icontribute-founder/icontribute-webapp/blob/1301e9c/src/firebase-access/src/opportunity.ts#L43)
