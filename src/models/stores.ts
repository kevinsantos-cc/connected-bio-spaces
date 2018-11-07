import { UIModel, UIModelType } from "./ui";
import { PopulationsModelType, createPopulationsModel } from "./spaces/populations/populations";

export type AppMode = "authed" | "dev" | "test" | "demo" | "qa";

export type Curriculum = "mouse";

const currentCurriculum = "mouse";

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
    populations: params && params.populations || createPopulationsModel(currentCurriculum)
  };
}
