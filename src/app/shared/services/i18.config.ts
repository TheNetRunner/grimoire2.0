import i18next from "i18next";

i18next.init({
	lng: "en",
	resources: {
		en: {
			translation: {
				item: {
					one: "item",
					other: "items",
				},
			},
		},
	},
});

export default i18next;
