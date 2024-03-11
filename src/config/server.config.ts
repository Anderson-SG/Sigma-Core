import { IServerConfig } from "../interfaces/server-config.interface";

export const serverConfig: IServerConfig = {
    name: 'Sigma Core Api.',
    port: parseInt(process?.env?.PORT || "3000"),
    version: '1.0.0'
}