import React, {useState} from 'react'
import s from './HW2.module.css'
import Affairs from './Affairs'

export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter(f => f.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(d => d._id != _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any

    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={s.hw}>

          <h2>homeworks 2</h2>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                filter={filter}
                deleteAffairCallback={deleteAffairCallback}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>
    )
}

export default HW2
