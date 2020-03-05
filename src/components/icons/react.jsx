import React, { useState } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import logo from '../../logo.svg';

const Spinner = styled.div`
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    overflow: hidden;
    animation: App-logo-spin infinite 20s linear;
    animation-play-state: ${props => (props.spinning ? 'running' : 'paused')};
`;

const Logo = ({ width }) => {
    const [spinning, setSpinning] = useState(false);
    return (
        <Spinner style={{ width }} spinning={spinning} onClick={() => setSpinning(!spinning)}>
            <img src={logo} alt="" style={{ width, height: width }} />
        </Spinner>
    );
};

Logo.propTypes = {
    width: Proptypes.number.isRequired,
};

export default Logo;
