import { Injectable } from '@angular/core';
import Dexie, { Table } from "dexie";

import { ShadowRunCharacter } from '../models/shadow-run.model';

const SHADOW_RUN_CHARACTER_TABLE_NAME = "shadowRunCharacters";

@Injectable({
  providedIn: 'root'
})
export class ShadowRunCharactersDatabaseService extends Dexie {
    private shadowRunCharactersTable!: Table<ShadowRunCharacter, string>;

	constructor() {
		super("GrimoireShadowRunCharacters");
		this.version(1).stores({
			shadowRunCharacters: "&id",
		});

		this.shadowRunCharactersTable = this.table(SHADOW_RUN_CHARACTER_TABLE_NAME);
	}

	async addCharacter(character: ShadowRunCharacter, key: string): Promise<void> {
		await this.shadowRunCharactersTable.add(character, key);
	}

	async getCharacters(): Promise<ShadowRunCharacter[]> {
		return await this.shadowRunCharactersTable.toArray();
	}

	async getCharacterById(id: string): Promise<ShadowRunCharacter | undefined> {
		return await this.shadowRunCharactersTable.where("id").equals(id).first();
	}

	async updateCharacter(key: string, update: ShadowRunCharacter): Promise<number> {
		const response = await this.shadowRunCharactersTable.update(key, update);
		return response;
	}

	async deleteCharacter(key: string): Promise<void> {
		return await this.shadowRunCharactersTable.delete(key);
	}

	async verifyIdExistsInTable(id: string): Promise<boolean> {
		const character = await this.shadowRunCharactersTable
			.where("id")
			.equals(id)
			.first();

		if (character) {
			return true;
		} else {
			return false;
		}
	}
}
