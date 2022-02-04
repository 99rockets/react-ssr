export type PageTemplateOptions = {
	/** Title */
	title: string;
	/** Metadata */
	meta: string;
	/** Page content */
	content: string;
	/** Application state */
	preloadedState: object;
	/** Additional scripts */
	scripts: string[];
};

export type RenderOptions = {
	/** Page identifier */
	pageId: string;
	/** Application state */
	preloadedState?: object;
};
