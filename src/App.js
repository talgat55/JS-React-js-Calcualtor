import React from 'react';
import styled from 'styled-components';
import MainLayout from "./components/MainLayout";

function App() {
    const listSteps = [
        {
            id: '0',
            component: 'ChooseProgramStepOne'
        }
    ];

    const listNav = [
        {
            id: '0',
            name: 'Программа',
            description: 'выбор параметров',
        },
        {
            id: '1',
            name: 'Стратегия ',
            description: 'взносы по программе',
        },
        {
            id: '2',
            name: 'Итог',
            description: 'расчет ожидания',
        },
    ];

    return (
        <AppBlock className="app">
            <MainLayout
                nav={listNav}
            />
        </AppBlock>
    );
}

const AppBlock = styled.section` 
       font-family: 'Baloo 2', cursive;
       font-size: 16px;
       line-height: 1.5;
     
`;
export default App;
