declare const DeleteInstancesId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetInstances: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly instances: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly examples: readonly [1];
                            };
                            readonly owner: {
                                readonly type: "string";
                                readonly examples: readonly ["mail@example.com"];
                            };
                            readonly webhook_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://my.url.com/webhook/handler"];
                            };
                            readonly webhook_events: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["message"];
                                };
                                readonly enum: readonly ["message", "loading_screen", "qr", "authenticated", "auth_failure", "ready", "disconnected", "message_create", "message_revoke_everyone", "message_revoke_me", "message_ack", "message_reaction", "media_uploaded", "group_join", "group_leave", "group_update", "change_state", "call"];
                                readonly examples: readonly ["message", "qr"];
                                readonly description: "`message` `loading_screen` `qr` `authenticated` `auth_failure` `ready` `disconnected` `message_create` `message_revoke_everyone` `message_revoke_me` `message_ack` `message_reaction` `media_uploaded` `group_join` `group_leave` `group_update` `change_state` `call`";
                            };
                            readonly is_trial: {
                                readonly type: "boolean";
                                readonly examples: readonly [0];
                            };
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstancesId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly instances: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly examples: readonly [1];
                            };
                            readonly owner: {
                                readonly type: "string";
                                readonly examples: readonly ["mail@example.com"];
                            };
                            readonly webhook_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://my.url.com/webhook/handler"];
                            };
                            readonly webhook_events: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["message"];
                                };
                                readonly enum: readonly ["message", "loading_screen", "qr", "authenticated", "auth_failure", "ready", "disconnected", "message_create", "message_revoke_everyone", "message_revoke_me", "message_ack", "message_reaction", "media_uploaded", "group_join", "group_leave", "group_update", "change_state", "call"];
                                readonly examples: readonly ["message", "qr"];
                                readonly description: "`message` `loading_screen` `qr` `authenticated` `auth_failure` `ready` `disconnected` `message_create` `message_revoke_everyone` `message_revoke_me` `message_ack` `message_reaction` `media_uploaded` `group_join` `group_leave` `group_update` `change_state` `call`";
                            };
                            readonly is_trial: {
                                readonly type: "boolean";
                                readonly examples: readonly [0];
                            };
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstancesIdClientMe: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly qrCode: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "string";
                            readonly examples: readonly [1];
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly displayName: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Username"];
                                };
                                readonly contactId: {
                                    readonly type: "string";
                                    readonly examples: readonly ["<xxxxx>@c.us"];
                                };
                                readonly formattedNumber: {
                                    readonly type: "string";
                                    readonly examples: readonly ["+xx xx xxx xx xx"];
                                };
                                readonly profilePicUrl: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://pps.whatsapp.net/v/<profileImageUrl>"];
                                };
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/me"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstancesIdClientQr: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly qrCode: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "string";
                            readonly examples: readonly [1];
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly qr_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["data:image/png;base64,iVBORw0KGgoAA...AAAElFTkSuQmCC"];
                                };
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/qr"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstancesIdClientStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly clientStatus: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "string";
                            readonly examples: readonly [1];
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly instanceStatus: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "booting";
                            };
                            readonly enum: readonly ["booting", "loading_screen", "qr", "authenticated", "auth_failure", "ready", "disconnected"];
                            readonly description: "`booting` `loading_screen` `qr` `authenticated` `auth_failure` `ready` `disconnected`";
                        };
                        readonly instanceWebhook: {
                            readonly type: "string";
                            readonly examples: readonly ["https://my.url.com/webhook/handler"];
                        };
                        readonly instanceEvents: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["message"];
                                };
                                readonly enum: readonly ["message", "loading_screen", "qr", "authenticated", "auth_failure", "ready", "disconnected", "message_create", "message_revoke_everyone", "message_revoke_me", "message_ack", "message_reaction", "media_uploaded", "group_join", "group_leave", "group_update", "change_state", "call"];
                                readonly examples: readonly ["message", "qr"];
                                readonly description: "`message` `loading_screen` `qr` `authenticated` `auth_failure` `ready` `disconnected` `message_create` `message_revoke_everyone` `message_revoke_me` `message_ack` `message_reaction` `media_uploaded` `group_join` `group_leave` `group_update` `change_state` `call`";
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/status"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstances: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly instance: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly owner: {
                            readonly type: "string";
                            readonly examples: readonly ["mail@example.com"];
                        };
                        readonly webhook_url: {
                            readonly type: "string";
                            readonly examples: readonly ["https://my.url.com/webhook/handler"];
                        };
                        readonly webhook_events: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["message"];
                            };
                            readonly enum: readonly ["message", "loading_screen", "qr", "authenticated", "auth_failure", "ready", "disconnected", "message_create", "message_revoke_everyone", "message_revoke_me", "message_ack", "message_reaction", "media_uploaded", "group_join", "group_leave", "group_update", "change_state", "call"];
                            readonly examples: readonly ["message", "qr"];
                            readonly description: "`message` `loading_screen` `qr` `authenticated` `auth_failure` `ready` `disconnected` `message_create` `message_revoke_everyone` `message_revoke_me` `message_ack` `message_reaction` `media_uploaded` `group_join` `group_leave` `group_update` `change_state` `call`";
                        };
                        readonly is_trial: {
                            readonly type: "boolean";
                            readonly examples: readonly [0];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionAddGroupParticipant: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<yyyyyyyyyyyyyyy>@g.us"];
            };
            readonly participant: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxxxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/add-group-participant"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionArchiveChat: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly chatArchived: {
                                    readonly type: "boolean";
                                    readonly examples: readonly [true];
                                };
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/archive-chat"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionBlockContact: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly contactId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contactId: {
                            readonly type: "string";
                            readonly description: "blocked Contact Id";
                            readonly examples: readonly ["123456789@c.us"];
                        };
                        readonly blocked: {
                            readonly type: "boolean";
                            readonly description: "status if user is blocked";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/block-contact"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionCreateChannel: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["My Channel Name"];
            };
            readonly description: {
                readonly type: "string";
                readonly examples: readonly ["My Channel description"];
            };
            readonly pictureUrl: {
                readonly type: "string";
                readonly examples: readonly ["https://waapi.app/android-chrome-192x192.png"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/create-channel"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionCreateGroup: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly groupName: {
                readonly type: "string";
                readonly examples: readonly ["My Group Name"];
            };
            readonly groupParticipants: {
                readonly type: "array";
                readonly examples: readonly ["<xxxxx1>@c.us", "<xxxxx2>@c.us"];
                readonly items: {};
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly gid: {
                            readonly type: "object";
                            readonly properties: {
                                readonly server: {
                                    readonly type: "string";
                                    readonly examples: readonly ["g.us"];
                                };
                                readonly user: {
                                    readonly type: "string";
                                    readonly examples: readonly ["12345678912346789"];
                                };
                                readonly _serialized: {
                                    readonly type: "string";
                                    readonly examples: readonly ["12345678912346789g.us"];
                                };
                            };
                        };
                        readonly missingParticipants: {
                            readonly type: "array";
                            readonly examples: readonly ["12345679@c.us"];
                            readonly items: {};
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/create-group"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionDeleteChatById: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly chatId: {
                            readonly type: "string";
                            readonly examples: readonly ["123456789@c.us"];
                        };
                        readonly deleted: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/delete-chat-by-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionDeleteMessageById: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly messageId: {
                readonly type: "string";
                readonly description: "serialized messageId, fromMe_chatId_hash or for groups fromMe_groupId_messageHash_senderId";
                readonly examples: readonly ["<bool>_<xxxxx>@c.us>_<megssageHash>"];
            };
            readonly forEveryone: {
                readonly type: "boolean";
                readonly description: "optional, delete message for all users or just for you, default: false";
                readonly examples: readonly [true];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly messageId: {
                            readonly type: "string";
                            readonly examples: readonly ["true_123456789@c.us_123abc456def890"];
                        };
                        readonly deleted: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/delete-message-by-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionDemoteGroupParticipant: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<yyyyyyyyyyyyyyy>@g.us"];
            };
            readonly participant: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxxxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/demote-group-participant"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionFetchMessages: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly description: "Chat ID <countrycode_short><usernumber>@c.us or @g.us for groups";
                readonly examples: readonly ["50664083362@c.us"];
            };
            readonly limit: {
                readonly type: "number";
                readonly default: 100;
                readonly description: "optional";
                readonly examples: readonly [10];
            };
            readonly fromMe: {
                readonly type: "boolean";
                readonly default: any;
                readonly description: "optional, if nothing is provided, all messages will be included";
                readonly examples: readonly [false];
            };
            readonly includeMedia: {
                readonly type: "boolean";
                readonly default: false;
                readonly description: "optional, can make the request very slow, use with caution";
                readonly examples: readonly [false];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly description: "array of messages";
                            readonly items: {};
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/fetch-messages"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetChannelById: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly channelId: {
                readonly type: "string";
                readonly examples: readonly ["<channelId>@newsletter"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-channel-by-id"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetChannels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-channels"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetChatById: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "object";
                            readonly properties: {
                                readonly server: {
                                    readonly type: "string";
                                    readonly examples: readonly ["c.us"];
                                };
                                readonly user: {
                                    readonly type: "string";
                                    readonly examples: readonly ["123456789"];
                                };
                                readonly _serialized: {
                                    readonly type: "string";
                                    readonly examples: readonly ["123456789@c.us"];
                                };
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly isGroup: {
                            readonly type: "boolean";
                        };
                        readonly isReadOnly: {
                            readonly type: "boolean";
                        };
                        readonly unreadCount: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly examples: readonly ["0"];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly timestamp: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly examples: readonly ["1683475469"];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly pinned: {
                            readonly type: "boolean";
                        };
                        readonly isMuted: {
                            readonly type: "boolean";
                        };
                        readonly muteExpiration: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly examples: readonly ["0"];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-chat-by-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetChatLabels: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly [1];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["label name"];
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-chat-labels"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetChats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly description: "WA Message response";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-chats"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetChatsByLabelId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly labelId: {
                readonly type: "integer";
                readonly examples: readonly ["1"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly description: "WA Message response";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-chats-by-label-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetContactById: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly contactId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "object";
                            readonly properties: {
                                readonly server: {
                                    readonly type: "string";
                                    readonly examples: readonly ["c.us"];
                                };
                                readonly user: {
                                    readonly type: "string";
                                    readonly examples: readonly ["123456789"];
                                };
                                readonly _serialized: {
                                    readonly type: "string";
                                    readonly examples: readonly ["123456789@c.us"];
                                };
                            };
                        };
                        readonly number: {
                            readonly type: "string";
                            readonly examples: readonly ["123456789"];
                        };
                        readonly isBusiness: {
                            readonly type: "boolean";
                        };
                        readonly isEnterprise: {
                            readonly type: "boolean";
                        };
                        readonly labels: {
                            readonly type: "array";
                            readonly items: {};
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly pushname: {
                            readonly type: "string";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly shortName: {
                            readonly type: "string";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["in"];
                        };
                        readonly isMe: {
                            readonly type: "boolean";
                        };
                        readonly isUser: {
                            readonly type: "boolean";
                        };
                        readonly isGroup: {
                            readonly type: "boolean";
                        };
                        readonly isWAContact: {
                            readonly type: "boolean";
                        };
                        readonly isMyContact: {
                            readonly type: "boolean";
                        };
                        readonly isBlocked: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-contact-by-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetContacts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly description: "WA Message response";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-contacts"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetGroupInfo: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@g.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly chatId: {
                            readonly type: "object";
                            readonly properties: {
                                readonly server: {
                                    readonly type: "string";
                                    readonly examples: readonly ["@g.us"];
                                };
                                readonly user: {
                                    readonly type: "string";
                                    readonly examples: readonly ["<xxxxxxx>"];
                                };
                                readonly _serialized: {
                                    readonly type: "string";
                                    readonly examples: readonly ["<xxxxxxx>@g.us"];
                                };
                            };
                        };
                        readonly owner: {
                            readonly type: "object";
                            readonly properties: {
                                readonly server: {
                                    readonly type: "string";
                                    readonly examples: readonly ["@c.us"];
                                };
                                readonly user: {
                                    readonly type: "string";
                                    readonly examples: readonly ["<xxxxxxx>"];
                                };
                                readonly _serialized: {
                                    readonly type: "string";
                                    readonly examples: readonly ["<xxxxxxx>@c.us"];
                                };
                            };
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly examples: readonly ["group name"];
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-05-21T16:26:22.000Z"];
                        };
                        readonly createdAtTimestamp: {
                            readonly type: "integer";
                            readonly examples: readonly [1684859182];
                        };
                        readonly inviteCode: {
                            readonly type: "string";
                            readonly examples: readonly ["abcxyzdefgfh"];
                        };
                        readonly inviteCodeLink: {
                            readonly type: "string";
                            readonly examples: readonly ["https://chat.whatsapp.com/abcxyzdefgfh"];
                        };
                        readonly participants: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly server: {
                                                readonly type: "string";
                                                readonly examples: readonly ["@c.us"];
                                            };
                                            readonly user: {
                                                readonly type: "string";
                                                readonly examples: readonly ["<xxxxxxx>"];
                                            };
                                            readonly _serialized: {
                                                readonly type: "string";
                                                readonly examples: readonly ["<xxxxxxx>@c.us"];
                                            };
                                        };
                                    };
                                    readonly isAdmin: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly isSuperAdmin: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-group-info"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetGroupParticipants: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@g.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly participants: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly server: {
                                                readonly type: "string";
                                                readonly examples: readonly ["@c.us"];
                                            };
                                            readonly user: {
                                                readonly type: "string";
                                                readonly examples: readonly ["<xxxxxxx>"];
                                            };
                                            readonly _serialized: {
                                                readonly type: "string";
                                                readonly examples: readonly ["<xxxxxxx>@c.us"];
                                            };
                                        };
                                    };
                                    readonly isAdmin: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly isSuperAdmin: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-group-participants"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetLabelById: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly labelId: {
                readonly type: "integer";
                readonly examples: readonly [1];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["First label"];
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-label-by-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetLabels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly description: "Label list response";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-labels"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetMessageById: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly messageId: {
                readonly type: "string";
                readonly description: "serialized messageId, <fromMe>_<chatId>_<hash>";
                readonly examples: readonly ["<bool>_<xxxxx>@c.us>_<megssageHash>"];
            };
            readonly includeMedia: {
                readonly type: "boolean";
                readonly default: false;
                readonly description: "optional, include media base64 encoded if enabled";
                readonly examples: readonly [true];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly message: {
                            readonly type: "object";
                            readonly properties: {};
                        };
                        readonly media: {
                            readonly type: "object";
                            readonly properties: {};
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-message-by-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetMessageInfoById: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly messageId: {
                readonly type: "string";
                readonly description: "serialized messageId, <fromMe>_<chatId>_<hash>";
                readonly examples: readonly ["<bool>_<xxxxx>@c.us>_<megssageHash>"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly message: {
                            readonly type: "object";
                            readonly properties: {};
                        };
                        readonly media: {
                            readonly type: "object";
                            readonly properties: {};
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-message-info-by-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetNumberId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly number: {
                readonly type: "string";
                readonly examples: readonly ["50664083362"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly server: {
                                    readonly type: "string";
                                    readonly examples: readonly ["c.us"];
                                };
                                readonly user: {
                                    readonly type: "string";
                                    readonly examples: readonly ["50664083362"];
                                };
                                readonly _serialized: {
                                    readonly type: "string";
                                    readonly description: "proper chatID";
                                    readonly examples: readonly ["50664083362c.us"];
                                };
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-number-id"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionGetProfilePicUrl: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly contactId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "boolean";
                            readonly description: "Profile Picture Response";
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/get-profile-pic-url"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionIsRegisteredUser: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly contactId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "boolean";
                            readonly description: "Registered User Check Response";
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/is-registered-user"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionLogout: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {};
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/logout"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionPromoteGroupParticipant: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<yyyyyyyyyyyyyyy>@g.us"];
            };
            readonly participant: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxxxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/promote-group-participant"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionReboot: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {};
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/reboot"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionRemoveGroupParticipant: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<yyyyyyyyyyyyyyy>@g.us"];
            };
            readonly participant: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxxxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/remove-group-participant"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionSendLocation: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly description: "Chat ID <countrycode_short><usernumber>@c.us or @g.us for groups";
                readonly examples: readonly ["50664083362@c.us"];
            };
            readonly longitude: {
                readonly type: "number";
                readonly description: "longitude of the location";
                readonly examples: readonly [-122.084];
            };
            readonly latitude: {
                readonly type: "number";
                readonly description: "latitude of the location";
                readonly examples: readonly [37.422];
            };
            readonly options: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "optional, Name of the location";
                        readonly examples: readonly ["Googleplex"];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly description: "optional, address of the location";
                        readonly examples: readonly ["1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"];
                    };
                    readonly url: {
                        readonly type: "string";
                        readonly description: "optional, url of the location";
                        readonly examples: readonly ["google.com"];
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly description: "WA Location response";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/send-location"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionSendMedia: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly description: "Chat ID <countrycode_short><usernumber>@c.us or @g.us for groups";
                readonly examples: readonly ["50664083362@c.us"];
            };
            readonly mediaUrl: {
                readonly type: "string";
                readonly examples: readonly ["https://waapi.app/android-chrome-192x192.png"];
            };
            readonly mediaBase64: {
                readonly type: "string";
                readonly examples: readonly ["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"];
            };
            readonly mediaCaption: {
                readonly type: "string";
                readonly examples: readonly ["This is a test image"];
            };
            readonly mediaName: {
                readonly type: "string";
                readonly examples: readonly ["imageName.png"];
            };
            readonly replyToMessageId: {
                readonly type: "string";
                readonly description: "optional, serialized messageId, <fromMe>_<chatId>_<hash>";
                readonly examples: readonly ["<bool>_<xxxxx>@c.us>_<megssageHash>"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly description: "WA Message response";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/send-media"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionSendMessage: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly description: "Chat ID <countrycode_short><usernumber>@c.us or @g.us for groups";
                readonly examples: readonly ["50664083362@c.us"];
            };
            readonly message: {
                readonly type: "string";
                readonly description: "message you want to send";
                readonly examples: readonly ["This is a test message. and I mention @123456789 and @987654321"];
            };
            readonly mentions: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly description: "optional, array of contactIds to mention. Make sure to include the client number in the message like: @123456789. Mentions only work with group chats.";
                };
                readonly description: "optional, array of contactIds to mention. Make sure to include the client number in the message like: @123456789. Mentions only work with group chats.";
                readonly examples: readonly ["123456789@c.us", "987654321@c.us"];
            };
            readonly replyToMessageId: {
                readonly type: "string";
                readonly description: "optional,  serialized messageId, <fromMe>_<chatId>_<hash>";
                readonly examples: readonly ["<bool>_<xxxxx>@c.us>_<megssageHash>"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly minimum: -9223372036854776000;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly description: "WA Message response";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/send-message"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionSendSeen: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly seenSend: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/send-seen"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionSendVcard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
            readonly vCard: {
                readonly type: "object";
                readonly properties: {
                    readonly waid: {
                        readonly type: "string";
                        readonly description: "optional, first part of the chatId (<xxxxx>@c.us). Makes sure the contact is shown with an image and added to Whatsapp contacts properly.";
                        readonly examples: readonly ["<xxxxx>"];
                    };
                    readonly iternationalnumber: {
                        readonly type: "string";
                        readonly description: "optional, number of the contact";
                        readonly examples: readonly ["+50664083362"];
                    };
                    readonly lastname: {
                        readonly type: "string";
                        readonly description: "optional, last name of the contact";
                        readonly examples: readonly ["lastname"];
                    };
                    readonly firstname: {
                        readonly type: "string";
                        readonly description: "optional, first name of the contact";
                        readonly examples: readonly ["firstname"];
                    };
                    readonly displayname: {
                        readonly type: "string";
                        readonly description: "optional, displayname of the contact";
                        readonly examples: readonly ["displayname"];
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly description: "optional, title of the contact, like Mr or Ms";
                        readonly examples: readonly ["title"];
                    };
                    readonly secondname: {
                        readonly type: "string";
                        readonly description: "optional, secondname of the contact";
                        readonly examples: readonly ["secondname"];
                    };
                    readonly additionalname: {
                        readonly type: "string";
                        readonly description: "optional, additionalname of the contact";
                        readonly examples: readonly ["additionalname"];
                    };
                    readonly organization: {
                        readonly type: "string";
                        readonly description: "optional, organization of the contact";
                        readonly examples: readonly ["organization"];
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "optional, email of the contact";
                        readonly examples: readonly ["email"];
                    };
                    readonly street: {
                        readonly type: "string";
                        readonly description: "optional, street and number of the contact";
                        readonly examples: readonly ["street 1"];
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "optional, city of the contact";
                        readonly examples: readonly ["city"];
                    };
                    readonly zip: {
                        readonly type: "string";
                        readonly description: "optional, zipcode of the contact";
                        readonly examples: readonly ["12345"];
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "optional, state of the contact";
                        readonly examples: readonly ["state"];
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "optional, country of the contact";
                        readonly examples: readonly ["country"];
                    };
                    readonly website: {
                        readonly type: "string";
                        readonly description: "optional, website of the contact";
                        readonly examples: readonly ["https://example.com"];
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/send-vcard"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionSubscribeToChannel: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly channelId: {
                readonly type: "string";
                readonly examples: readonly ["<channelId>@newsletter"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/subscribe-to-channel"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionUnarchiveChat: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly chatUnarchived: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/unarchive-chat"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionUnblockContact: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly contactId: {
                readonly type: "string";
                readonly examples: readonly ["<xxxxx>@c.us"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contactId: {
                            readonly type: "string";
                            readonly description: "blocked Contact Id";
                            readonly examples: readonly ["123456789@c.us"];
                        };
                        readonly unblocked: {
                            readonly type: "boolean";
                            readonly description: "status if user is unblocked";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/unblock-contact"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionUnsubscribeFromChannel: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly channelId: {
                readonly type: "string";
                readonly examples: readonly ["<channelId>@newsletter"];
            };
            readonly deleteChannelData: {
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/unsubscribe-from-channel"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostInstancesIdClientActionUpdateGroupInfo: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chatId: {
                readonly type: "string";
                readonly examples: readonly ["<yyyyyyyy>@g.us"];
            };
            readonly subject: {
                readonly type: "string";
                readonly examples: readonly ["My new Group name"];
            };
            readonly description: {
                readonly type: "string";
                readonly examples: readonly ["My Description"];
            };
            readonly pictureUrl: {
                readonly type: "string";
                readonly examples: readonly ["https://www.example.com/my/image.png"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly gid: {
                            readonly type: "object";
                            readonly properties: {
                                readonly server: {
                                    readonly type: "string";
                                    readonly examples: readonly ["g.us"];
                                };
                                readonly user: {
                                    readonly type: "string";
                                    readonly examples: readonly ["12345678912346789"];
                                };
                                readonly _serialized: {
                                    readonly type: "string";
                                    readonly examples: readonly ["12345678912346789g.us"];
                                };
                            };
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly examples: readonly ["My new Group name"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["My Description"];
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1/client/action/update-group-info"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutInstancesId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly webhook: {
                readonly type: "object";
                readonly properties: {
                    readonly url: {
                        readonly type: "string";
                        readonly examples: readonly ["https://my.url.com/webhook/handler"];
                    };
                    readonly events: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["message"];
                        };
                        readonly enum: readonly ["message", "loading_screen", "qr", "authenticated", "auth_failure", "ready", "disconnected", "message_create", "message_revoke_everyone", "message_revoke_me", "message_ack", "message_reaction", "media_uploaded", "group_join", "group_leave", "group_update", "change_state", "call"];
                        readonly examples: readonly ["message", "qr"];
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: -9223372036854776000;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "success";
                            };
                            readonly enum: readonly ["success", "error"];
                            readonly description: "`success` `error`";
                        };
                        readonly instanceId: {
                            readonly type: "string";
                            readonly examples: readonly [1];
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly instanceStatus: {
                            readonly type: "string";
                            readonly items: {
                                readonly type: "string";
                                readonly example: "booting";
                            };
                            readonly enum: readonly ["booting", "loading_screen", "qr", "authenticated", "auth_failure", "ready", "disconnected"];
                            readonly description: "`booting` `loading_screen` `qr` `authenticated` `auth_failure` `ready` `disconnected`";
                        };
                        readonly instanceWebhook: {
                            readonly type: "string";
                            readonly examples: readonly ["https://my.url.com/webhook/handler"];
                        };
                        readonly instanceEvents: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["message"];
                                };
                                readonly enum: readonly ["message", "loading_screen", "qr", "authenticated", "auth_failure", "ready", "disconnected", "message_create", "message_revoke_everyone", "message_revoke_me", "message_ack", "message_reaction", "media_uploaded", "group_join", "group_leave", "group_update", "change_state", "call"];
                                readonly examples: readonly ["message", "qr"];
                                readonly description: "`message` `loading_screen` `qr` `authenticated` `auth_failure` `ready` `disconnected` `message_create` `message_revoke_everyone` `message_revoke_me` `message_ack` `message_reaction` `media_uploaded` `group_join` `group_leave` `group_update` `change_state` `call`";
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "string";
                            readonly examples: readonly ["https://waapi.app/api/v1/instances/1"];
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly items: {
                        readonly type: "string";
                        readonly example: "success";
                    };
                    readonly enum: readonly ["success", "error"];
                    readonly description: "`success` `error`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteInstancesId, GetInstances, GetInstancesId, GetInstancesIdClientMe, GetInstancesIdClientQr, GetInstancesIdClientStatus, PostInstances, PostInstancesIdClientActionAddGroupParticipant, PostInstancesIdClientActionArchiveChat, PostInstancesIdClientActionBlockContact, PostInstancesIdClientActionCreateChannel, PostInstancesIdClientActionCreateGroup, PostInstancesIdClientActionDeleteChatById, PostInstancesIdClientActionDeleteMessageById, PostInstancesIdClientActionDemoteGroupParticipant, PostInstancesIdClientActionFetchMessages, PostInstancesIdClientActionGetChannelById, PostInstancesIdClientActionGetChannels, PostInstancesIdClientActionGetChatById, PostInstancesIdClientActionGetChatLabels, PostInstancesIdClientActionGetChats, PostInstancesIdClientActionGetChatsByLabelId, PostInstancesIdClientActionGetContactById, PostInstancesIdClientActionGetContacts, PostInstancesIdClientActionGetGroupInfo, PostInstancesIdClientActionGetGroupParticipants, PostInstancesIdClientActionGetLabelById, PostInstancesIdClientActionGetLabels, PostInstancesIdClientActionGetMessageById, PostInstancesIdClientActionGetMessageInfoById, PostInstancesIdClientActionGetNumberId, PostInstancesIdClientActionGetProfilePicUrl, PostInstancesIdClientActionIsRegisteredUser, PostInstancesIdClientActionLogout, PostInstancesIdClientActionPromoteGroupParticipant, PostInstancesIdClientActionReboot, PostInstancesIdClientActionRemoveGroupParticipant, PostInstancesIdClientActionSendLocation, PostInstancesIdClientActionSendMedia, PostInstancesIdClientActionSendMessage, PostInstancesIdClientActionSendSeen, PostInstancesIdClientActionSendVcard, PostInstancesIdClientActionSubscribeToChannel, PostInstancesIdClientActionUnarchiveChat, PostInstancesIdClientActionUnblockContact, PostInstancesIdClientActionUnsubscribeFromChannel, PostInstancesIdClientActionUpdateGroupInfo, PutInstancesId };
