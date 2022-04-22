import HeaderBottom from '../HeaderBottom/HeaderBottom';
import HeaderTop from '../HeaderTop/HeaderTop';
import HeaderPreview from '../HeaderPreview/HeaderPreview'

import classes from './Header.module.css'

// Header 컴포넌트
const Header = (props) => {
    return (
        <>
            <header>
                <HeaderTop className={classes.headerTop}/>
                <HeaderBottom className={classes.headerBottom} />
                <HeaderPreview />
            </header>
        </>
    )
};

export default Header;