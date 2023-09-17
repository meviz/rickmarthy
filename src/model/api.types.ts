export interface DataInfo {
	count: number;
	next: string | null;
	prev: string | null;
	info: string;
	pages: number;
}

export interface Episode {
	id: number;
	name: string;
	url: string;
	air_date: string;
	created: string;
	characters: string[];
	episode: string;
}

export interface CharacterFilterValue {
	type: string;
	status: CharacterStatusType[];
	gender: CharacterGenderType[];
}

export interface Character {
	id: number;
	name: string;
	created: string;
	episode: string[];
	gender: CharacterGenderType;
	image: string;
	status: CharacterStatusType;
	type: string;
}

export interface ListResponse<T> {
	info: DataInfo;
	results: T[];
}

export interface GetEpisodeCharacterRequest {
	filter?: CharacterFilterValue;
	search?: string;
	page: number;
}

export type CharacterGenderType = "Female" | "Male" | "Genderless" | "Unknown";
export type CharacterStatusType = "Alive" | "Dead" | "Unknown";
