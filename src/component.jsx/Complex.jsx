

const complex = [
    {company: 'XYZ', jobs: ['Javascript', 'React']},
    {company: 'ABC', jobs: ['AngularJs', 'Ionic']}
]

function Complex(){
    return (
        <div>
            <h1>{complex[0].company}</h1>
            <h2>{complex[0].jobs[0]}</h2>
            <h3>{complex[0].jobs[1]}</h3>
            <h4>{complex[1].company}</h4>
            <h5>{complex[1].jobs[0]}</h5>
            <p>{complex[1].jobs[1]}</p>
        </div>
    )
}


export default Complex