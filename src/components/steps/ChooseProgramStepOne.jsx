import React, {useState} from 'react';
import TabContent from "../TabContent";
import Button from "../Button";
import {connect} from 'react-redux';
import {setProgram, setTermPeriod, setTotalSum} from "../../redux/actions";

const ChooseProgramStepOne = (props) => {
    const [programs, setPrograms] = useState('');
    const [total_sum, setTotal_sum] = useState('');
    const [term_period, setTerm_period] = useState('');
    /*
    * Event by change input
    */
    const eventHandler = (e) => {
        e.persist();

        if (e.target.name === 'programs') {
            setPrograms(e.target.value);
        } else if (e.target.name === 'total_sum') {
            setTotal_sum(e.target.value)
        } else {
            setTerm_period(e.target.value)
        }
    };

    /*
    * Click on Button Next
    */
    const handleClick = () => {

        props.setProgram(programs);
        props.setTotalSum(total_sum);
        props.setTermPeriod(term_period);

    };

    return (
        <>
            <TabContent
                sidebar={
                    <form>
                        <div>

                            <select
                                onChange={eventHandler}
                                name="programs"
                                value={programs}
                            >
                                <option>Программа</option>
                                <option>Новая программа по недвижимости</option>
                                <option>Ипотека</option>
                                <option>Кредит</option>
                            </select>
                        </div>
                        <div>
                            <input
                                value={total_sum}
                                onChange={eventHandler}
                                type="number"
                                name="total_sum"
                                placeholder="Сумма займа"
                            />

                        </div>
                        <div>
                            <input
                                value={term_period}
                                onChange={eventHandler}
                                type="number"
                                name="term_period"
                                placeholder="Срок займа"
                            />
                        </div>

                    </form>
                }

            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
                <div>
                    <Button
                        onClick={handleClick}
                    >
                        Далее
                    </Button>
                </div>
            </TabContent>

        </>
    )

};
const mapDispatchToProps = {
    setProgram,
    setTotalSum,
    setTermPeriod
};

export default connect(null, mapDispatchToProps)(ChooseProgramStepOne);