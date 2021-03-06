/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserModel model module.
 * @module model/UserModel
 * @version 0.1.0
 */
class UserModel {
    /**
     * Constructs a new <code>UserModel</code>.
     * @alias module:model/UserModel
     * @param email {String} 
     * @param username {String} 
     * @param firstName {String} 
     * @param lastName {String} 
     * @param password {String} 
     */
    constructor(email, username, firstName, lastName, password) { 
        
        UserModel.initialize(this, email, username, firstName, lastName, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, username, firstName, lastName, password) { 
        obj['email'] = email;
        obj['username'] = username;
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>UserModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserModel} obj Optional instance to populate.
     * @return {module:model/UserModel} The populated <code>UserModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserModel();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('middle_name')) {
                obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
UserModel.prototype['email'] = undefined;

/**
 * @member {String} username
 */
UserModel.prototype['username'] = undefined;

/**
 * @member {String} first_name
 */
UserModel.prototype['first_name'] = undefined;

/**
 * @member {String} middle_name
 */
UserModel.prototype['middle_name'] = undefined;

/**
 * @member {String} last_name
 */
UserModel.prototype['last_name'] = undefined;

/**
 * @member {String} password
 */
UserModel.prototype['password'] = undefined;

/**
 * @member {Boolean} disabled
 */
UserModel.prototype['disabled'] = undefined;






export default UserModel;

