import SearchButton from "../../atoms/search-button/search-button";
import SearchInput from "../../atoms/search-input/search-input";
import './search-bar.css';

interface Props {
    searchInput: string,
    handleSubmit: () => void,
    handleSearch: (e: { target: HTMLInputElement }) => void
}

const SearchBar = ({ searchInput, handleSearch, handleSubmit }: Props) => {
    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <SearchButton />
                <SearchInput input={searchInput} handleSearch={handleSearch} />
             </form>
        </div>
    )
}

export default SearchBar;