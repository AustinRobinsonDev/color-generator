import Values from 'values.js';
const Navbar = ({color, setColor, error, list, setList}) => {
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            let main = new Values(color).all(10)
            setList(main)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <nav className='navbar'>
            <form onSubmit={handleSubmit}>
                <h2 className='m-r'>Color Generator</h2>
                <input className={`${error ? 'error' : null} m-r`} onChange={(e) => setColor(e.target.value)} type="text" value={color} />
                <button type='submit' className='btn m-r'>Submit</button>
            </form>
        </nav>
    )
}

export default Navbar