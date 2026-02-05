export type TFilter = '1' | '7' | '30' | '365'

const filters: { label: string; value: TFilter }[] = [
    { label: '24H', value: '1' },
    { label: '1W', value: '7' },
    { label: '1M', value: '30' },
    { label: '1Y', value: '365' },
]

interface IFilters {
    setFilter: (filter: TFilter) => void;
    value: TFilter;
}

export default function Filters({ setFilter, value }: IFilters) {
    return (
        <div className="w-full px-12 lg:px-40 xl:px-24 2xl:px-40 pb-4 text-xs">
            <div className="flex justify-between">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        className={`${filter.value === value ? 'text-primary-500 font-bold' : 'cursor-pointer text-neutral-300'} body-mini`}
                        onClick={() => setFilter(filter.value)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    )
}