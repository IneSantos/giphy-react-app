import './search-input.css'

interface Props {
    input: string,
    handleSearch: (e: { target: HTMLInputElement }) => void
}

const SearchInput = ({ input, handleSearch }: Props) => {
    return <input type="text" className="search-term" placeholder="What are you looking for?" onChange={handleSearch} value={input} />;
}

export default SearchInput;