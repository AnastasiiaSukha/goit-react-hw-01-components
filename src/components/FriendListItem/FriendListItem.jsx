import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (<>
            <span className={css.status}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        </>
    )
}

FriendListItem.protoTypes = {
       avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
       name: PropTypes.string.isRequired,
}