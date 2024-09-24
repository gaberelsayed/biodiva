"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'waapi/1.0.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Retrieve a list of your instances.
     *
     * @summary list instances
     */
    SDK.prototype.getInstances = function () {
        return this.core.fetch('/instances', 'get');
    };
    /**
     * Create a new instance
     *
     * @summary create instance
     */
    SDK.prototype.postInstances = function () {
        return this.core.fetch('/instances', 'post');
    };
    /**
     * Retrieve a single instance by its ID
     *
     * @summary retrieve instance
     */
    SDK.prototype.getInstancesId = function (metadata) {
        return this.core.fetch('/instances/{id}', 'get', metadata);
    };
    /**
     * Update the instance.
     *
     * @summary update instance
     */
    SDK.prototype.putInstancesId = function (body, metadata) {
        return this.core.fetch('/instances/{id}', 'put', body, metadata);
    };
    /**
     * delete an instance by ID
     *
     * @summary delete instance
     */
    SDK.prototype.deleteInstancesId = function (metadata) {
        return this.core.fetch('/instances/{id}', 'delete', metadata);
    };
    /**
     * retrieve the status of your running client
     *
     * @summary client status of instance
     */
    SDK.prototype.getInstancesIdClientStatus = function (metadata) {
        return this.core.fetch('/instances/{id}/client/status', 'get', metadata);
    };
    /**
     * retrieve a base64 encoded QR Code of your instance
     *
     * @summary retrieve QR Code
     */
    SDK.prototype.getInstancesIdClientQr = function (metadata) {
        return this.core.fetch('/instances/{id}/client/qr', 'get', metadata);
    };
    /**
     * retrieve general information of the whatsapp user conntected to your instance
     *
     * @summary retrieve basic client information
     */
    SDK.prototype.getInstancesIdClientMe = function (metadata) {
        return this.core.fetch('/instances/{id}/client/me', 'get', metadata);
    };
    /**
     * Send a message to a contact or group
     *
     * @summary send a message
     */
    SDK.prototype.postInstancesIdClientActionSendMessage = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/send-message', 'post', body, metadata);
    };
    /**
     * send a media file
     *
     */
    SDK.prototype.postInstancesIdClientActionSendMedia = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/send-media', 'post', body, metadata);
    };
    /**
     * Mark a chat as seen
     *
     * @summary send seen
     */
    SDK.prototype.postInstancesIdClientActionSendSeen = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/send-seen', 'post', body, metadata);
    };
    /**
     * Send a vCard
     *
     * @summary send vcard
     */
    SDK.prototype.postInstancesIdClientActionSendVcard = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/send-vcard', 'post', body, metadata);
    };
    /**
     * Send a location to a contact or group
     *
     * @summary send location
     */
    SDK.prototype.postInstancesIdClientActionSendLocation = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/send-location', 'post', body, metadata);
    };
    /**
     * get all chats
     *
     */
    SDK.prototype.postInstancesIdClientActionGetChats = function (metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-chats', 'post', metadata);
    };
    /**
     * fetch messages of a chat
     *
     * @summary fetch messages
     */
    SDK.prototype.postInstancesIdClientActionFetchMessages = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/fetch-messages', 'post', body, metadata);
    };
    /**
     * get a message by id
     *
     * @summary get message by id
     */
    SDK.prototype.postInstancesIdClientActionGetMessageById = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-message-by-id', 'post', body, metadata);
    };
    /**
     * get a message info by id
     *
     * @summary get message info by id
     */
    SDK.prototype.postInstancesIdClientActionGetMessageInfoById = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-message-info-by-id', 'post', body, metadata);
    };
    /**
     * delete a message by id
     *
     * @summary delete message by id
     */
    SDK.prototype.postInstancesIdClientActionDeleteMessageById = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/delete-message-by-id', 'post', body, metadata);
    };
    /**
     * get all contacts
     *
     */
    SDK.prototype.postInstancesIdClientActionGetContacts = function (metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-contacts', 'post', metadata);
    };
    /**
     * Request the proper chatID for a given number. Especially for countries which do not
     * follow the default chatId fromat like brazil, mexico and argentina, this will return the
     * proper chatId.
     *
     * @summary get chatID from number
     */
    SDK.prototype.postInstancesIdClientActionGetNumberId = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-number-id', 'post', body, metadata);
    };
    /**
     * Check if a given contactId is registered.
     *
     * @summary is registered user
     */
    SDK.prototype.postInstancesIdClientActionIsRegisteredUser = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/is-registered-user', 'post', body, metadata);
    };
    /**
     * Returns the contact ID's profile picture URL, if privacy settings allow it.
     *
     * @summary get profile pic url
     */
    SDK.prototype.postInstancesIdClientActionGetProfilePicUrl = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-profile-pic-url', 'post', body, metadata);
    };
    /**
     * Get contact by ID
     *
     * @summary get contact by id
     */
    SDK.prototype.postInstancesIdClientActionGetContactById = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-contact-by-id', 'post', body, metadata);
    };
    /**
     * Block contact by ID
     *
     * @summary block contact by id
     */
    SDK.prototype.postInstancesIdClientActionBlockContact = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/block-contact', 'post', body, metadata);
    };
    /**
     * Unblock contact by ID
     *
     * @summary unblock contact by id
     */
    SDK.prototype.postInstancesIdClientActionUnblockContact = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/unblock-contact', 'post', body, metadata);
    };
    /**
     * Get chat by ID
     *
     * @summary get chat by id
     */
    SDK.prototype.postInstancesIdClientActionGetChatById = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-chat-by-id', 'post', body, metadata);
    };
    /**
     * Delete chat by ID
     *
     * @summary delete chat by id
     */
    SDK.prototype.postInstancesIdClientActionDeleteChatById = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/delete-chat-by-id', 'post', body, metadata);
    };
    /**
     * Create a group
     *
     * @summary create group
     */
    SDK.prototype.postInstancesIdClientActionCreateGroup = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/create-group', 'post', body, metadata);
    };
    /**
     * Get group participants
     *
     * @summary get group participants
     */
    SDK.prototype.postInstancesIdClientActionGetGroupParticipants = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-group-participants', 'post', body, metadata);
    };
    /**
     * Get group info
     *
     * @summary get group info
     */
    SDK.prototype.postInstancesIdClientActionGetGroupInfo = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-group-info', 'post', body, metadata);
    };
    /**
     * Update Group Information
     *
     * @summary update group info
     */
    SDK.prototype.postInstancesIdClientActionUpdateGroupInfo = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/update-group-info', 'post', body, metadata);
    };
    /**
     * Add a participant to a group
     *
     * @summary add group participant
     */
    SDK.prototype.postInstancesIdClientActionAddGroupParticipant = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/add-group-participant', 'post', body, metadata);
    };
    /**
     * Remove a participant from a group
     *
     * @summary remove group participant
     */
    SDK.prototype.postInstancesIdClientActionRemoveGroupParticipant = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/remove-group-participant', 'post', body, metadata);
    };
    /**
     * Promote a participant to admin
     *
     * @summary promote group participant
     */
    SDK.prototype.postInstancesIdClientActionPromoteGroupParticipant = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/promote-group-participant', 'post', body, metadata);
    };
    /**
     * Demote a participant from admin to normal participant
     *
     * @summary demote group participant
     */
    SDK.prototype.postInstancesIdClientActionDemoteGroupParticipant = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/demote-group-participant', 'post', body, metadata);
    };
    /**
     * Create a channel
     *
     * @summary create a channel
     */
    SDK.prototype.postInstancesIdClientActionCreateChannel = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/create-channel', 'post', body, metadata);
    };
    /**
     * get your channels
     *
     * @summary get channels
     */
    SDK.prototype.postInstancesIdClientActionGetChannels = function (metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-channels', 'post', metadata);
    };
    /**
     * get channel by id
     *
     * @summary get channel by id
     */
    SDK.prototype.postInstancesIdClientActionGetChannelById = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-channel-by-id', 'post', body, metadata);
    };
    /**
     * subscribe to channel
     *
     * @summary subscribe to channel
     */
    SDK.prototype.postInstancesIdClientActionSubscribeToChannel = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/subscribe-to-channel', 'post', body, metadata);
    };
    /**
     * unsubscribe from channel
     *
     * @summary unsubscribe from channel
     */
    SDK.prototype.postInstancesIdClientActionUnsubscribeFromChannel = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/unsubscribe-from-channel', 'post', body, metadata);
    };
    /**
     * archive chat
     *
     * @summary archive chat
     */
    SDK.prototype.postInstancesIdClientActionArchiveChat = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/archive-chat', 'post', body, metadata);
    };
    /**
     * unarchive chat
     *
     * @summary unarchive chat
     */
    SDK.prototype.postInstancesIdClientActionUnarchiveChat = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/unarchive-chat', 'post', body, metadata);
    };
    /**
     * get all labels
     *
     */
    SDK.prototype.postInstancesIdClientActionGetLabels = function (metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-labels', 'post', metadata);
    };
    /**
     * Get label by ID
     *
     * @summary get label by id
     */
    SDK.prototype.postInstancesIdClientActionGetLabelById = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-label-by-id', 'post', body, metadata);
    };
    /**
     * Get chat labels by chat ID
     *
     * @summary get chat labels
     */
    SDK.prototype.postInstancesIdClientActionGetChatLabels = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-chat-labels', 'post', body, metadata);
    };
    /**
     * Get chats by label ID
     *
     * @summary get chats by labelId
     */
    SDK.prototype.postInstancesIdClientActionGetChatsByLabelId = function (body, metadata) {
        return this.core.fetch('/instances/{id}/client/action/get-chats-by-label-id', 'post', body, metadata);
    };
    /**
     * Logs out the client, closing the current session
     *
     * @summary logout
     */
    SDK.prototype.postInstancesIdClientActionLogout = function (metadata) {
        return this.core.fetch('/instances/{id}/client/action/logout', 'post', metadata);
    };
    /**
     * Reboots your instance
     *
     * @summary reboot
     */
    SDK.prototype.postInstancesIdClientActionReboot = function (metadata) {
        return this.core.fetch('/instances/{id}/client/action/reboot', 'post', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
