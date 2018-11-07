import { types } from "mobx-state-tree";

export type Spaces = "none" | "populations";

export const UIModel = types
  .model("UI", {
    showInvestigationModalSelect: false,
    showInvestigationPanel: false,
    investigationPanelSpace: "none"
  })
  .actions((self) => {
    return {
      setShowInvestigationModalSelect(val: boolean) {
        self.showInvestigationModalSelect = val;
      },
      setShowInvestigationPanel(val: boolean) {
        self.showInvestigationPanel = val;
      },
      // stawman code
      setInvestigationPanelSpace(space: Spaces) {
        self.investigationPanelSpace = space;
      }
    };
  });

export type UIModelType = typeof UIModel.Type;
