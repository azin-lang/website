export const AUTHORS = {
	spatulari: {
		id: "spatulari",
		name: "Spatulari",
		github: "https://github.com/spatulari",
		avatar: "https://avatars.githubusercontent.com/u/206748761?v=4",
		role: "founder"
	},
	pascalecu: {
		id: "pascalecu",
		name: "Ștefan",
		github: "https://github.com/pascalecu",
		avatar: "https://avatars.githubusercontent.com/u/165364995?v=4",
		role: "founder"
	},
	zapaxe: {
		id: "zapaxe",
		name: "Zapaxe",
		github: "https://github.com/zapaxe",
		avatar: "https://avatars.githubusercontent.com/u/95616484?v=4",
		role: "founder"
	},
	twlve: {
		id: "twlve",
		name: "twlve",
		github: "https://github.com/yydev-official",
		avatar: "https://avatars.githubusercontent.com/u/242444168?v=4",
		role: "founder"
	},
	brysonak: {
		id: "brysonak",
		name: "bryson",
		github: "https://github.com/brysonak",
		avatar: "https://avatars.githubusercontent.com/u/264277691?v=4",
		role: "founder"
	},
	alien: {
		id: "alien",
		name: "Alien",
		github: "https://github.com/just-another-alien",
		avatar: "https://avatars.githubusercontent.com/u/109413186?v=4",
		role: "founder"
	},
} satisfies Record<string, Author>;

export type Author = {
	id: string;
	name: string;
	github?: string;
	avatar?: string;
	role?: string;
	description?: string;
	website?: string;
};