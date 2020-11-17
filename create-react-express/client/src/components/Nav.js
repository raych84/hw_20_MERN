import React from "react";

const Nav = ()=> {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<ul>
				<li>
				<a  className="navbar-brand" href="/">Search</a>
				</li>
				<li> <a href="/books">Save</a>
					</li>
			</ul>
			
		</nav>
	);
}
export default Nav;