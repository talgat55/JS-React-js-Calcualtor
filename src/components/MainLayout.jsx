import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import NavItem from "./NavItem";
import StepTemplate from "./steps/StepTemplate";

const MainLayout = ({currentStep,nav}) => {

        return (
            <MainLayoutBlock>
                <ul className="nav">
                    {
                        nav.map(item => (
                            <NavItem
                                key={item.id}
                                id={item.id}
                                count={item.id}
                                title={item.name}
                                description={item.description}
                            />))
                    }
                </ul>
                <div className="tab-content">
                    <StepTemplate
                        currentStep={currentStep}
                    />
                </div>
            </MainLayoutBlock>
        )
    }
;
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
      width: 100vw!important;
    
      .sidebar{
        width: 18%;
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
const mapStateToProps = state => {
    return {
        currentStep: state.app.currentStep,
    };
};
export default connect(mapStateToProps, null)(MainLayout);


