import './createUser.css'

const CreateUser = () => {
    return (
        <div className='createUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label>Username</label>
                    <input type="text" placeholder='santiago' />
                </div>
                <div className='newUserItem'>
                    <label>Full Name</label>
                    <input type="text" placeholder='santiago Xo' />
                </div>
                <div className='newUserItem'>
                    <label>Email</label>
                    <input type="email" placeholder='santiago@gmail.com' />
                </div>
                <div className='newUserItem'>
                    <label>Password</label>
                    <input type="password" placeholder='password' />
                </div>
                <div className='newUserItem'>
                    <label>Phone</label>
                    <input type="text" placeholder='+234 786 4533 764' />
                </div>
                <div className='newUserItem'>
                    <label>Address</label>
                    <input type="text" placeholder='Enugu | Nigeria' />
                </div>
                <div className='newUserItem'>
                    <label>Gender</label>
                    <div className='newUserGender'>
                        <input type='radio' name='gender' id='male' value='male' />
                        <label for='male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female' />
                        <label for='female'>Female</label>
                        <input type='radio' name='gender' id='others' value='others' />
                        <label for='other'>Others</label>
                    </div>
                </div>
                <div className='newUserItem'>
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}

export default CreateUser