import { UIModel, UIModelType } from "./ui";
import { PopulationsModelType, PopulationsModel } from "./spaces/populations/populations";

export type AppMode = "authed" | "dev" | "test" | "demo" | "qa";

export interface IStores {
  appMode: AppMode;
  ui: UIModelType;
  populations: PopulationsModelType;
}

export interface ICreateStores {
  appMode?: AppMode;
  ui?: UIModelType;
  populations?: PopulationsModelType;
}

export function createStores(params?: ICreateStores): IStores {
  return {
    appMode: params && params.appMode ? params.appMode : "dev",
    ui: params && params.ui || UIModel.create({}),
    populations: params && params.populations || PopulationsModel.create({})
  };
}
