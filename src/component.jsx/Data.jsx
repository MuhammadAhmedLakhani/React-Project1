

const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}];


function Data(){

    return (
        <div>
            <h1>{list[0].name}</h1>
            <h2>{list[1].name}</h2>
            <h3>{list[2].name}</h3>
        </div>
    )
}


export default Data