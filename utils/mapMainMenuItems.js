import { v4 as uuid } from 'uuid'

export const mapMainMenuItems = (menuItems) => {
    return menuItems.map((manuItem) => ({
        id: uuid(),
        destination: manuItem.menuItem.destination?.uri,
        label: manuItem.menuItem.label,
    }))
}