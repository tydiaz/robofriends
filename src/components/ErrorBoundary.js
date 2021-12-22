import { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorOcurred: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ errorOcurred: true });
  }

  render() {
    if (this.state.errorOcurred) {
      return <h1>Ops! Looks like something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
