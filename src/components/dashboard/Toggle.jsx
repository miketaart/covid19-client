import React from 'react';

class Toggle extends React.Component {  
    render() {
      return (
        <div className="Toggle">
          <button className="Toggle__Button" onClick={this.props.action}>
            {this.props.children}
          </button>
        </div>
        
      );
    }
  }

  export default Toggle