/**
 * Plugin loader function for the menu.
 */
export declare function menuLoader(extension: any): Promise<{
    items: {
        location: string[];
        command: string;
    }[];
}>;
/**
 * Plugin loader function for the UI items.
 */
export declare function uiLoader(extension: any): Promise<any>;
