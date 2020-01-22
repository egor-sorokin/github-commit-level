import styled from 'styled-components';


export const SpinnerContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    
    transform: translateY(-50%);
`;

export const CenteredSpinnerContainer = styled.div`
    height: 120px;
    width: 100%;
    
    position: relative;
`;

export const ResetFieldIconContainer = styled.div`
    padding-right: 6px;

    opacity: ${({ userName }) => userName && userName.length > 0 ? 1 : 0};
    visibility: ${({ userName }) => userName && userName.length > 0 ? 'visible' : 'hidden'};

    line-height: 100%;
    cursor: pointer;
    
    transition: opacity 0.15s cubic-bezier(0.25, 0.25, 0.25, 0.25),
    visibility 0.15s cubic-bezier(0.25, 0.25, 0.25, 0.25);
`;
