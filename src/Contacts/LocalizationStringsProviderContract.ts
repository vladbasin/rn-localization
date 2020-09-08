export interface LocalizationStringsProviderContract {
    getLanguage(): string;
    getString(key: string, language?: string): string;
}