import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"
import { shopData } from "../../redux/shopSlice"
import { useSelector } from "react-redux"



export default function StatsSection({ gridArrangement = "row", background = true }) {
    
    const {lightBackground} = useContext(ThemeContext)
    const statisticsData = useSelector(shopData)
    const statistics = statisticsData.statistics
    const stats = [
        { id: 1, name: 'Products made', value: statistics.products },
        { id: 2, name: 'Catalogs for you', value: statistics.catalogs },
        { id: 3, name: 'Total users', value: statistics.users },
    ]

    return (
        <div className={background ?`${lightBackground} py-24 sm:py-32` : "py-24 sm:py-32"}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className={gridArrangement === "row" ? "grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3" :
                    "grid grid-cols-1 gap-y-10 gap-x-8 text-center lg:grid-cols-1"}>
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
