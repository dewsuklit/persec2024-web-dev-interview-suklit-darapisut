export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    search = search.toLowerCase();

    let startsWithSearch: string[] = [];
    let containsSearch: string[] = [];

    items.forEach((item) => {
        let lowerCaseItem = item.toLowerCase();
        if (lowerCaseItem.indexOf(search) === 0) {
            startsWithSearch.push(item);
        } else if (lowerCaseItem.indexOf(search) > -1) {
            containsSearch.push(item);
        }
    });

    let result: string[] = startsWithSearch.concat(containsSearch);

    return result.slice(0, maxResult);
}


