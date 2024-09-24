import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Retrieve a list of your instances.
     *
     * @summary list instances
     */
    getInstances(): Promise<FetchResponse<200, types.GetInstancesResponse200>>;
    /**
     * Create a new instance
     *
     * @summary create instance
     */
    postInstances(): Promise<FetchResponse<200, types.PostInstancesResponse200>>;
    /**
     * Retrieve a single instance by its ID
     *
     * @summary retrieve instance
     */
    getInstancesId(metadata: types.GetInstancesIdMetadataParam): Promise<FetchResponse<200, types.GetInstancesIdResponse200>>;
    /**
     * Update the instance.
     *
     * @summary update instance
     */
    putInstancesId(body: types.PutInstancesIdBodyParam, metadata: types.PutInstancesIdMetadataParam): Promise<FetchResponse<200, types.PutInstancesIdResponse200>>;
    /**
     * delete an instance by ID
     *
     * @summary delete instance
     */
    deleteInstancesId(metadata: types.DeleteInstancesIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * retrieve the status of your running client
     *
     * @summary client status of instance
     */
    getInstancesIdClientStatus(metadata: types.GetInstancesIdClientStatusMetadataParam): Promise<FetchResponse<200, types.GetInstancesIdClientStatusResponse200>>;
    /**
     * retrieve a base64 encoded QR Code of your instance
     *
     * @summary retrieve QR Code
     */
    getInstancesIdClientQr(metadata: types.GetInstancesIdClientQrMetadataParam): Promise<FetchResponse<200, types.GetInstancesIdClientQrResponse200>>;
    /**
     * retrieve general information of the whatsapp user conntected to your instance
     *
     * @summary retrieve basic client information
     */
    getInstancesIdClientMe(metadata: types.GetInstancesIdClientMeMetadataParam): Promise<FetchResponse<200, types.GetInstancesIdClientMeResponse200>>;
    /**
     * Send a message to a contact or group
     *
     * @summary send a message
     */
    postInstancesIdClientActionSendMessage(body: types.PostInstancesIdClientActionSendMessageBodyParam, metadata: types.PostInstancesIdClientActionSendMessageMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionSendMessageResponse200>>;
    /**
     * send a media file
     *
     */
    postInstancesIdClientActionSendMedia(body: types.PostInstancesIdClientActionSendMediaBodyParam, metadata: types.PostInstancesIdClientActionSendMediaMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionSendMediaResponse200>>;
    /**
     * Mark a chat as seen
     *
     * @summary send seen
     */
    postInstancesIdClientActionSendSeen(body: types.PostInstancesIdClientActionSendSeenBodyParam, metadata: types.PostInstancesIdClientActionSendSeenMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionSendSeenResponse200>>;
    /**
     * Send a vCard
     *
     * @summary send vcard
     */
    postInstancesIdClientActionSendVcard(body: types.PostInstancesIdClientActionSendVcardBodyParam, metadata: types.PostInstancesIdClientActionSendVcardMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionSendVcardResponse200>>;
    /**
     * Send a location to a contact or group
     *
     * @summary send location
     */
    postInstancesIdClientActionSendLocation(body: types.PostInstancesIdClientActionSendLocationBodyParam, metadata: types.PostInstancesIdClientActionSendLocationMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionSendLocationResponse200>>;
    /**
     * get all chats
     *
     */
    postInstancesIdClientActionGetChats(metadata: types.PostInstancesIdClientActionGetChatsMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetChatsResponse200>>;
    /**
     * fetch messages of a chat
     *
     * @summary fetch messages
     */
    postInstancesIdClientActionFetchMessages(body: types.PostInstancesIdClientActionFetchMessagesBodyParam, metadata: types.PostInstancesIdClientActionFetchMessagesMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionFetchMessagesResponse200>>;
    /**
     * get a message by id
     *
     * @summary get message by id
     */
    postInstancesIdClientActionGetMessageById(body: types.PostInstancesIdClientActionGetMessageByIdBodyParam, metadata: types.PostInstancesIdClientActionGetMessageByIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetMessageByIdResponse200>>;
    /**
     * get a message info by id
     *
     * @summary get message info by id
     */
    postInstancesIdClientActionGetMessageInfoById(body: types.PostInstancesIdClientActionGetMessageInfoByIdBodyParam, metadata: types.PostInstancesIdClientActionGetMessageInfoByIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetMessageInfoByIdResponse200>>;
    /**
     * delete a message by id
     *
     * @summary delete message by id
     */
    postInstancesIdClientActionDeleteMessageById(body: types.PostInstancesIdClientActionDeleteMessageByIdBodyParam, metadata: types.PostInstancesIdClientActionDeleteMessageByIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionDeleteMessageByIdResponse200>>;
    /**
     * get all contacts
     *
     */
    postInstancesIdClientActionGetContacts(metadata: types.PostInstancesIdClientActionGetContactsMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetContactsResponse200>>;
    /**
     * Request the proper chatID for a given number. Especially for countries which do not
     * follow the default chatId fromat like brazil, mexico and argentina, this will return the
     * proper chatId.
     *
     * @summary get chatID from number
     */
    postInstancesIdClientActionGetNumberId(body: types.PostInstancesIdClientActionGetNumberIdBodyParam, metadata: types.PostInstancesIdClientActionGetNumberIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetNumberIdResponse200>>;
    /**
     * Check if a given contactId is registered.
     *
     * @summary is registered user
     */
    postInstancesIdClientActionIsRegisteredUser(body: types.PostInstancesIdClientActionIsRegisteredUserBodyParam, metadata: types.PostInstancesIdClientActionIsRegisteredUserMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionIsRegisteredUserResponse200>>;
    /**
     * Returns the contact ID's profile picture URL, if privacy settings allow it.
     *
     * @summary get profile pic url
     */
    postInstancesIdClientActionGetProfilePicUrl(body: types.PostInstancesIdClientActionGetProfilePicUrlBodyParam, metadata: types.PostInstancesIdClientActionGetProfilePicUrlMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetProfilePicUrlResponse200>>;
    /**
     * Get contact by ID
     *
     * @summary get contact by id
     */
    postInstancesIdClientActionGetContactById(body: types.PostInstancesIdClientActionGetContactByIdBodyParam, metadata: types.PostInstancesIdClientActionGetContactByIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetContactByIdResponse200>>;
    /**
     * Block contact by ID
     *
     * @summary block contact by id
     */
    postInstancesIdClientActionBlockContact(body: types.PostInstancesIdClientActionBlockContactBodyParam, metadata: types.PostInstancesIdClientActionBlockContactMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionBlockContactResponse200>>;
    /**
     * Unblock contact by ID
     *
     * @summary unblock contact by id
     */
    postInstancesIdClientActionUnblockContact(body: types.PostInstancesIdClientActionUnblockContactBodyParam, metadata: types.PostInstancesIdClientActionUnblockContactMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionUnblockContactResponse200>>;
    /**
     * Get chat by ID
     *
     * @summary get chat by id
     */
    postInstancesIdClientActionGetChatById(body: types.PostInstancesIdClientActionGetChatByIdBodyParam, metadata: types.PostInstancesIdClientActionGetChatByIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetChatByIdResponse200>>;
    /**
     * Delete chat by ID
     *
     * @summary delete chat by id
     */
    postInstancesIdClientActionDeleteChatById(body: types.PostInstancesIdClientActionDeleteChatByIdBodyParam, metadata: types.PostInstancesIdClientActionDeleteChatByIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionDeleteChatByIdResponse200>>;
    /**
     * Create a group
     *
     * @summary create group
     */
    postInstancesIdClientActionCreateGroup(body: types.PostInstancesIdClientActionCreateGroupBodyParam, metadata: types.PostInstancesIdClientActionCreateGroupMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionCreateGroupResponse200>>;
    /**
     * Get group participants
     *
     * @summary get group participants
     */
    postInstancesIdClientActionGetGroupParticipants(body: types.PostInstancesIdClientActionGetGroupParticipantsBodyParam, metadata: types.PostInstancesIdClientActionGetGroupParticipantsMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetGroupParticipantsResponse200>>;
    /**
     * Get group info
     *
     * @summary get group info
     */
    postInstancesIdClientActionGetGroupInfo(body: types.PostInstancesIdClientActionGetGroupInfoBodyParam, metadata: types.PostInstancesIdClientActionGetGroupInfoMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetGroupInfoResponse200>>;
    /**
     * Update Group Information
     *
     * @summary update group info
     */
    postInstancesIdClientActionUpdateGroupInfo(body: types.PostInstancesIdClientActionUpdateGroupInfoBodyParam, metadata: types.PostInstancesIdClientActionUpdateGroupInfoMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionUpdateGroupInfoResponse200>>;
    /**
     * Add a participant to a group
     *
     * @summary add group participant
     */
    postInstancesIdClientActionAddGroupParticipant(body: types.PostInstancesIdClientActionAddGroupParticipantBodyParam, metadata: types.PostInstancesIdClientActionAddGroupParticipantMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionAddGroupParticipantResponse200>>;
    /**
     * Remove a participant from a group
     *
     * @summary remove group participant
     */
    postInstancesIdClientActionRemoveGroupParticipant(body: types.PostInstancesIdClientActionRemoveGroupParticipantBodyParam, metadata: types.PostInstancesIdClientActionRemoveGroupParticipantMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionRemoveGroupParticipantResponse200>>;
    /**
     * Promote a participant to admin
     *
     * @summary promote group participant
     */
    postInstancesIdClientActionPromoteGroupParticipant(body: types.PostInstancesIdClientActionPromoteGroupParticipantBodyParam, metadata: types.PostInstancesIdClientActionPromoteGroupParticipantMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionPromoteGroupParticipantResponse200>>;
    /**
     * Demote a participant from admin to normal participant
     *
     * @summary demote group participant
     */
    postInstancesIdClientActionDemoteGroupParticipant(body: types.PostInstancesIdClientActionDemoteGroupParticipantBodyParam, metadata: types.PostInstancesIdClientActionDemoteGroupParticipantMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionDemoteGroupParticipantResponse200>>;
    /**
     * Create a channel
     *
     * @summary create a channel
     */
    postInstancesIdClientActionCreateChannel(body: types.PostInstancesIdClientActionCreateChannelBodyParam, metadata: types.PostInstancesIdClientActionCreateChannelMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionCreateChannelResponse200>>;
    /**
     * get your channels
     *
     * @summary get channels
     */
    postInstancesIdClientActionGetChannels(metadata: types.PostInstancesIdClientActionGetChannelsMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetChannelsResponse200>>;
    /**
     * get channel by id
     *
     * @summary get channel by id
     */
    postInstancesIdClientActionGetChannelById(body: types.PostInstancesIdClientActionGetChannelByIdBodyParam, metadata: types.PostInstancesIdClientActionGetChannelByIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetChannelByIdResponse200>>;
    /**
     * subscribe to channel
     *
     * @summary subscribe to channel
     */
    postInstancesIdClientActionSubscribeToChannel(body: types.PostInstancesIdClientActionSubscribeToChannelBodyParam, metadata: types.PostInstancesIdClientActionSubscribeToChannelMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionSubscribeToChannelResponse200>>;
    /**
     * unsubscribe from channel
     *
     * @summary unsubscribe from channel
     */
    postInstancesIdClientActionUnsubscribeFromChannel(body: types.PostInstancesIdClientActionUnsubscribeFromChannelBodyParam, metadata: types.PostInstancesIdClientActionUnsubscribeFromChannelMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionUnsubscribeFromChannelResponse200>>;
    /**
     * archive chat
     *
     * @summary archive chat
     */
    postInstancesIdClientActionArchiveChat(body: types.PostInstancesIdClientActionArchiveChatBodyParam, metadata: types.PostInstancesIdClientActionArchiveChatMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionArchiveChatResponse200>>;
    /**
     * unarchive chat
     *
     * @summary unarchive chat
     */
    postInstancesIdClientActionUnarchiveChat(body: types.PostInstancesIdClientActionUnarchiveChatBodyParam, metadata: types.PostInstancesIdClientActionUnarchiveChatMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionUnarchiveChatResponse200>>;
    /**
     * get all labels
     *
     */
    postInstancesIdClientActionGetLabels(metadata: types.PostInstancesIdClientActionGetLabelsMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetLabelsResponse200>>;
    /**
     * Get label by ID
     *
     * @summary get label by id
     */
    postInstancesIdClientActionGetLabelById(body: types.PostInstancesIdClientActionGetLabelByIdBodyParam, metadata: types.PostInstancesIdClientActionGetLabelByIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetLabelByIdResponse200>>;
    /**
     * Get chat labels by chat ID
     *
     * @summary get chat labels
     */
    postInstancesIdClientActionGetChatLabels(body: types.PostInstancesIdClientActionGetChatLabelsBodyParam, metadata: types.PostInstancesIdClientActionGetChatLabelsMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetChatLabelsResponse200>>;
    /**
     * Get chats by label ID
     *
     * @summary get chats by labelId
     */
    postInstancesIdClientActionGetChatsByLabelId(body: types.PostInstancesIdClientActionGetChatsByLabelIdBodyParam, metadata: types.PostInstancesIdClientActionGetChatsByLabelIdMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionGetChatsByLabelIdResponse200>>;
    /**
     * Logs out the client, closing the current session
     *
     * @summary logout
     */
    postInstancesIdClientActionLogout(metadata: types.PostInstancesIdClientActionLogoutMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionLogoutResponse200>>;
    /**
     * Reboots your instance
     *
     * @summary reboot
     */
    postInstancesIdClientActionReboot(metadata: types.PostInstancesIdClientActionRebootMetadataParam): Promise<FetchResponse<200, types.PostInstancesIdClientActionRebootResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
