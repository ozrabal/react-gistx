import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    //console.log('error boundary', this.state)
    if (this.state.hasError) {
      console.log('error boundary', this.state)
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}
