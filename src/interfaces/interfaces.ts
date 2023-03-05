export interface TeamItem {
    playerName: string
    rating: number
    id: string
}
export interface ListItemDesc extends TeamItem {
    isActive: boolean
    isEditMode: boolean
}
