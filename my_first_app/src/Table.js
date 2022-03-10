import React, {Component} from 'react';


const TableHeader = () => {
	return (
	    <thead>
	     	<tr>
	        	<th>Name</th>
	        	<th>Job</th>
	    	</tr>
	    </thead>
	)
}

const TableBody = (props) => {
  	const rows = props.profilesData.map((row, index) => {
	    return (
	    	<tr key={index}>
	        	<td>{row.name}</td>
	        	<td>{row.job}</td>
	        	<td> <button onClick={() => props.removeProfile(index)}>Delete</button></td>
	        </tr>
	    )
  	})

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  	render() {
  		
		const {profilesData, removeProfile} = this.props

		return (
			<table>
  				<TableHeader />
  				<TableBody profilesData={profilesData} removeProfile={removeProfile} />
			</table>
		)
		
  	}
}

export default Table