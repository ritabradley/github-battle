import React, { Component } from 'react';

class Popular extends Component {
  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'Python'];
    return (
      <ul className="flex justify-center list p10">
        {languages.map((language, i) => (
          <li key={i} className="link pa3 f4 ttu dim b">
            {language}
          </li>
        ))}
      </ul>
    );
  }
}

export default Popular;
