import React from 'react';
import TabContent from "../TabContent";
import Button from "../Button";


export default () => {
    return (
        <>
            <TabContent
                sidebar={
                    <>
                        <div>

                            <select name="program">
                                <option selected="selected">Программа</option>
                                <option>Новая программа по недвижимости</option>
                                <option>Ипотека</option>
                                <option>Кредит</option>
                            </select>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="total_sum"
                                placeholder="Сумма займа"
                            />

                        </div>
                        <div>
                            <input
                                type="text"
                                name="term_period"
                                placeholder="Срок займа"
                            />
                        </div>

                    </>
                }

            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
                <div>
                    <Button>
                        Далее
                    </Button>
                </div>
            </TabContent>

        </>
    )
};