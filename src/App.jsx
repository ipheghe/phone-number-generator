// react imports
import React, { Component } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Container component housing the Single-Page application
 *
 * @class Dashboard
 * @extends {React.Component<DashboardProps, DashboardState>}
 */export default class App extends Component {
  /**
   * Creates an instance of App
   *
   * @param {object} props - props
   * @memberof App
   * @returns {void}
   */
  constructor(props) {
    super(props);

    this.state = {
      welcomeText: 'Welcome',
    };
  }

  /**
   * Renders App component
   *
   * @returns {JSX} jsx
   * @memberof App
   */
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
