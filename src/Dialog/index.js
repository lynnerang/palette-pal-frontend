import React, { Component } from 'react';

class Dialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      paletteName: '',
      project: 0,
      newProject: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/api/v1/projects')
      .then(res => res.json())
    .then(projects => this.setState({projects}))
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  handleClick = e => {
    const { paletteName, project, newProject } = this.state;
    const data = { paletteName, project };

    if (this.state.newProject) {
      fetch('http://localhost:30001/api/v1/projects', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newProject
        })
      })
        .then(res => data = { paletteName, project: res.body.id })
    }
    
    this.props.primaryAction(data);
    this.setState({
      paletteName: '',
      project: 0,
      newProject: ''
    })
  }

  render() {
    const colors = Object.values(this.props.colors);
    const colorDivs = colors.map(color => <div className="preview-color" key={color} style={{ backgroundColor: color }}></div>);
    const projectOptions = this.state.projects.map(p => {
      return <option key={p.id} value={p.id}>{p.name}</option>
    });

    return (
      <div className="dialog-overlay">
        <div className="popup">
          <i className="fas fa-times" onClick={this.props.closeDialog}></i>
          <h3>Save New Palette</h3>
          <input className="dropdown-input palette-name-input" name="paletteName" placeholder="Enter Palette Name..." onChange={this.handleChange}></input>
          <div className="palette-preview">
            {colorDivs}
          </div>
          <label htmlFor="project">Choose A Project</label>
          <select className="dropdown-input project-input" name="project" onChange={this.handleChange}>
            {projectOptions}
          </select>
          <div className="dialog-divider"><hr /><p>OR</p><hr /></div>
          <label htmlFor="newProject">Create New Project</label>
          <input className="project-input" name="newProject" placeholder="Enter Project Name..." onChange={this.handleChange}></input>
          <div className="dialog-btns">
            <button className="dialog-btn cancel-btn" type="button" onClick={this.props.closeDialog} >
              Cancel
            </button>
            <button className="dialog-btn" type="button" onClick={this.handleClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
