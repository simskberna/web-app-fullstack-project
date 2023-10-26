export const setCategory = (category) => {
    return (dispatch) => {
        localStorage.setItem('PAGE_TYPE',category);
        dispatch({
            type:'category',
            payload:category,
        })
    } 
}