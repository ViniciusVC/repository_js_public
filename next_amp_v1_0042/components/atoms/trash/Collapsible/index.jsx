import React, {PureComponent as Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as mixins from '../../../helpers';



const CollapsibleContainer = styled.div`
  position: ${({position}) => position};
  top: ${({top}) => (Number.isNaN(top) ? top : `${top}px`)};
  right: ${({right}) => (Number.isNaN(right) ? right : `${right}px`)};
  bottom: ${({bottom}) => (Number.isNaN(bottom) ? bottom : `${bottom}px`)};
  left: ${({left}) => (Number.isNaN(left) ? left : `${left}px`)};


  padding: ${({padding}) => mixins.setSizes(padding)};
  margin: ${({margin}) => mixins.setSizes(margin)};
  width: ${({width}) => width};
  height: ${({height}) => (Number.isNaN(height) ? height : `${height}px`)};
  max-height: ${({maxHeight}) => maxHeight};
  
  transition: ${({transition}) => transition};
  overflow: ${({open, disabled}) => (open && disabled) ? 'visible' : 'hidden'};
  z-index: ${({zindex}) => zindex};
  ${({open}) => open && `animation-name: openCollapse; animation-duration: 0.5s;`}
`;

class Collapsible extends Component {
  state = {
    isOpen: this.props.open,
    height: this.props.open ? 'auto' : 0
  };

  collapsibleRef = React.createRef();

  componentDidMount() {
    const {isOpen} = this.state;

    if (isOpen) {
      this.getHeight();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {open} = this.props;
    const {isOpen} = this.state;

    // Catch any changes to prop open and compare to isOpen state, if different we update the state
    const hasOpenPropsChanged = prevProps.open !== open;
    const openPropAndStateMatch = open === isOpen;

    if (hasOpenPropsChanged && !openPropAndStateMatch) {
      if (open) {
        this.open();
      } else {
        this.close();
      }
    }

    // Catch isOpen state changes and recalculate the height if necessary
    const hasOpenStateChanged = prevState.isOpen !== isOpen;
    if (hasOpenStateChanged) {
      this.getHeight();
    }
  }

  getHeight = () => {
    this.setState(prevState => ({
      height: prevState.isOpen ? this.collapsibleRef.current.scrollHeight : 0
    }));
  };

  open = () => this.setState({isOpen: true});

  close = () => this.setState({isOpen: false});

  toggle = () => this.setState(prevState => ({isOpen: !prevState.isOpen}));

  render() {
    const {
      render,
      children,
      isOpen,
      renderTestTrigger,
      triggerRender,
      ...containerProps
    } = this.props;
    const {height} = this.state;

    return render ? (
      render({
        open: this.open,
        close: this.close,
        toggle: this.toggle,
        ref: this.collapsibleRef,
        height,
        isOpen
      })
    ) : (
      <Fragment>
        {/* Render test trigger */}
        {renderTestTrigger && (
          <div>
            <button type="button" onClick={this.toggle}>
              Trigger
            </button>
          </div>
        )}

        {/* custom render for trigger - backwards compatibility */}
        {triggerRender
          && triggerRender({
            open: this.open,
            close: this.close,
            toggle: this.toggle,
            isOpen
          })}

        <CollapsibleContainer
          {...containerProps}
          overflowx="visible"
          overflowy="visible"
          height={height}
          ref={this.collapsibleRef}
        >
          {children}
        </CollapsibleContainer>
      </Fragment>
    );
  }
}

// Props Documentation

Collapsible.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  triggerRender: PropTypes.func,
  renderTestTrigger: PropTypes.bool,
  open: PropTypes.bool, // Backwards compatibility
  isOpen: PropTypes.bool,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  transition: PropTypes.string,
  padding: PropTypes.arrayOf(PropTypes.number),
  margin: PropTypes.arrayOf(PropTypes.number)
};

Collapsible.defaultProps = {
  children: null,
  render: undefined,
  triggerRender: undefined,
  renderTestTrigger: false,
  open: false,
  maxHeight: 'initial',
  width: '100%',
  transition: '0.5s ease-in-out',
  padding: [0],
  margin: [0]
};

export default Collapsible;
