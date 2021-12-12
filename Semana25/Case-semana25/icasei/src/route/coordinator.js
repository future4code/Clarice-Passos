export const goToDetailPage = (history, id) => {
    history.push(`/video/:id`)
}

export const goToSearchPage = (history) => {
    history.push("/")
}