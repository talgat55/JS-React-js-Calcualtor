import React from 'react';
import ChooseProgramStepOne from "./ChooseProgramStepOne";
import StrategyStepTwo from "./StrategyStepTwo";
import TotalStepTree from "./TotalStepTree";

export default ({currentStep}) => {
    switch (currentStep) {
        case 1:
            return <ChooseProgramStepOne/>;

        case 2:
            return <StrategyStepTwo/>;

        case 3:
            return <TotalStepTree/>;

        default:
            return <ChooseProgramStepOne/>;
    }
};