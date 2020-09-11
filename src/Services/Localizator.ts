import { Maybe } from '@vladbasin/ts-types';
import { isNil } from 'lodash';
import moment from 'moment';
import { LocalizationStringsProviderContract } from '../Contacts/LocalizationStringsProviderContract';
import { LocalizatorContract } from '../Contacts/LocalizatorContract';

export class Localizator implements LocalizatorContract {
    private readonly _localizationStringsProvider: LocalizationStringsProviderContract;

    public constructor(dep: {
        localizationStringsProvider: LocalizationStringsProviderContract
    }) {
        this._localizationStringsProvider = dep.localizationStringsProvider;

        moment.locale(this.getCurrentLanguage());
    }

    public get currentLanguage() { return this.getCurrentLanguage(); }

    public has(key: string): boolean {
        return !isNil(this.getString(key as any));
    }

    public localize(key: string): string {
        return this.getString(key) || key;
    }

    public localizeAll(key: string, languages: string[]): Map<string, string> {
        return languages
            .reduce((acc, language) => acc.set(language, this.getStringWithLanguage(key, language)), new Map<string, string>());
    }

    public getCurrentLanguage(): string {
        return this._localizationStringsProvider.getLanguage();
    }   

    public getString(key: string): Maybe<string> {
        return this._localizationStringsProvider.getString(key);
    }

    public getStringWithLanguage(key: string, language: string): string {
        return this._localizationStringsProvider.getString(key, language);
    }
}