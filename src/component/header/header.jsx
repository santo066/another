import profile from '../../assets/images/profile.png'
export default function Header()
{
    return (
        <header className='flex justify-between  border-b-2 p-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl'>Knoledgr cafe</h1>
            <img src={profile} alt="" />
        </header>
    )
}