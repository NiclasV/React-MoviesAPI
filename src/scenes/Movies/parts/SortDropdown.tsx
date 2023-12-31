import { Container } from "../../../components/layout/Containers";
import Dropdown from "../../../components/ui/elements/Dropdown";
import { useMoviesContext } from "../../../context/MoviesParamsContext";

const sortByArr = ["Popularity desc",  "Revenue desc", "Vote_count desc"]

export const SortDropdown = () => {
    const { searchParams, updateSearchParams } = useMoviesContext();

    // Function to add or update a key-value pair in searchParams
    const addOrUpdateParam = (key: string, value: any) => {
        value = value.toLowerCase().replace(/\s/g, '.')

        var newParams = new URLSearchParams(searchParams)
        
        newParams.set(key, value);
        newParams.set("page", "1");
        updateSearchParams(newParams);
    };

    return (
        <Container $direction="row" $alignitems="center" $justify="flex-end" $padding="0">
            <Dropdown label="Popularity desc" items={sortByArr} onItemClick={(item) => {
                addOrUpdateParam("sort_by", item)
            }} />
        </Container>
    );
}