import {
    LuRedo2,
    LuUndo2,
    LuBold,
    LuItalic,
    LuUnderline,
    LuStrikethrough,
    LuLink,
    LuAlignLeft,
    LuAlignRight,
    LuAlignCenter,
    LuQuote,
    LuHeading1,
    LuHeading2,
    LuHeading3,
    LuList,
    LuListOrdered,
    LuRemoveFormatting,
    LuCode,
    LuImage
} from "react-icons/lu";

export const eventTypes = {
    paragraph: "paragraph",
    h1: "h1",
    h2: "h2",
    ul: "ul",
    ol: "ol",
    quote: "quote",
    formatCode: "formatCode",
    formatUndo: "formatUndo",
    formatRedo: "formatRedo",
    formatBold: "formatBold",
    formatItalic: "formatItalic",
    formatUnderline: "formatUnderline",
    formatStrike: "formatStrike",
    formatInsertLink: "formatInsertLink",
    formatAlignLeft: "formatAlignLeft",
    formatAlignCenter: "formatAlignCenter",
    formatAlignRight: "formatAlignRight",
    insertImage: "insertImage",
};

const pluginsList = [
    {
        id: 1,
        Icon: LuRemoveFormatting,
        event: eventTypes.paragraph,
    },
    {
        id: 2,
        Icon: LuHeading1,
        event: eventTypes.h1,
    },
    {
        id: 3,
        Icon: LuHeading2,
        event: eventTypes.h2,
    },
    {
        id: 4,
        Icon: LuList,
        event: eventTypes.ul,
    },

    {
        id: 5,
        Icon: LuListOrdered,
        event: eventTypes.ol,
    },
    {
        id: 6,
        Icon: LuQuote,
        event: eventTypes.quote,
    },

    {
        id: 7,
        Icon: LuCode,
        event: eventTypes.formatCode,
    },
    {
        id: 8,
        Icon: LuUndo2,
        event: eventTypes.formatUndo,
    },
    {
        id: 9,
        Icon: LuRedo2,
        event: eventTypes.formatRedo,
    },
    {
        id: 10,
        Icon: LuBold,
        event: eventTypes.formatBold,
    },
    {
        id: 11,
        Icon: LuItalic,
        event: eventTypes.formatItalic,
    },
    {
        id: 12,
        Icon: LuUnderline,
        event: eventTypes.formatUnderline,
    },
    { // reactive it if you need it
        id: 13,
        Icon: LuStrikethrough,
        event: eventTypes.formatStrike,
    },
    {
        id: 14,
        Icon: LuImage,
        event: eventTypes.insertImage,
    },
    {
        id: 15,
        Icon: LuLink,
        event: eventTypes.formatInsertLink,
    },
    {
        id: 16,
        Icon: LuAlignLeft,
        event: eventTypes.formatAlignLeft,
    },

    {
        id: 17,
        Icon: LuAlignCenter,
        event: eventTypes.formatAlignCenter,
    },
    {
        id: 18,
        Icon: LuAlignRight,
        event: eventTypes.formatAlignRight,
    },
];

export default pluginsList;
