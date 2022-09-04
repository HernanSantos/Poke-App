import {usePagination} from "../hooks/usePagination"


export const PokePagination = (page) => {

    const{next,previous,rotation,numRotation,pagine} = usePagination(page)


  return (
    <nav aria-label="Page navigation example">
        <div className="pagination justify-content-end">

            <div className="page-item">
                <button className="page-link">Previous</button>
            </div>

            <button className="page-link">{numRotation[0]}</button>
            <button className="page-link">{numRotation[1]}</button>
            <button className="page-link">{numRotation[2]}</button>

            <div className="page-item">
                <button className="page-link" onClick={next}>Next</button>
            </div>
         </div>
    </nav>
  )
}
