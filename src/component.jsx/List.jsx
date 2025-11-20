
const data = ['We','are','United']; 


function List(){
    return (
        <div>
            <h2>{data[0]}</h2>
            <h3>{data[1]}</h3>
            <p>{data[2]}</p>
        </div>
    )
}

export default List;