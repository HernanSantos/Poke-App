import {usePagination} from "../hooks/usePagination"

export const PokePagination = () => {

  const{next,previous} = usePagination();

  return (
    <nav aria-label="Page navigation example">
        <div className="pagination justify-content-end">

            <div className="page-item">
                <button  onClick={()=>previous()}>Previous</button>
            </div>

            {/* <button className="page-link">{numRotation[0]}</button>
            <button className="page-link">{numRotation[1]}</button>
            <button className="page-link">{numRotation[2]}</button> */}

            <div className="page-item">
                <button  onClick={()=>next()}>Next</button>
            </div>
         </div>
    </nav>
  )
}
