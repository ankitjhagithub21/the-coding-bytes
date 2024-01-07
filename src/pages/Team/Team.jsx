import React from 'react'
import TeamBox from '../../components/TeamBox/TeamBox'
import members from './data'

const Team = () => {
    return (
        <section>
            <div className="px-5 py-24">
                <h1 className="text-center text-3xl lg:text-4xl font-bold mb-20">
                    Our Team
                </h1>
                <div className="flex flex-wrap -m-4">

                   {
                    members.map((member)=>{
                        return <TeamBox key={member.id} data={member}/>
                    })
                   }
                    

                </div>
            </div>
        </section>

    )
}

export default Team