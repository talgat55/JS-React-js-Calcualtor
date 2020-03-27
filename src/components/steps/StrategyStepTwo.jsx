import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Doughnut} from 'react-chartjs-2';
import SliderInputComponent from 'slider-input-react';
import Button from "../Button";
import TabContent from "../TabContent";
import {setIncrementCurrentStep} from "../../redux/actions";


const StrategyStepTwo = ({program, totalSum, termPeriod,currentStep,setIncrementCurrentStep}) => {

    const [valueFirstDoughnut, setValueFirstDoughnut] = useState(0);
    const [valueSecondDoughnut, setValueSecondDoughnut] = useState(0);
    const [valueFirstContribution, setValueFirstContribution] = useState(0);
    const [valueSecondContribution, setValueSecondContribution] = useState(0);


    let doughnutRefOne = useRef('');
    let doughnutRefTwo = useRef('');
    /*
* Click on Button Next
*/
    const handleClick = () => {

         setIncrementCurrentStep( currentStep +1)

    };
    const changeSlider = (e, key) => {
        if (key === 1) {
            setValueFirstContribution(e.target.value);
            // console.log( doughnutRefOne);
            // setTimeout(()=>{
            //     setValueFirstDoughnut(parseInt(valueFirstContribution/1000));
            //     doughnutRefOne.current.props.data.datasets[0].data.push(valueFirstDoughnut);
            //
            //     }, 200
            //
            // );


        } else {
            setValueSecondContribution(e.target.value);
            // setValueSecondDoughnut(parseInt(valueSecondContribution/1000));
            // doughnutRefTwo.update();
        }
    };
    let data = {
        maintainAspectRatio: false,
        datasets: [{
            data: [valueFirstDoughnut],
            backgroundColor: [
                'rgba(255,99,132,.6)',
                'rgba(155,99,132,.6)',
                'rgba(55,99,132,.6)',
            ]
        }],
        labels: [
            'red',
            'red 1',
            'red 2',
        ]
    };

    let dataTwo = {
        maintainAspectRatio: false,
        datasets: [{
            data: [valueSecondDoughnut],
            backgroundColor: [
                'rgba(255,99,132,.6)',
            ]
        }],
    };
    return (
        <StrategyStepTwoComponent>
            <TabContent
                sidebar={
                    <div>
                        <h3>Выбранная программа:</h3>
                        <p>
                            {program}
                        </p>
                        <h3>Параметры:</h3>
                        <p>Сумма займа: {totalSum}</p>
                        <p>Срок займа: {termPeriod}</p>

                    </div>
                }

            >
                <div className="content-half">
                    <div className="first">
                        {/*<Doughnut*/}
                            {/*ref={doughnutRefOne}*/}
                            {/*data={data}*/}
                            {/*width={300}*/}
                            {/*height={300}*/}
                        {/*/>*/}
                        <div className="first-block">
                            <h3>
                                Первоначальный взнос:
                            </h3>
                            <div>
                                {valueFirstContribution} p
                            </div>
                        </div>
                        <div className="slider-wrapper">
                            <div className="top">
                            </div>
                            <h3>
                                Сумма: <span>{valueFirstContribution}</span>
                            </h3>
                            <SliderInputComponent
                                min="0"
                                max="100000"
                                value={valueFirstContribution}
                                changeHandler={(e) => {
                                    changeSlider(e, 1)
                                }}
                            />
                        </div>


                    </div>
                    <div className="second">
                        {/*<Doughnut*/}
                            {/*ref={doughnutRefTwo}*/}
                            {/*data={dataTwo}*/}
                            {/*width={300}*/}
                            {/*height={300}*/}
                        {/*/>*/}
                        <div className="second-block">
                            <h3>
                                Ежемесячный взнос:
                            </h3>
                            <div>
                                {valueSecondContribution} p
                            </div>
                        </div>
                        <div className="slider-wrapper">
                            <h3>
                                Сумма: <span>{valueSecondContribution}</span>
                            </h3>
                            <SliderInputComponent
                                min="0"
                                max="100000"
                                value={valueSecondContribution}
                                changeHandler={(e) => {
                                    changeSlider(e, 2)
                                }}
                            />
                        </div>
                    </div>

                </div>
                <div>
                    <Button
                        onClick={handleClick}
                    >
                        Далее
                    </Button>
                </div>
            </TabContent>
        </StrategyStepTwoComponent>
    )
};
const StrategyStepTwoComponent = styled.div`
  .content-half{
    display: flex;
    .first{
      width: 50%;
      .first-block{
        text-align: center;
      }

    }
    
    .second{
      .second-block{
        text-align: center;
      } 
    }
    .second-block,
    .first-block{
      font-size: 26px;
    }
    .slider-wrapper{
      margin: 0 auto;
      width: 300px;
    }
    canvas{
      max-width: 300px;
      max-height: 300px;
      margin: 0 auto;
    }
  }
  
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #47d2a6;
  cursor: pointer;
  margin-top: -14px;  
}

/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb { 
  border: none;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #47d2a6;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type=range]::-ms-thumb { 
  border: none;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #47d2a6;
  cursor: pointer;
}
`;
const mapDispatchToProps = {
    setIncrementCurrentStep
};
const mapStateToProps = state => {
    return {
        program: state.data.program,
        totalSum: state.data.total_sum,
        termPeriod: state.data.term_period,
        currentStep: state.currentStep,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StrategyStepTwo);