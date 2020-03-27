import React from 'react';
import cx from 'classnames';
import {connect} from 'react-redux';
import styled from 'styled-components';

const NavItem = ({title, description, id, count, currentStep}) => {

    return (
        <NavItemComponent className={cx({active: parseInt(id) + 1 === parseInt(currentStep) && true})}>
            <div>
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>
            <div className="number">
                {parseInt(id) + 1}
            </div>

        </NavItemComponent>
    );
};
const NavItemComponent = styled.li`
    &.active{
      background: #47d2a6!important;
      h3,
      .number,
      p{
        color: #fff!important;
      }
    } 
`;
const mapStateToProps = state => {
    return {
        currentStep: state.app.currentStep,
    };
};

export default connect(mapStateToProps, null)(NavItem);