import React from 'react'
const Button = ({type, url, title, logo}) => {
    const getButtonClassName = () => {
        switch(type){
            case 'yellow' :
                return 'btn-yellow'

                case 'black' :
                return 'btn-black'

                case 'transparent' :
                return 'btn-transparent'

                case 'blackRound' :
                return 'btn-black-round'

                case 'white' :
                return 'btn-white'
                
        }
    }

  return (
    <a className={getButtonClassName()} href={url}>{title}<i className="fa-solid fa-up-right-from-square"></i></a>
    )
}

export default Button