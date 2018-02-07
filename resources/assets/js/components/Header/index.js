import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <div className="header">

                <div className="row">
                    <div className="col-xs-12 col-sm-3"></div>
                    <div className="col-xs-12 col-sm-3">
                        <Link to="/">
                            <div className="navItem">Home</div>
                        </Link>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <Link to="/productList">
                            <div className="navItem">Product List</div>
                        </Link>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <Link to="/productCreate">
                            <div className="navItem">Product Create</div>
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}


export default Header;
