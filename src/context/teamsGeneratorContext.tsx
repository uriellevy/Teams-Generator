import React, { useState, createContext } from "react";
import { dummyListItems } from "../constants/Consts";
import { ListItemDesc } from "../interfaces/interfaces";
import { v4 as uuidv4 } from 'uuid';
import { localStorageService } from "../services/localStorage";

export interface TeamsGeneratorContextType {
    allPlayersList: ListItemDesc[]
    allTeams: ListItemDesc[][]
    onPlayerAdd: (name: string, rating: number) => void
    onToggleActiveStatus: (id: string) => void
    onDeletePlayer: (id: string) => void
    onEditPlayerConfirm: (id: string, newPlayer: string, newRating: number) => void
    onOpenEditMode: (id: string) => void
    randomShuffle: (teamsNumber: number) => void
    sortByRating: (teamsNumber: number) => void
}


export const TeamsGeneratorContext = createContext<TeamsGeneratorContextType | null>(null);

export const TeamsGeneratorProvider = (props: any) => {
    const [allPlayersList, setAllPlayersList] = useState<ListItemDesc[]>(localStorageService.getAllPlayersList());
    const [allTeams, setAllTeams] = useState<ListItemDesc[][]>([])

    const onPlayerAdd = (name: string, rating: number) => {
        const updatedList = [...allPlayersList, {
            playerName: name,
            rating: rating,
            id: uuidv4(),
            isActive: true,
            isEditMode: false,
        }]
        setAllPlayersList(updatedList);
        localStorageService.saveAllPlayersList(updatedList);
    }



    const onDeletePlayer = (id: string) => {
        const updatedList = allPlayersList.filter((listItem) => listItem.id !== id)
        setAllPlayersList([...updatedList]);
        localStorageService.saveAllPlayersList(updatedList);
    }

    const onEditPlayerConfirm = (id: string, newPlayer: string, newRating: number) => {
        if (!newPlayer) return
        const updatedList = allPlayersList.map((listItem) => {
            if (listItem.id === id) {
                return { ...listItem, playerName: newPlayer, rating: newRating, isEditMode: false }
            } else return { ...listItem }
        })
        setAllPlayersList(updatedList);
        localStorageService.saveAllPlayersList(updatedList);
    }

    const onOpenEditMode = (id: string) => {
        const editListItem = allPlayersList.find((listItem) => listItem.isEditMode === true);
        const isEditAlreadyOpened = editListItem !== undefined;
        if (isEditAlreadyOpened) return;
        const updatedList = allPlayersList.map((listItem) => {
            if (listItem.id === id) {
                return { ...listItem, isEditMode: !listItem.isEditMode }
            } else return { ...listItem }
        })
        setAllPlayersList(updatedList)
    }

    const onToggleActiveStatus = (id: string) => {
        const updatedList = allPlayersList.map((listItem) => {
            if (listItem.id === id) {
                return { ...listItem, isActive: !listItem.isActive }
            } else return { ...listItem }
        })
        setAllPlayersList(updatedList)
        localStorageService.saveAllPlayersList(updatedList);
    }

    const randomShuffle = (teamsNumber: number) => {
        const shuffledItems = allPlayersList.sort(() => Math.random() - 0.5).filter((listItem) => listItem.isActive);
        const teamItems: ListItemDesc[][] = Array.from({ length: teamsNumber }, () => []);
        for (let i = 0; i < shuffledItems.length; i++) {
            const teamIndex = i % teamsNumber;
            teamItems[teamIndex].push(shuffledItems[i]);
        }
        setAllTeams(teamItems);
    }

    const sortByRating = (teamsNumber: number) => {
        const teamsArray: ListItemDesc[][] = Array.from({ length: teamsNumber }, () => []);
        const activeSortedPlayers = allPlayersList.filter((listItem) => listItem.isActive).sort((a, b) => (a.rating < b.rating) ? 1 : (a.rating > b.rating) ? -1 : Math.random() - 0.5);
        let currentTeamIdx = 0;

        for (let i = 0; i < activeSortedPlayers.length; i++) {
            if (currentTeamIdx === teamsArray.length) {
                teamsArray.reverse();
                currentTeamIdx = 0;
            }
            teamsArray[currentTeamIdx].push(activeSortedPlayers[i])
            currentTeamIdx++;
        }
        setAllTeams(teamsArray);
    }







    const value = {
        allPlayersList,
        allTeams,
        onPlayerAdd,
        onToggleActiveStatus,
        onDeletePlayer,
        onEditPlayerConfirm,
        onOpenEditMode,
        randomShuffle,
        sortByRating,
    };

    return (
        <TeamsGeneratorContext.Provider value={value}>
            {props.children}
        </TeamsGeneratorContext.Provider>
    );
}