import styled from 'styled-components';
import { layoutStyles } from '@/styles';

export const ToolbarList = styled.div`
    ${layoutStyles.flex.base}
    ${layoutStyles.flex.horizontal}
    ${layoutStyles.flex.alignments.between}
    height: 40px;
    padding: 0 5px;
`;

export const ToolbarButton = styled.button`
    ${layoutStyles.flex.base}
    ${layoutStyles.flex.alignments.center}
    font-size: 18px;
    padding: 4px;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
        background-color: ${({ theme }) => theme.colors};
    }
`;