import { useState } from "react"

const Search = () => {

    const [city, setCity] = useState('')
    const [experience, setExperience] = useState('')
    const [pool, setPool] = useState('')

    // const newUrl = new URL(url)
    
    

    const onSubmit = () => {
        const params = new URLSearchParams()
        if(city !== '')
            console.log('hello')
            params.append('city', city);
        if(experience !== '')
            params.append('experience', experience);
        if(pool !== '')
            params.append('pool', pool);
        console.log(params.toString())
    }

    return (
        <>

            <div className="container">
                <div className="search-box">
                    <label className="label">City:</label>
                    <select className="select" value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value='' selected disabled >Select</option>
                        <option value='karachi' >Karachi</option>
                        <option value='lahore' >Lahore</option>
                        <option value='islamabad' >Islamabad</option>
                    </select>
                    <label className="label">Experience level:</label>
                    <select className="select" value={experience} onChange={(e) => setExperience(e.target.value)}>
                        <option value='' selected disabled >Select</option>
                        <option value='budget' >Budget</option>
                        <option value='luxury' >Luxury</option>
                        <option value='business' >Business</option>
                    </select>
                    <label className="label">Pool:</label>
                    <select className="select" value={pool} onChange={(e) => setPool(e.target.value)}>
                        <option value='' selected disabled >Select</option>
                        <option value='yes' >Yes</option>
                        <option value='no' >No</option>
                    </select>
                    <button className="submit-btn" type="button" onClick={onSubmit}>Search</button>
                </div>
            </div>
        </>
    )
}

export default Search