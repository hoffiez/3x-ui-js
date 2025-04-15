import type { Inbound, InboundOptions } from "./lib/types/inbound";
import type { Client, ClientOptions } from "./lib/types";
export declare class Api {
    readonly host: string;
    readonly port: number;
    readonly protocol: string;
    readonly path: string;
    readonly username: string;
    private readonly _password;
    private readonly _logger;
    private readonly _cache;
    private readonly _axios;
    private readonly _mutex;
    private _cookie;
    constructor(uri: string);
    set debug(enable: boolean);
    set stdTTL(ttl: number);
    flushCache(): void;
    private login;
    private get;
    private post;
    private cacheInbound;
    checkHealth(): Promise<boolean>;
    getInbounds(): Promise<Inbound[]>;
    getInbound(id: number): Promise<Inbound | null>;
    addInbound(options: InboundOptions): Promise<Inbound | null>;
    updateInbound(id: number, options: Partial<InboundOptions>): Promise<Inbound | null>;
    resetInboundsStat(): Promise<boolean>;
    resetInboundStat(id: number): Promise<boolean>;
    deleteInbound(id: number): Promise<boolean>;
    getClient(clientId: string): Promise<Client | null>;
    getClientOptions(clientId: string): Promise<import("./lib/types").ClientVmessOptions | import("./lib/types").ClientTrojanOptions | import("./lib/types").ClientShadowsocksOptions | null>;
    addClient(inboundId: number, options: ClientOptions): Promise<Client | null>;
    updateClient(clientId: string, options: Partial<ClientOptions>): Promise<Client | null>;
    deleteClient(clientId: string): Promise<boolean | undefined>;
    getClientIps(clientId: string): Promise<string[]>;
    resetClientIps(clientId: string): Promise<boolean>;
    resetClientStat(clientId: string): Promise<boolean>;
    deleteDepletedClients(): Promise<boolean>;
    deleteInboundDepletedClients(inboundId: number): Promise<boolean>;
    getOnlineClients(): Promise<string[]>;
    sendBackup(): Promise<boolean>;
}
