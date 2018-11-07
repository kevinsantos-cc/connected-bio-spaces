import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./investigation-panel.sass";
import { PopulationsComponent } from "./spaces/populations/populations";

interface IProps extends IBaseProps {}
interface IState {}

const SpaceComponents: any = {
  populations: PopulationsComponent
};

@inject("stores")
@observer
export class InvestigationPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui} = this.stores;

    // stawman code
    const currentSpace = ui.investigationPanelSpace;
    const SpaceComponent = SpaceComponents[currentSpace];

    return (
      <div className="investigation-panel">
        <div className="header">
          <div className="title">Investigate: Population</div>
          <div className="close" onClick={this.handleClickClose}>x</div>
        </div>
        <div className="content">
          <SpaceComponent />
        </div>
        <div className="footer"/>
      </div>
    );
  }

  private handleClickClose = () => {
    const {ui} = this.stores;
    { ui.setShowInvestigationPanel(!ui.setShowInvestigationPanel); }
  }

}
