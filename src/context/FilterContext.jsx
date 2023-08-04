import { createContext, useContext } from "react"

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    rating: null
}

export const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({children}) => {
    const value = {}
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext)
    return context
}