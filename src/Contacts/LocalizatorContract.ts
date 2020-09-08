import { Maybe } from "@vladbasin/ts-types";

export interface LocalizatorContract {
    currentLanguage: string;
    has(key: string): boolean;
    localize(key: string): string;
    localizeAll(key: string, languages: string[]): Map<string, string>;
    getCurrentLanguage(): string;
    getCurrentLanguage(): string;
    getString(key: string): Maybe<string>;
    getStringWithLanguage(key: string, language: string): string;
}