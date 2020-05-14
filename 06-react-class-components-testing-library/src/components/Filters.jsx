import React from 'react';

import './Filters.scss'

class Filters extends React.Component {

	constructor(props) {
		super(props)

		this.state = { 
			name: '',
			selectedButton: '',
		}
	}

	handleNameChange = name => {
		this.setState({ name })
	}

	render() {
		const {
			handleOrderByAtt,
			handleFilterByName,
		} = this.props

		return (
			<div data-testid="filters" className="container">
				<section className="filters">
					<div className="filters__search">
						<input 
							type="text"
							className="filters__search__input"
							placeholder="Pesquisar"
							value={this.state.name}
							onChange={e => this.handleNameChange(
								e.target.value, handleFilterByName(e.target.value)
								)}
						/>

						<button className={"filters__search__icon"} onClick={() => handleFilterByName(this.state.name)}>
							<i className="fa fa-search"/>
						</button>
					</div>

					<button 
						className={this.state.selectedButton === 'name' ? "filters__item is-selected" : "filters__item"} 
						onClick={() => {
							handleOrderByAtt('name'); 
							this.setState({selectedButton: 'name'})
							}}
					>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button 
						className={this.state.selectedButton === 'country' ? "filters__item is-selected" : "filters__item"} 
						onClick={() => {
							handleOrderByAtt('country')
							this.setState({selectedButton: 'country'})
						}}
					>
						País <i className="fas fa-sort-down" />
					</button>

					<button 
						className={this.state.selectedButton === 'company' ? "filters__item is-selected" : "filters__item"} 
						onClick={() => {
							handleOrderByAtt('company')
							this.setState({selectedButton: 'company'})
						}}>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button 
						className={this.state.selectedButton === 'department' ? "filters__item is-selected" : "filters__item"} 
						onClick={() => {
							handleOrderByAtt('department')
							this.setState({selectedButton: 'department'})
						}}>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button
						className={this.state.selectedButton === 'admissionDate' ? "filters__item is-selected" : "filters__item"} 
						onClick={() => {
							handleOrderByAtt('admissionDate')
							this.setState({selectedButton: 'admissionDate'})
						}}>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
