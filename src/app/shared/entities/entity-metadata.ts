import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

// If the name changes here, then also change it in app.constants.ts file.
const entityMetadata: EntityMetadataMap = {
    User: {}
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames
};
