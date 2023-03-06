import {ListItemDesc, TeamItem} from "../interfaces/interfaces";

export const CONSTS = {
    NAV_TITLE: "עמוד הבית",
    GENERATE_TEAMS_BTN: "צור קבוצות",
    LIST_EMPTY_TEXT: "התחל להזין שחקנים",
    MODAL_MAIN_TITLE: "?כמה קבוצות",
    MODAL_CONFIRM: "אישור",
    MODAL_CANCEL: "ביטול",
    ACTIVE_PLAYER: "פעיל",
    NOT_ACTIVE_PLAYER: "לא פעיל",
    NOT_POSSIBLE_RESPONSE: "- כמות הקבוצות צריכה להיות קטנה מ",
    TEAMS_RESULTS: "הקבוצות שלך!",
    BACK_HOME_PAGE: "חזור",
};

export const dummyListItems: ListItemDesc[] = [
    {
        playerName: "אבי נמני",
        rating: 8,
        isActive: true,
        isEditMode: false,
        id: "6",
    },
    {
        playerName: "מנור סולומון",
        rating: 10,
        isActive: false,
        isEditMode: false,
        id: "1",
    },
    {
        playerName: "עומר אצילי",
        rating: 0,
        isActive: true,
        isEditMode: false,
        id: "2",
    },
    {
        playerName: "אבי יחיאל",
        rating: 6,
        isActive: true,
        isEditMode: false,
        id: "3",
    },
    {
        playerName: "ליואר אסולין",
        rating: 8,
        isActive: true,
        isEditMode: false,
        id: "4",
    },
    {
        playerName: "אלון מזרחי",
        rating: 7,
        isActive: true,
        isEditMode: false,
        id: "5",
    },
    {
        playerName: "ליאו מסי",
        rating: 9,
        isActive: true,
        isEditMode: false,
        id: "512",
    },
    {
        playerName: "כריסטיאנו רונאלדו",
        rating: 10,
        isActive: true,
        isEditMode: false,
        id: "101010",
    },
    {
        playerName: "טוני קרוס",
        rating: 9,
        isActive: true,
        isEditMode: false,
        id: "767876",
    },
    {
        playerName: "ערן זהבי",
        rating: 4,
        isActive: true,
        isEditMode: false,
        id: "2992",
    },
];

export const dummyTeams: TeamItem[][] = [
    [ {
        playerName: "אבי נמני",
        rating: 8,
        id: "6",
    },
    {
        playerName: "מנור סולומון",
        rating: 10,
        id: "1",
    },
    {
        playerName: "עומר אצילי",
        rating: 0,
        id: "2",
    },],
    [ {
        playerName: "אבי נמני",
        rating: 8,
        id: "6",
    },
    {
        playerName: "מנור סולומון",
        rating: 10,
        id: "1",
    },
    {
        playerName: "עומר אצילי",
        rating: 0,
        id: "2",
    },],
    [ {
        playerName: "אבי נמני",
        rating: 8,
        id: "6",
    },
    {
        playerName: "מנור סולומון",
        rating: 10,
        id: "1",
    },
    {
        playerName: "עומר אצילי",
        rating: 0,
        id: "2",
    },],
];