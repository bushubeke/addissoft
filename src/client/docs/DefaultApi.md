# FastApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserRolesAdminAddrolesPost**](DefaultApi.md#addUserRolesAdminAddrolesPost) | **POST** /admin/addroles | Add User Roles
[**deleteAllRolesAdminRoleAllDelete**](DefaultApi.md#deleteAllRolesAdminRoleAllDelete) | **DELETE** /admin/role/all | Delete All Roles
[**deleteAllUserAdminUserAllDelete**](DefaultApi.md#deleteAllUserAdminUserAllDelete) | **DELETE** /admin/user/all | Delete All User
[**deleteRoleAdminRoleItemIdDelete**](DefaultApi.md#deleteRoleAdminRoleItemIdDelete) | **DELETE** /admin/role/{item_id} | Delete Role
[**deleteUserAdminUserItemUuidDelete**](DefaultApi.md#deleteUserAdminUserItemUuidDelete) | **DELETE** /admin/user/{item_uuid} | Delete User
[**deleteUserRolesAdminDeleterolesRoleIdUserIdDelete**](DefaultApi.md#deleteUserRolesAdminDeleterolesRoleIdUserIdDelete) | **DELETE** /admin/deleteroles/{role_id}/{user_id} | Delete User Roles
[**getAllRolesAdminRolesAllGet**](DefaultApi.md#getAllRolesAdminRolesAllGet) | **GET** /admin/roles/all | Get All Roles
[**getAllUsersAdminUsersAllGet**](DefaultApi.md#getAllUsersAdminUsersAllGet) | **GET** /admin/users/all | Get All Users
[**getRoleAdminRoleItemIdGet**](DefaultApi.md#getRoleAdminRoleItemIdGet) | **GET** /admin/role/{item_id} | Get Role
[**getUserAdminUserItemUuidGet**](DefaultApi.md#getUserAdminUserItemUuidGet) | **GET** /admin/user/{item_uuid} | Get User
[**indexGet**](DefaultApi.md#indexGet) | **GET** / | Index
[**loginTokenAdminTokenPost**](DefaultApi.md#loginTokenAdminTokenPost) | **POST** /admin/token | Login Token
[**loginUserAdminLoginPost**](DefaultApi.md#loginUserAdminLoginPost) | **POST** /admin/login | Login User
[**registerRolesAdminRoleRegisterPost**](DefaultApi.md#registerRolesAdminRoleRegisterPost) | **POST** /admin/role/register | Register Roles
[**registerUserAdminUserRegisterPost**](DefaultApi.md#registerUserAdminUserRegisterPost) | **POST** /admin/user/register | Register User
[**testOauth2AdminTestoauthGet**](DefaultApi.md#testOauth2AdminTestoauthGet) | **GET** /admin/testoauth | Test Oauth2
[**updateRoleAdminRoleupdateItemIdPut**](DefaultApi.md#updateRoleAdminRoleupdateItemIdPut) | **PUT** /admin/roleupdate/{item_id} | Update Role
[**updateUserAdminUserroleItemUuidPut**](DefaultApi.md#updateUserAdminUserroleItemUuidPut) | **PUT** /admin/userrole/{item_uuid} | Update User



## addUserRolesAdminAddrolesPost

> Object addUserRolesAdminAddrolesPost(rolesUsersModel)

Add User Roles

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let rolesUsersModel = new FastApi.RolesUsersModel(); // RolesUsersModel | 
apiInstance.addUserRolesAdminAddrolesPost(rolesUsersModel, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rolesUsersModel** | [**RolesUsersModel**](RolesUsersModel.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAllRolesAdminRoleAllDelete

> Object deleteAllRolesAdminRoleAllDelete()

Delete All Roles

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
apiInstance.deleteAllRolesAdminRoleAllDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAllUserAdminUserAllDelete

> Object deleteAllUserAdminUserAllDelete()

Delete All User

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
apiInstance.deleteAllUserAdminUserAllDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRoleAdminRoleItemIdDelete

> Object deleteRoleAdminRoleItemIdDelete(itemId)

Delete Role

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let itemId = 56; // Number | 
apiInstance.deleteRoleAdminRoleItemIdDelete(itemId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserAdminUserItemUuidDelete

> Object deleteUserAdminUserItemUuidDelete(itemUuid)

Delete User

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let itemUuid = "itemUuid_example"; // String | 
apiInstance.deleteUserAdminUserItemUuidDelete(itemUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemUuid** | **String**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserRolesAdminDeleterolesRoleIdUserIdDelete

> Object deleteUserRolesAdminDeleterolesRoleIdUserIdDelete(roleId, userId)

Delete User Roles

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let roleId = 56; // Number | 
let userId = 56; // Number | 
apiInstance.deleteUserRolesAdminDeleterolesRoleIdUserIdDelete(roleId, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Number**|  | 
 **userId** | **Number**|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllRolesAdminRolesAllGet

> [RoleModelAll] getAllRolesAdminRolesAllGet()

Get All Roles

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
apiInstance.getAllRolesAdminRolesAllGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[RoleModelAll]**](RoleModelAll.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllUsersAdminUsersAllGet

> [UserModelAll] getAllUsersAdminUsersAllGet()

Get All Users

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
apiInstance.getAllUsersAdminUsersAllGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[UserModelAll]**](UserModelAll.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleAdminRoleItemIdGet

> RoleModelAll getRoleAdminRoleItemIdGet(itemId)

Get Role

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let itemId = 56; // Number | 
apiInstance.getRoleAdminRoleItemIdGet(itemId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**|  | 

### Return type

[**RoleModelAll**](RoleModelAll.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserAdminUserItemUuidGet

> UserModel getUserAdminUserItemUuidGet(itemUuid)

Get User

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let itemUuid = "itemUuid_example"; // String | 
apiInstance.getUserAdminUserItemUuidGet(itemUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemUuid** | **String**|  | 

### Return type

[**UserModel**](UserModel.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexGet

> Object indexGet()

Index

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
apiInstance.indexGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginTokenAdminTokenPost

> Object loginTokenAdminTokenPost(username, password, opts)

Login Token

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
let username = "username_example"; // String | 
let password = "password_example"; // String | 
let opts = {
  'grantType': "grantType_example", // String | 
  'scope': "''", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example" // String | 
};
apiInstance.loginTokenAdminTokenPost(username, password, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **grantType** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] [default to &#39;&#39;]
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## loginUserAdminLoginPost

> Object loginUserAdminLoginPost(loginUserModel)

Login User

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
let loginUserModel = new FastApi.LoginUserModel(); // LoginUserModel | 
apiInstance.loginUserAdminLoginPost(loginUserModel, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginUserModel** | [**LoginUserModel**](LoginUserModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerRolesAdminRoleRegisterPost

> Object registerRolesAdminRoleRegisterPost(roleModel)

Register Roles

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let roleModel = new FastApi.RoleModel(); // RoleModel | 
apiInstance.registerRolesAdminRoleRegisterPost(roleModel, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleModel** | [**RoleModel**](RoleModel.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerUserAdminUserRegisterPost

> Object registerUserAdminUserRegisterPost(userModel)

Register User

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let userModel = new FastApi.UserModel(); // UserModel | 
apiInstance.registerUserAdminUserRegisterPost(userModel, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userModel** | [**UserModel**](UserModel.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## testOauth2AdminTestoauthGet

> Object testOauth2AdminTestoauthGet()

Test Oauth2

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
apiInstance.testOauth2AdminTestoauthGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRoleAdminRoleupdateItemIdPut

> Object updateRoleAdminRoleupdateItemIdPut(itemId, roleModelAll)

Update Role

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let itemId = 56; // Number | 
let roleModelAll = new FastApi.RoleModelAll(); // RoleModelAll | 
apiInstance.updateRoleAdminRoleupdateItemIdPut(itemId, roleModelAll, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**|  | 
 **roleModelAll** | [**RoleModelAll**](RoleModelAll.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserAdminUserroleItemUuidPut

> Object updateUserAdminUserroleItemUuidPut(itemUuid, userModel)

Update User

### Example

```javascript
import FastApi from 'fast_api';
let defaultClient = FastApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FastApi.DefaultApi();
let itemUuid = "itemUuid_example"; // String | 
let userModel = new FastApi.UserModel(); // UserModel | 
apiInstance.updateUserAdminUserroleItemUuidPut(itemUuid, userModel, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemUuid** | **String**|  | 
 **userModel** | [**UserModel**](UserModel.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

