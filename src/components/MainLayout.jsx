import React from 'react';
import styled from 'styled-components';
import NavItem from "./NavItem";
import ChooseProgramStepOne from "./steps/ChooseProgramStepOne";

export default ({nav, sidebar}) => {
    return (
        <MainLayoutBlock>
            <ul className="nav">
                {
                    nav.map(item => (
                        <NavItem
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            description={item.description}
                        />))
                }
            </ul>
            <div className="tab-content">
                <ChooseProgramStepOne/>

            </div>
        </MainLayoutBlock>
    )
};

const MainLayoutBlock = styled.section`
  .nav{
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    
    li{
      list-style: none;
      width: 33.33%;
      display: flex;
      align-items: center;
      background: #f5f5f5;
      justify-content: center;
      h3,
      p{
        color: #545353;
      }
      
      .number{
        font-size: 135px;
        line-height: 100px;
        padding-left: 50px;
        color: #d8d7d7;
      }
    }
  }
  .tab-content{
    display: flex;
    width: 100%;
    .tab-item{
      display: flex;
      width: 100%;
      .sidebar{
        width: 30%;
        padding: 20px 30px 20px 20px; 
        
        select{
          padding: 20px;
          border: 1px solid #eee;
          background: transparent;
          margin-bottom: 20px;
          font-family: 'Baloo 2', cursive;
          font-size: 16px;
          width: 100%;
        }
        input{
          padding: 20px;
          border: 1px solid #eee;
          font-family: 'Baloo 2', cursive;
          font-size: 16px;
          box-sizing: border-box;
          width: 100%;
          margin-bottom: 20px;
        }
        
        
      }
      .content{
        flex: 1;
        padding: 40px 30px 20px 0;
      }
    }
    
  }

`;