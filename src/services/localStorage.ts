import { ListItemDesc, TeamItem } from "../interfaces/interfaces"; 

const KEYS = {
    allPlayersList: 'allPlayersList',
    allTeams: 'allTeams',
};

const save = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const get = (key: string) => {
    const saved = localStorage.getItem(key);
    if (saved) {
        return JSON.parse(saved);
    }
    return [];
};

const saveAllPlayersList = (playerList: ListItemDesc[]) => save(KEYS.allPlayersList, playerList);
const saveAllTeams = (teams: TeamItem[][]) => save(KEYS.allTeams, teams);

const getAllPlayersList = (): ListItemDesc[] => get(KEYS.allPlayersList);
const getAllTeams = (): TeamItem[][] => get(KEYS.allTeams);

export const localStorageService = {
    saveAllPlayersList,
    getAllPlayersList,
    saveAllTeams,
    getAllTeams,
};
