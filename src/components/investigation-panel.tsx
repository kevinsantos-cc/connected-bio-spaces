import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";
import { ChartTest } from "./charts/chart-test";

import "./investigation-panel.sass";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class InvestigationPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const showChart = true;
    return (
      <div className="investigation-panel">
        <div className="header">
          <div className="title">Investigate: Population</div>
          <div className="close" onClick={this.handleClickClose}>x</div>
        </div>
        <div className="content">
          {showChart &&
            <div>
              <ChartTest />
            </div>
          }
          {!showChart &&
            <iframe src="https://connected-bio.concord.org/branch/populations-model/"
              height="650" width="1120" scrolling="no">
              <p>Your browser does not support iframes.</p>
            </iframe>
          }

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
