import {css} from "styled-components";

export const layoutStyles = {
    flex: {
        base: css`
            display: flex;
        `,
        horizontal: css`
            flex-direction: row;
        `,
        vertical: css`
            flex-direction: column;
        `,
        alignments: {
            center: css`
                justify-content: center;
                align-items: center;
            `,
            between: css`
                justify-content: space-between;
                align-items: center;
            `,
        },
    },
    grid: {
        base: css`
            display: grid;
        `,
        // responsive: css`
        //     display: grid;
        //     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        //     grid-gap: 10px;
        // `,
    },
} as const;

export const buttonStyles = {
    reset: css`
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    `,
} as const;
