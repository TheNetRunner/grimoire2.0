import Joi from "joi";

export interface Inventory {
	id: string;
	name: string;
	gameSystem: string;
	currencies: Currency[];
	items: Item[];
	created: number;
	lastUpdated: number;
	notes: string;
}

export interface Item {
	id: string;
	name: string;
	quantity: number;
	amountPerItem: number;
	currencyPerItem: string;
	notes: string;
}

export interface Currency {
	name: string;
	amount: number;
}

export const uuidSchema = Joi.string().uuid({ version: "uuidv4" }).length(36);

export const currencySchema = Joi.object({
	name: Joi.string().required(),
	amount: Joi.number().required(),
});

export const itemSchema = Joi.object({
	id: uuidSchema.required(),
	name: Joi.string().required(),
	quantity: Joi.number().integer().min(0).required(),
	amountPerItem: Joi.number().required(),
	currencyPerItem: Joi.string().required(),
	notes: Joi.string().allow("").optional(),
});

export const inventorySchema = Joi.object({
	id: uuidSchema.required(),
	name: Joi.string().required(),
	gameSystem: Joi.string().required(),
	currencies: Joi.array().items(currencySchema).required(),
	items: Joi.array().items(itemSchema).required(),
	created: Joi.number().integer().min(0).required(),
	lastUpdated: Joi.number().integer().min(0).required(),
	notes: Joi.string().allow("").optional(),
});
