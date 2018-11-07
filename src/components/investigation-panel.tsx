import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./investigation-panel.sass";
import { PopulationsComponent } from "./spaces/populations/populations";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class InvestigationPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    return (
      <div className="investigation-panel">
        <div className="header">
          <div className="title">Investigate: Population</div>
          <div className="close" onClick={this.handleClickClose}>x</div>
        </div>
        <div className="content">
          <PopulationsComponent />
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
