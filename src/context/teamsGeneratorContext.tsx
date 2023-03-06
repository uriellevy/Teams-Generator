import React, { useState, useEffect, createContext } from "react";
import { dummyListItems } from "../constants/Consts";
import { ListItemDesc } from "../interfaces/interfaces";
import { v4 as uuidv4 } from 'uuid';
import ListItem from "../components/pages/home/ListItem";

export interface TeamsGeneratorContextType {
    allPlayersList: ListItemDesc[]
    onPlayerAdd: (name: string, rating: number) => void
    onToggleActiveStatus: (id: string) => void
    onDeletePlayer: (id: string) => void
}


export const TeamsGeneratorContext = createContext<TeamsGeneratorContextType | null>(null);

export const TeamsGeneratorProvider = (props: any) => {
    const [allPlayersList, setAllPlayersList] = useState<ListItemDesc[]>(dummyListItems);

    const onPlayerAdd = (name: string, rating: number) => {
        if (!name || !rating) return
        setAllPlayersList([...allPlayersList, {
            playerName: name,
            rating: rating,
            id: uuidv4(),
            isActive: true,
            isEditMode: false,
        }]);
    }


    const onDeletePlayer = (id: string) => {
        const updatedList = allPlayersList.filter((listItem) => listItem.id !== id)
        setAllPlayersList([...updatedList]);
    }

    const onEditPlayer = () => {

    }

    const onToggleActiveStatus = (id: string) => {
        const updatedList = allPlayersList.map((listItem) => {
            if (listItem.id === id) {
                return { ...listItem, isActive: !listItem.isActive }
            } else return { ...listItem }
        })
        setAllPlayersList(updatedList)
    }

    const randomShuffle = () => {

    }

    const sortByRating = () => {

    }





    const value = {
        allPlayersList,
        onPlayerAdd,
        onToggleActiveStatus,
        onDeletePlayer,
    };

    return (
        <TeamsGeneratorContext.Provider value={value}>
            {props.children}
        </TeamsGeneratorContext.Provider>
    );
}