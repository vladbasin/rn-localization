import { ModuleContract, ServiceCollectionBuilder } from "@vladbasin/ts-dependencies";
import { LocalizatorContract } from '../Contacts/LocalizatorContract';
import { Localizator } from '../Services/Localizator';
import { ServiceIds } from "./ServiceIds";

export class LocalizationModule implements ModuleContract {
    public register(builder: ServiceCollectionBuilder): ServiceCollectionBuilder {
        return builder
            .add<LocalizatorContract>(ServiceIds.localizator, Localizator, [
                ServiceIds.localizationStringsProvider
            ]);
    }
}