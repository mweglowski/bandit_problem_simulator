import React from "react";
import DistributionPanel from "./DistributionPanel";
import Button from "../UI/Button";
import { useBanditContext } from "../context/BanditContext";

const DistributionPanels = ({ data, onRandomizeButtonClick, onRunAgentButtonClick }) => {
  const { banditsData } = useBanditContext();

  const randomizeButtonClickHandler = () => {
    onRandomizeButtonClick();
  };

  const runAgentButtonClickHandler = () => {
    onRunAgentButtonClick();
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {banditsData.map((panelData) => (
          <DistributionPanel key={panelData.id} data={panelData} />
        ))}
      </div>

      <div className="mt-2 flex justify-between">
        <Button onButtonClick={runAgentButtonClickHandler}>Run Agent</Button>
        <Button onButtonClick={randomizeButtonClickHandler}>Randomize</Button>
      </div>
    </div>
  );
};

export default DistributionPanels;
