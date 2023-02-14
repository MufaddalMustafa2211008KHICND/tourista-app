import { useState } from "react"

const Search = () => {

    const [city, setCity] = useState('')
    const [experience, setExperience] = useState('')
    const [pool, setPool]=useState('')

    const onSubmit = () => {

    }

    return(
        <>
        <div className="container">
            <div className="search-box">
                <label className="label">City:</label>
                <select className="select" value={city} onChange={(e) => setCity(e.target.value)}>
                    <option>Karachi</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                </select>
                <label className="label">Experience level:</label>
                <select className="select" value={experience} onChange={(e) => setExperience(e.target.value)}>
                    <option>Budget</option>
                    <option>Luxury</option>
                    <option>Business</option>
                </select>
                <label className="label">Pool:</label>
                <select className="select" value={pool} onChange={(e) => setPool(e.target.value)}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <button className="submit-btn" type="button" onClick={onSubmit}>Search</button>
            </div>
            </div>
        </>
    )
}

export default Search