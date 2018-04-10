
import {
    Identifier
} from "microinject";


import {
    BinarySerializable
} from "../../../binary-serializer";

import {
    SaveGame,
    SaveGameHeader,
    SaveGameInfo,
    SaveBody,
    GameSaveRoot,
    GameSettings,
    GameObject,
    GameSaveData
} from "../interfaces";


function getSymbol(name: string): symbol {
    return Symbol(`${name}::v7_3`);
}


// We treat parsed objects as services to allow them to reference each other.
//  This is primarily used to let components access the type templates.

export interface SaveGameInstance extends SaveGame, BinarySerializable {};
export const SaveGameInstance: Identifier<SaveGameInstance> = getSymbol("SaveGameInstance");

export interface SaveGameHeaderInstance extends SaveGameHeader, BinarySerializable {};
export const SaveGameHeaderInstance: Identifier<SaveGameHeaderInstance> = getSymbol("SaveGameHeaderInstance");

export interface SaveGameInfoInstance extends SaveGameInfo, BinarySerializable {};
export const SaveGameInfoInstance: Identifier<SaveGameInfoInstance> = getSymbol("SaveGameInfoInstance");

export interface SaveBodyInstance extends SaveBody, BinarySerializable {};
export const SaveBodyInstance: Identifier<SaveBodyInstance> = getSymbol("SaveBodyInstance");

export interface GameSaveRootInstance extends GameSaveRoot, BinarySerializable {};
export const GameSaveRootInstance: Identifier<GameSaveRootInstance> = getSymbol("GameSaveRootInstance");

export interface GameSettingsInstance extends GameSettings, BinarySerializable {};
export const GameSettingsInstance: Identifier<GameSettingsInstance> = getSymbol("GameSettingsInstance");

/**
 * This is anagolous to the ONI assembly's ```SaveManager``.
 * However, we name it for what it does, because we already
 * have enough things called "save".
 * Everything else called "save" deals with the save file
 * structure, while this explicitly deals with instantiating
 * game objects.
 */
export interface GameObjectManager extends BinarySerializable {
    readonly gameObjects: Map<string, GameObject[]>;
}
export const GameObjectManager: Identifier<GameObjectManager> = Symbol("GameObjectManager");


export interface GameSaveDataInstance extends GameSaveData, BinarySerializable {}
export const GameSaveDataInstance: Identifier<GameSaveDataInstance> = getSymbol("GameSaveDataInstance");