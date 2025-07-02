import avatar from '../assets/avatar2.jpg'

export default function Header() {
    return (
        <header className='card-header'>
            <img className='avatar' src={avatar} alt="Avatar" />
        </header>
    ) 
}