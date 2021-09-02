import React from 'react'

export default function ex_1() {
    const state ={
        name : "Hello World",
        obj : {name: "Hello World Object"},
        data : ['We', 'are', 'United'] ,
        list : [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}],
        complex : [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs' ,'Ionic']}]
    }
    return (
        <div>
            <span>{state.data[0]}</span>
            <span>{state.data[1]}</span>
            <span>{state.data[2]}</span>
            <ul>
                {state.list.map((item,i)=><li key={i}>{item.name}</li>)}
            </ul>
        </div>
    )
}
