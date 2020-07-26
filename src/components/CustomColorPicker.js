import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import CategoryContext from '../context/Category/CategoryContext';

class CustomColorPicker extends React.Component {
    static contextType = CategoryContext;
    state = {
        displayColorPicker: false,
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.context.changeCategoryColor(color.hex);
    };

  render() {
    const context = this.context;

    const styles = reactCSS({
      'default': {
        color: {
          minHeight: '1.8em',
          borderRadius: '2px',
          background: `${context.color}`,
        },
        swatch: {
          padding: '5px',
          background: '#222',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          background: '#333',
          right: '0',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? 
            <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ this.handleClose }/>
                <SketchPicker disableAlpha={true} color={ context.color } onChange={ this.handleChange } />
            </div> : 
            null 
        }
      </div>
    )
  }
}

export default CustomColorPicker